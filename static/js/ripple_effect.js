const image = document.querySelector('.image')


image.addEventListener('click', function (e) {
  const x = e.clientX
  const y = e.clientY

  const imageLeft = e.target.offsetLeft
  const imageTop = e.target.offsetTop

  const xInside = x -imageLeft
  const yInside = y - imageTop

  const circle = document.createElement('span')
  circle.classList.add('circle')
  circle.style.left = xInside + 'px'
  circle.style.top = yInside + 'px'

  this.appendChild(circle)

  setTimeout(() => circle.remove(), 1000)

})
