const nav = document.querySelector('.nav')


// NIGHT AND DAY MODE

const nightmode = document.querySelector('.nightmode')
const daymode = document.querySelector('.daymode')


nightmode.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  nightmode.classList.toggle('active')
  daymode.classList.toggle('active')
  html.classList.add('dark')
})

daymode.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  nightmode.classList.toggle('active')
  daymode.classList.toggle('active')
  html.classList.remove('dark')
})




// SPANISH AND ENGLISH MODE

const spanishmode = document.querySelector('.spanishmode')
const englishmode = document.querySelector('.englishmode')


spanishmode.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  spanishmode.classList.toggle('active')
  englishmode.classList.toggle('active')
  html.classList.add('spanish')
  translateAll()
})

englishmode.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  spanishmode.classList.toggle('active')
  englishmode.classList.toggle('active')
  html.classList.remove('spanish')
  translateAll()
})



function translateAll() {
  const translate_p1 = document.querySelector('.translate_p1')
  translate_p1.classList.toggle('spanish_p1')

  const translate_p2 = document.querySelector('.translate_p2')
  translate_p2.classList.toggle('spanish_p2')

  const translate_p3 = document.querySelector('.translate_p3')
  translate_p3.classList.toggle('spanish_p3')

  const translate_p4 = document.querySelector('.translate_p4')
  translate_p4.classList.toggle('spanish_p4')
}
