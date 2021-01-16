const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const brushBtn = document.getElementById('brush')
const eraseBtn = document.getElementById('erase')
const paintBtn = document.getElementById('paint')
const sizeEL = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearEl = document.getElementById('clear')

const ctx = canvas.getContext('2d')

let size = 5
let isPressed = false
let color = 'black'
let x
let y


canvas.addEventListener('mousedown', (e) => {
  isPressed = true

  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false

  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', (e) => {
  if(isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})

canvas.addEventListener('click', (e) => {
  x = e.offsetX
  y = e.offsetY
  drawCircle(x, y)
})

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click', () => {
  if (size < 10) {
    size += 1
  } else if(size >= 10 & size < 25 ) {
    size += 5
  } else if(size >= 25) {
    size = 25
  }
  updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
  if (size > 1 & size <= 10) {
    size -= 1
  } else if(size > 10 & size <= 25 ) {
    size -= 5
  } else if(size < 1) {
    size = 1
  }
  updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => {
  color = e.target.value
  selectedColor = e.target.value
})

eraseBtn.addEventListener('click', () => {
  color = '#F8F8FF'
})

clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))

paintBtn.addEventListener('click', () => {
  ctx.fillStyle = selectedColor
  ctx.fillRect(0, 0, canvas.width, canvas.height)
})

brushBtn.addEventListener('click', () => {
  color = selectedColor
})
