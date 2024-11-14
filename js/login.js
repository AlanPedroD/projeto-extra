// JavaScript
let inputEmail = document.querySelector('#email');
let emailHelper = document.querySelector('#email-helper');
let labelEmail = document.querySelector('label[for="email"]');

let inputSenha = document.querySelector('#senha');
let senhaHelper = document.querySelector('#senha-helper');
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
mostrarPopup(inputSenha, labelSenha);

// Funções para mostrar e ocultar as mensagens de ajuda
function showHelperText(helper, message) {
    helper.innerText = message;
    helper.classList.add('visible');
}

function hideHelperText(helper) {
    helper.classList.remove('visible');
}


// Validação do Email
inputEmail.addEventListener('input', function(e) {
    let valorEmail = e.target.value;

    if (valorEmail.includes('@') && valorEmail.endsWith('.com')) {
        inputEmail.classList.add('correct');
        inputEmail.classList.remove('error');
        hideHelperText(emailHelper);
    } else {
        inputEmail.classList.add('error');
        inputEmail.classList.remove('correct');
        showHelperText(emailHelper, "O email precisa ter um '@' e terminar com '.com'");
    }
});

// Validação da Senha
inputSenha.addEventListener('input', function(e) {
    let valorSenha = e.target.value;

    if (valorSenha.length >= 6) {
        inputSenha.classList.add('correct');
        inputSenha.classList.remove('error');
        hideHelperText(senhaHelper);
    } else {
        inputSenha.classList.add('error');
        inputSenha.classList.remove('correct');
        showHelperText(senhaHelper, "A senha precisa ter 6 ou mais caracteres");
    }
});
