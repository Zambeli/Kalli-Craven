const voltar = document.querySelector('#inicio')
const termos = document.querySelector('#terms')

termos.addEventListener('click', termoss)

voltar.addEventListener('click', inicio)

function termoss () {
    window.location = '../termos.html'
}

function inicio () {
    window.location = './index.html'
}
