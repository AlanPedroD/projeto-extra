let botao = document.querySelector('#botao-dark');

botao.addEventListener('click', function() {
    botao.classList.toggle('light-mode');

    if (botao.classList.contains('light-mode')) {
        botao.textContent = 'Light';
    } else {
        botao.textContent = 'Dark';
    }
});

let botaoExplorar = document.querySelector('.button');
let secaoCursos = document.querySelector('.cursos');

botaoExplorar.addEventListener('click', function(){
    secaoCursos.scrollIntoView({
        behavior: 'smooth'
    })
})