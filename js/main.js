const retratos = document.querySelector('#retratos')
const meiocorpo = document.querySelector('#meio-corpo')
const corpointeiro = document.querySelector('#corpo-inteiro')
const voltar = document.querySelector('#voltar')

retratos.addEventListener('click', () => {
    window.location = '../retratos.html'
})

meiocorpo.addEventListener('click', () => {
    window.location = '../meiocorpo.html'
})

corpointeiro.addEventListener('click', () => {
    window.location = '../corpointeiro.html'
})

voltar.addEventListener('click', () => {
    window.location = '../index.html'
})

