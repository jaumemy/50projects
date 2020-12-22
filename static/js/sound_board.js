const sounds = ['applause','boo','dial','gasp','kid','laugh','moo','pewpew','shush','tada','victory','wrong']

const icons = [`<i class="fas fa-sign-language"></i>`,
               `<i class="far fa-thumbs-down"></i>`,
               `<i class="fas fa-wave-square"></i>`,
               `<i class="far fa-surprise"></i>`,
               `<i class="fas fa-baby"></i>`,
               `<i class="fas fa-grin-squint-tears"></i>`,
               `<i class="fas fa-hat-cowboy-side"></i>`,
               `<i class="fas fa-people-arrows"></i>`,
               `<i class="fas fa-volume-mute"></i>`,
               `<i class="fas fa-thumbs-up"></i>`,
               `<i class="fab fa-playstation"></i>`,
               `<i class="fas fa-times"></i>`]



sounds.forEach((sound,idx) => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerHTML = icons[idx]


    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}
