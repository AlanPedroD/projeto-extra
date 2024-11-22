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

let formulario = document.querySelector('form');

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

// ---------------------------------------

// Funções para exibir e ocultar mensagens de erro
function adicionarMensagemDeErro(helpText, mensagem, input) {
    helpText.textContent = mensagem;
    helpText.style.display = 'block';
    input.classList.add('error');
    input.classList.remove('correct');
}

function removerMensagemDeErro(helpText, input) {
    helpText.textContent = '';
    helpText.style.display = 'none';
    input.classList.remove('error');
    input.classList.add('correct');
}


inputNome.addEventListener('input', function () {
    if (inputNome.value.length < 3) {
        adicionarMensagemDeErro(nomeHelper, 'O nome deve ter pelo menos 3 caracteres.', inputNome);
    } else {
        removerMensagemDeErro(nomeHelper, inputNome);
    }
});

inputEmail.addEventListener('input', function () {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validação simples de email
    if (!emailRegex.test(inputEmail.value)) {
        adicionarMensagemDeErro(emailHelper, 'Digite um email válido.', inputEmail);
    } else {
        removerMensagemDeErro(emailHelper, inputEmail);
    }
});

inputSenha.addEventListener('input', function () {
    if (inputSenha.value.length < 6) {
        adicionarMensagemDeErro(senhaHelper, 'A senha deve ter pelo menos 6 caracteres.', inputSenha);
    } else {
        removerMensagemDeErro(senhaHelper, inputSenha);
    }
});


// Função para validar os dados
function validarCadastro(nome, email, senha) {
    let erros = [];

    // Validação do nome (não vazio e mínimo 3 caracteres)
    if (!nome || nome.trim().length <= 3) {
        erros.push('O nome deve ter pelo menos 3 caracteres.');
    }

    // Validação do e-mail (formato básico)
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !regexEmail.test(email)) {
        erros.push('Insira um e-mail válido.');
    }

    // Validação da senha (não vazia e mínimo 6 caracteres)
    if (!senha || senha.trim().length < 6) {
        erros.push('A senha deve ter pelo menos 6 caracteres.');
    }

    return erros;
}

// Função para armazenar o cadastro
function armazenarCadastro(nome, email, senha) {
    // Recuperar os cadastros existentes (caso haja)
    let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    
    // Adicionar o novo cadastro
    cadastros.push({ nome, email, senha });

    // Armazenar no LocalStorage
    localStorage.setItem('cadastros', JSON.stringify(cadastros));
}

// Event listener para o formulário
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    let nome = inputNome.value;
    let email = inputEmail.value;
    let senha = inputSenha.value;

    // Validar os dados
    let erros = validarCadastro(nome, email, senha);

    if (erros.length > 0) {
        // Exibir mensagens de erro 
        alert('Erro(s):\n' + erros.join('\n'));
    } else {
        // Armazenar os dados no LocalStorage
        armazenarCadastro(nome, email, senha);
        alert('Cadastro realizado com sucesso!');
        window.location.href = "pag-quizzes.html";
        
        // Limpar os campos
        inputNome.value = '';
        inputEmail.value = '';
        inputSenha.value = '';
    }
}); 
