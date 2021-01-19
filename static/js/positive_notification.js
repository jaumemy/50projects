const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    "You're cool!",
    "You are beautiful!",
    'You will have a great day!',
    "You're the best!",
    'You rock!',
    'You are unique!',
    'You deserve the best!'
]

const types = ['happyblue', 'happygreen', 'happyred']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}
