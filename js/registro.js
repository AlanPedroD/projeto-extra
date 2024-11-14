// JavaScript
let inputEmail = document.querySelector('#email');
let emailHelper = document.querySelector('#email-helper');
let labelEmail = document.querySelector('label[for="email"]');

let inputNome = document.querySelector('#nome');
let nomeHelper = document.querySelector('#nome-helper');
let labelNome = document.querySelector('label[for="nome"]');

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
mostrarPopup(inputNome, labelNome);
mostrarPopup(inputSenha, labelSenha);

// Funções para mostrar e ocultar as mensagens de ajuda
function showHelperText(helper, message) {
    helper.innerText = message;
    helper.classList.add('visible');
}

function hideHelperText(helper) {
    helper.classList.remove('visible');
}

// Validação do Nome
inputNome.addEventListener('input', function(evento) {
    let valorDigitado = evento.target.value;

    if (valorDigitado.length >= 3) {
        inputNome.classList.add('correct');
        inputNome.classList.remove('error');
        hideHelperText(nomeHelper);
    } else {
        inputNome.classList.add('error');
        inputNome.classList.remove('correct');
        showHelperText(nomeHelper, "O nome precisa ter 3 ou mais caracteres");
    }
});

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


// Função para salvar os dados no localStorage e mostrar o alerta
function salvarCadastro() {
    // Verificar se os campos são válidos
    if (inputNome.classList.contains('correct') &&
        inputEmail.classList.contains('correct') &&
        inputSenha.classList.contains('correct')) {
        
        // Salva os dados no localStorage
        localStorage.setItem('nome', inputNome.value);
        localStorage.setItem('email', inputEmail.value);
        localStorage.setItem('senha', inputSenha.value);

        // Exibe alerta de sucesso
        alert("Cadastro realizado com sucesso!");

        // Limpa os campos do formulário
        limparFormulario();
    } else {
        // Exibe alerta de erro se os dados forem inválidos
        alert("Erro: Preencha todos os campos corretamente antes de cadastrar.");
    }
}

// Função para limpar o formulário
function limparFormulario() {
    inputNome.value = '';
    inputEmail.value = '';
    inputSenha.value = '';

    // Remove classes de validação
    inputNome.classList.remove('correct', 'error');
    inputEmail.classList.remove('correct', 'error');
    inputSenha.classList.remove('correct', 'error');
}

// Adicionar evento ao botão de cadastro
let botaoCadastro = document.querySelector('.button-login');
botaoCadastro.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    salvarCadastro(); // Chama a função para salvar, exibir o alerta e limpar o formulário
});