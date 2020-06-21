module.exports = {
  urlList: [
    {
      filename: 'button',
      url: 'button',
      options: {
        viewport: [{ width: 400, height: 600 }, { width: 600, height: 600 }],
        evaluate () {
          // this will be executed within the page, that was loaded before
          // this will be executed within the page, that was loaded before
          document.body.style.opacity = 0
        },
        waitElement: 'button',
      }
    },
    {
      filename: 'card',
      url: 'card',
    },
    {
      filename: 'button',
      url: 'dialog',
      options: {
        evaluate () {
          document.querySelector('button').click()
        },
        waitElement: '.modal-container',
      }
    },
  ]
}
