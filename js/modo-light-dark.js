// const botaoMode = document.querySelector('#botao-dark');
// const elementosParaAlterar = [
//     document.querySelector('header'),
//     document.querySelector('body'),
//     document.querySelector('.banner'),
//     document.querySelector('.button'),
//     document.querySelector('header ul')
// ];
// const logo = document.querySelector('.logo img');

// function trocarLogo(lightModeAtivo) {
//     logo.src = lightModeAtivo ? "../image/logo-dark.png" : "../image/logo-claro (3).png";
// }

// botaoMode.addEventListener('click', function() {
//     const lightModeAtivo = botaoMode.classList.toggle('light-mode');
    
//     botaoMode.textContent = lightModeAtivo ? 'Light' : 'Dark';
    
//     trocarLogo(lightModeAtivo);
    
//     for (const elemento of elementosParaAlterar) {
//         elemento.classList.toggle('light-mode');
//     }
// });

// let botaoExplorar = document.querySelector('.button');
// let secaoCursos = document.querySelector('.cursos');

// botaoExplorar.addEventListener('click', function(){
//     secaoCursos.scrollIntoView({
//         behavior: 'smooth'
//     })
// })
