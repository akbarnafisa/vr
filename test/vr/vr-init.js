const path = require('path');
const urlList = require('./config').urlList;
const VisualRegression = require('./vr-helper');

(async function(x) {
  const Vr = new VisualRegression({
    host: 'http://127.0.0.1:8080',
    outputPath: path.resolve(__dirname, `reff-images`),
  });
  Vr.setUrlList(urlList)
  await Vr.init()
  await Vr.setViewport({ width: 1000, height: 600 })
  await Vr.screenshot()
  Vr.end()
})();
