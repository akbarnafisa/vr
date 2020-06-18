// // vue.config.js
// const path = require('path')

// module.exports = {
//   chainWebpack: config => {
//     const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
//     types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
//   },
// }

// function addStyleResource (rule) {
//   rule.use('style-resource')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [
//         path.resolve(__dirname, './src/scss/settings.scss'),
//       ],
//     })
// }


const path = require('path');
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
  }
},
chainWebpack: config => {
  const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
  types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
}
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/variables/variables.scss'),
      ],
    })
}