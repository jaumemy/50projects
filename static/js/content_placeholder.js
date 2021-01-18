const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')


setTimeout(getData, 2500)

function getData() {
  header.innerHTML = '<img src="https://source.unsplash.com/random" alt="" />'
  title.innerHTML = 'Content Placeholder'
  excerpt.innerHTML = 'Every time page is refreshed, a random photo and a random profile pic will show.'
  profile_img.innerHTML = '<img src="https://source.unsplash.com/random/300x300/?face" alt="" />'
  name.innerHTML = 'Ximena Rodriguez'
  date.innerHTML = 'Jan 18, 2021'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
