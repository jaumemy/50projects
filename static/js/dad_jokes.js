const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const btnback = document.querySelector('.btnback')
const btnbacktwo = document.querySelector('.btnbacktwo')
const enjoy = document.querySelector('.enjoy')



var i = 0

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  i += 1

  if (i > 5) {
    btnback.classList.add('active')
  }
  if (i > 10) {
    btnbacktwo.classList.add('active')
  }
  if (i>15) {
    btnback.classList.remove('active')
    btnbacktwo.classList.remove('active')
    enjoy.classList.add('active')
  }
  if (i>16) {
      enjoy.classList.remove('active')  
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke


}
