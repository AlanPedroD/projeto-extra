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


function estilizarInputCorreto(){
    inputNome.classList.add('correct');
    inputNome.classList.remove('error');
    // usernameHelper.classList.remove("visible");
}

function estilizarInputIncorreto(){
    inputNome.classList.add('error');
    inputNome.classList.remove('correct');
    // usernameHelper.innerText = "O nome precisa ter 3 ou mais caracters"
    // usernameHelper.classList.add("visible");
}

function estilizarSenhaIncorreta(){
    inputSenha.classList.add('error');
    inputSenha.classList.remove('correct');
}
function estilizarSenhaCorreta(){
    inputSenha.classList.remove('error');
    inputSenha.classList.add('correct');
}

// Validar o input
inputNome.addEventListener('input', function(evento) {
  let valorDigitado = evento.target.value;

  if (valorDigitado.length >= 3) {
    estilizarInputCorreto();
  } else {
    estilizarInputIncorreto();
  }
});

// Validar Email
inputEmail.addEventListener('input', function(e){
  let valorEmail = e.target.value
  if(valorEmail.includes('@') && valorEmail.includes('.com')){
    inputEmail.classList.add('correct');
    labelEmail.classList.remove('error');
    // console.log('Email válido');
  }else{
    inputEmail.classList.add('error');
    inputEmail.classList.remove('correct');
    // console.log('O email precisa ter @ e .com');
  }
})

// Validar senha
inputSenha.addEventListener('input', function(e){
    let valorSenha = e.target.value;
    if(valorSenha.length < 6){
        estilizarSenhaIncorreta();
    }else{
        estilizarSenhaCorreta();
    }
})