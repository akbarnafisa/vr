const path = require('path');
const urlList = require('./config').urlList;
const VisualRegression = require('./vr-helper');

(async function() {
  const Vr = new VisualRegression({
    compareMode: true,
    host: 'http://127.0.0.1:8080',
    reffPath: path.resolve(__dirname, `reff-images`),
  });
  Vr.setUrlList(urlList)
  Vr.setOutputPath('vr-report')
  Vr.setUpReportDir()
  await Vr.init()
  await Vr.setViewport({ width: 1000, height: 600 })
  await Vr.screenshot()
  Vr.compareAndReport()
  Vr.end()
})();
