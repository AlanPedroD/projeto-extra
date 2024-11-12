let inputEmail = document.querySelector('#email');
let labelEmail = document.querySelector('label[for="email"]');

let inputNome = document.querySelector('#nome');
console.log(inputNome);
let labelNome = document.querySelector('label[for="nome"]');

let inputSenha = document.querySelector('#senha');
let labelSenha = document.querySelector('label[for="senha"]');


function mostrarPopup(input, label){
    input.addEventListener('focus', function(){
      label.style.display = 'block';
    })
  
    input.addEventListener('blur', function(){
        label.style.display = 'none';
    })
  }
  
 
mostrarPopup(inputEmail, labelEmail);
mostrarPopup(inputNome, labelNome);
mostrarPopup(inputSenha, labelSenha);