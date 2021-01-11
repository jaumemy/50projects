const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentatge = document.getElementById('percentatge')
const remained = document.getElementById('remained')

updateBigCup()


smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(cup, idx))
})

function highlightCups(cup, idx) {
  if (smallCups[idx].classList.contains('full')) {
    cup.classList.remove('full')
  } else {
    cup.classList.add('full')
  }

  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  if(fullCups === 0) {
    percentatge.style.visibility = 'hidden'
    percentatge.style.height = 0
  } else {
    percentatge.style.visibility = 'visible'
    percentatge.style.height = `${fullCups / totalCups * 280}px`
    percentatge.innerText = `${fullCups / totalCups * 100}%`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    remained.innerText = `${2- (250 * fullCups / 1000)}L`
  }
}
