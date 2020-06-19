const scrubbersWindow = document.querySelectorAll('.scrubber-window')
scrubbersWindow.forEach(scrubberWindow => {
  const scrubberBar = scrubberWindow.children[0]
  const scrubberBefore = scrubberWindow.children[1]
  const scrubberafter = scrubberWindow.children[2]

  scrubberWindow.addEventListener('mousemove', () => {
    const minWidthEl = 0
    const maxWidthEl = 400
    let windowChangeSize = scrubberWindow.getClientRects()
    let x = event.pageX - windowChangeSize[0].x;
    if (x < minWidthEl) {
      x = minWidthEl
    } else if (x > maxWidthEl) {
      x = maxWidthEl
    }

    scrubberBar.style.left = x + "px";
    scrubberBefore.style.width = (maxWidthEl - x) + "px";
    scrubberafter.style.width = x + "px";
  })
})

const lists = document.querySelectorAll('.list__header')
lists.forEach(list => {
  list.addEventListener('click', () => {
    list.parentNode.classList.toggle('active')
  })
})
