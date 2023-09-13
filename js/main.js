const audioEaster = new Audio ('../sons/easterEgg.mp3')
const easterEgg = document.querySelector('#easteregg')

easterEgg.addEventListener('click', () => {
    audioEaster.play()
    easterEgg.volume = 0.2
})