// NAVBAR


const nav = document.querySelector('.nav')
const hero = document.querySelector('.hero')

const frontendBtn = document.getElementById('frontendBtn')

const frontendSection = document.querySelector('.container.frontend')



window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY > hero.offsetHeight-46.2) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}





// NIGHT AND DAY MODE

const nightmode = document.querySelector('.nightmode')
const daymode = document.querySelector('.daymode')


nightmode.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  nightmode.classList.toggle('active')
  daymode.classList.toggle('active')
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
  } else {
    html.classList.add('dark')
  }
})

daymode.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  nightmode.classList.toggle('active')
  daymode.classList.toggle('active')
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
  } else {
    html.classList.add('dark')
  }
})
