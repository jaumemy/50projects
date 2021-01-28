// NAVBAR


const nav = document.querySelector('.nav')
const hero = document.querySelector('.hero')

const frontendBtn = document.getElementById('frontendBtn')

const frontendSection = document.querySelector('.container.frontend')



window.addEventListener('scroll', fixNav)

function fixNav() {
  const adjust1 = document.querySelector('.adjust1')
  const adjust2 = document.querySelector('.adjust2')


  if (window.scrollY > hero.offsetHeight-46.2) {
    nav.classList.add('active')
    adjust1.classList.add('active')
    adjust2.classList.add('active')
  } else {
    nav.classList.remove('active')
    adjust1.classList.remove('active')
    adjust2.classList.remove('active')
  }
}



// DROPDOWN MENU WITH ANIMATED ANIMATION

const hamb = document.querySelector('.hamb')
const hambtoggle = document.getElementById('hambtoggle')
const dropdownMenuExpanded = document.querySelector('.dropdownMenuExpanded')

hambtoggle.addEventListener('click', (e) => {
  hamb.classList.toggle('active')
  dropdownMenuExpanded.classList.toggle('active')
})





// NIGHT AND DAY MODE

const nightmode = document.querySelector('.nightmode')
const daymode = document.querySelector('.daymode')

const nightmodeMobile = document.querySelector('.mobilenightmode')
const daymodeMobile = document.querySelector('.mobiledaymode')


nightmode.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  nightmode.classList.toggle('active')
  daymode.classList.toggle('active')
  nightmodeMobile.classList.toggle('active')
  daymodeMobile.classList.toggle('active')
  html.classList.add('dark')
})

daymode.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  nightmode.classList.toggle('active')
  daymode.classList.toggle('active')
  nightmodeMobile.classList.toggle('active')
  daymodeMobile.classList.toggle('active')
  html.classList.remove('dark')
})

nightmodeMobile.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  nightmode.classList.toggle('active')
  daymode.classList.toggle('active')
  nightmodeMobile.classList.toggle('active')
  daymodeMobile.classList.toggle('active')
  html.classList.add('dark')
})

daymodeMobile.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  nightmode.classList.toggle('active')
  daymode.classList.toggle('active')
  nightmodeMobile.classList.toggle('active')
  daymodeMobile.classList.toggle('active')
  html.classList.remove('dark')
})




// SPANISH AND ENGLISH MODE

const spanishmode = document.querySelector('.spanishmode')
const englishmode = document.querySelector('.englishmode')

const spanishmodeMobile = document.querySelector('.mobilespanishmode')
const englishmodeMobile = document.querySelector('.mobileenglishmode')


spanishmode.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  spanishmode.classList.toggle('active')
  englishmode.classList.toggle('active')
  spanishmodeMobile.classList.toggle('active')
  englishmodeMobile.classList.toggle('active')
  html.classList.add('spanish')
  translateAll()
  addAnchorTags()
})

englishmode.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  spanishmode.classList.toggle('active')
  englishmode.classList.toggle('active')
  html.classList.remove('spanish')
  spanishmodeMobile.classList.toggle('active')
  englishmodeMobile.classList.toggle('active')
  translateAll()
  removeAnchorTags()
})

spanishmodeMobile.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  spanishmode.classList.toggle('active')
  englishmode.classList.toggle('active')
  spanishmodeMobile.classList.toggle('active')
  englishmodeMobile.classList.toggle('active')
  html.classList.add('spanish')
  translateAll()
  addAnchorTags()
})

englishmodeMobile.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  spanishmode.classList.toggle('active')
  englishmode.classList.toggle('active')
  spanishmodeMobile.classList.toggle('active')
  englishmodeMobile.classList.toggle('active')
  html.classList.remove('spanish')
  translateAll()
  removeAnchorTags()
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

  const translate_p5 = document.querySelector('.translate_p5')
  translate_p5.classList.toggle('spanish_p5')

  const translate_p6 = document.querySelector('.translate_p6')
  translate_p6.classList.toggle('spanish_p6')

  const translate_p7 = document.querySelector('.translate_p7')
  translate_p7.classList.toggle('spanish_p7')

  const translate_p8 = document.querySelector('.translate_p8')
  translate_p8.classList.toggle('spanish_p8')

  const translate_p9 = document.querySelector('.translate_p9')
  translate_p9.classList.toggle('spanish_p9')
}


function addAnchorTags() {
  const frontendAnchorTag = document.getElementById('frontendAnchorTag')
  var aTag1 = document.createElement('a');
  aTag1.setAttribute('href',"https://portfolio-frontend-3cg9e.ondigitalocean.app/");
  aTag1.innerText = "Front End";
  aTag1.setAttribute("class", "toRemove1");
  frontendAnchorTag.appendChild(aTag1);

  const backendAnchorTag = document.getElementById('backendAnchorTag')
  var aTag2 = document.createElement('a');
  aTag2.setAttribute('href',"https://portfolio-backend-97f5p.ondigitalocean.app/");
  aTag2.innerText = "Back End";
  aTag2.setAttribute("class", "toRemove2");
  backendAnchorTag.appendChild(aTag2);
}

function removeAnchorTags() {
  document.querySelector('.toRemove1').remove()
  document.querySelector('.toRemove2').remove()
}


// COPY email

const myEmail = document.getElementById('myEmail')

myEmail.addEventListener('click', (e) => {
  const textarea = document.createElement('textarea')
  textarea.value = 'jmontane.dev@gmail.com'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert(" 'jmontane.dev@gmail.com' copied to clipboard!")
})



// SCROLLING text


const scrollingText = document.getElementById('scrollingText')
const text = 'Full Stack Web Developer'
let idx = 1
let count = 0

writeText()

function writeText() {
    scrollingText.innerText = text.slice(0, idx)

    idx++
    count++

    if(idx > text.length) {
        idx = 1
    }

    else if(count > 24) {
      staticText()
    }

    setTimeout(writeText, 200)
}

function staticText() {
  scrollingText.innerText = 'Full Stack Web Developer'
}
