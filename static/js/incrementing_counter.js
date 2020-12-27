const counters = document.querySelectorAll('.counter')
const update = document.getElementById('update')

counters.forEach(counter => {
  counter.innerText = '0'
})

update.addEventListener('click', updateAll)

function updateAll() {
  counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
      const target= +counter.getAttribute('data-target')
      const c = +counter.innerText

      const increment = target / 400

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`
        setTimeout(updateCounter, 2)
      } else {
        counter.innerText = target
      }
    }
    updateCounter()
  })
}
