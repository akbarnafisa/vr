const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')
const pixelmatch = require('pixelmatch')
const PNG = require('pngjs').PNG

const template = ({ totalTest, passedTest, render }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Visual Regresion</title>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:600|Roboto&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="main.css">
    </head>

    <body>
      <div class="nav">
        <div class="container">
          <div class="progress__bar">
            <div style="width: ${passedTest / totalTest * 100}%" class="progress__bar-inner"></div>
          </div>
          <div class="progress__result title ${ passedTest !== totalTest ? 'differ' : null}">
          ${passedTest} OUT OF ${totalTest} TEST HAS BEEN PASSED
          </div>
        </div>
      </div>
      <div class="container">
        ${render}
      </div>
    </body>

    </html>
    <script src="main.js"></script>
  `
}

module.exports = class VisualRegression {
  constructor (option = {}) {
    const {compareMode, host, outputPath, reffPath, urlList, threshold} = option
    this.host = host || null
    this.compareMode = compareMode || false
    this.browser = null
    this.page = null
    this.urlList = urlList || null
    this.outputPath = outputPath || null
    this.reffPath = reffPath || null
    this.fixedFilename = null
    this.threshold = threshold || 0.05
  }
  async init () {
    // init puppeteer browser
    this.browser = await puppeteer.launch()
    this.page = await this.browser.newPage()
  }
  async setViewport (viewport) {
    // set page view port
    await this.page.setViewport(viewport)
  }
  setOutputPath (path) {
    this.outputPath = path
  }
  setFilename (name) {
    this.fixedFilename = name
  }
  async screenshot () {
    const capture = async () => {
      let counter = 0
      const len = this.urlList.length
      while (counter < len) {
        const currentUrl = this.urlList[counter]
        const filename = this.compareMode ? 'test' : currentUrl.filename
        const outputPath = this.compareMode ? `${this.outputPath}/assets/${currentUrl.filename}` :  this.outputPath
        const url = currentUrl.url
        const option = currentUrl.options
        const { timeout } = option ? option : {}

        // open url
        await this.page.goto(`${this.host}/${url}`)

        // set timeout it's declared on option
        timeout ? await this.sleep(timeout) : null

        const path = `${outputPath}/${filename}.png`
        // screenshot the page
        await this.page.screenshot({
          path: path,
          fullPage: true
        })
        counter += 1
      }
    }
    await capture()
  }
  async sleep (ms) {
    await this.page.waitFor(ms);
  }
  setUpReportDir () {
    // create dir
    fs.mkdirSync(this.outputPath)
    // create assets in output dir
    fs.mkdirSync(`${this.outputPath}/assets`)
    this.urlList.forEach(url => {
      fs.mkdirSync(`${this.outputPath}/assets/${url.filename}`)
      const source = `${this.reffPath}/${url.filename}.png`
      const target = `${this.outputPath}/assets/${url.filename}/reff.png`
      // copy reference to output path
      fs.copyFileSync(source, target)
    })
  }
  compareImage (filename) {
    const reffImg = PNG.sync.read(fs.readFileSync(`${this.outputPath}/assets/${filename}/reff.png`))
    const testImg = PNG.sync.read(fs.readFileSync(`${this.outputPath}/assets/${filename}/test.png`))
    const { width, height } = reffImg
    const diff = new PNG({ width, height })
    const diffValue = pixelmatch(reffImg.data, testImg.data, diff.data, width, height, { threshold: this.threshold })
    fs.writeFileSync(`${this.outputPath}/assets/${filename}/diff.png`, PNG.sync.write(diff))
    return diffValue
  }
  compareAndReport () {
    let totalTest = 0
    let passedTest = 0

    const render = `
      ${
      this.urlList.map(url => {
        const filename = url.filename
        const diffValue = this.compareImage(filename)
        totalTest += 1
        passedTest = diffValue === 0 ? passedTest += 1 : passedTest
        return `
              <div class="list">
                <div class="list__header">
                  <div class="list__title title">
                    ${filename}
                    <div class="list__diff body ${diffValue ? `differ` : null}">
                      ${diffValue ? `Alert!` : ''}
                    </div>
                  </div>
                  <div class="list__arrow ${diffValue ? `differ` : 0}"></div>
                </div>
                <div class="list__image-wrapper">
                  <div class="list__image">
                    <div class="title">REFF / TEST</div>
                    <div class='scrubber-window'>
                      <div class='scrubber-bar'>
                      </div>
                      <div class='scrubber-before'>
                        <div style="background-image: url(assets/${filename}/reff.png)"></div>
                      </div>
                      <div class='scrubber-after'>
                        <div style="background-image: url(assets/${filename}/test.png)"></div>
                      </div>
                    </div>
                  </div>
                  <div class="list__image">
                    <div class="title">DIFF</div>
                    <img src="assets/${filename}/diff.png" />
                  </div>
                </div>
              </div>
            `
      }).join(" ")
      }
    `
    const dataToRender = {
      totalTest,
      passedTest,
      render,
    }

    fs.copyFileSync(path.resolve(__dirname, 'templates/main.css'), `${this.outputPath}/main.css`)
    fs.copyFileSync(path.resolve(__dirname, 'templates/main.js'), `${this.outputPath}/main.js`)
    fs.writeFileSync(`${this.outputPath}/index.html`, template(dataToRender))
  }
  end () {
    process.exit()
  }
}