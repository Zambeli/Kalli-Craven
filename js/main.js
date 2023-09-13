const voltar = document.querySelector('#voltar')
const terms = document.querySelector('#terms')

terms.addEventListener('click', () => {
    window.location = '../termos.html'
})

voltar.addEventListener('click', () => {
    window.location = '../index.html'
})

