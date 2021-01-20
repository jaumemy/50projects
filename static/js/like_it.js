const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')
const container = document.querySelector('.container')

let clickTime = 0
let timesClicked = 0

container.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = (x - leftOffset)*(0.17165)
    const yInside = (y - topOffset)*(0.75)


    heart.style.left = `${xInside}px`
    heart.style.top = `${yInside}px`
    heart.style.position = `absolute`

    container.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}
