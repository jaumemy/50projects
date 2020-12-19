const left = document.querySelector('.left')
const right = document.querySelector('.right')
const down = document.querySelector('.down')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

down.addEventListener('mouseenter', () => container.classList.add('hover-down'))
down.addEventListener('mouseleave', () => container.classList.remove('hover-down'))
