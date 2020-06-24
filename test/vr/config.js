module.exports = {
  urlList: [
    {
      filename: 'button',
      url: 'button',
    },
    {
      filename: 'color',
      url: 'color',
      options: {
        fullPage: true,
      }
    },
    {
      filename: 'dialog',
      url: 'dialog',
      options: {
        evaluate () {
          document.querySelector('button').click()
        },
        waitElement: '.modal-container',
        // sleep: 1000,
      }
    },
    // {
    //   filename: 'card',
    //   url: 'card',
    //   options: {
    //     viewport: [{ width: 575, height: 820 }, { width: 768, height: 820 }, { width: 1200, height: 961 }],
    //     fullPage: true,
    //   }
    // },
  ]
}
