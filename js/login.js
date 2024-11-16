// Seleciona os campos do formulário de login
const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#senha');
const emailHelper = document.querySelector('#email-helper');
const senhaHelper = document.querySelector('#senha-helper');

// Botão de login
const loginButton = document.querySelector('.button-login');

// Função para mostrar mensagem de ajuda
function showHelperText(helper, message) {
    helper.innerText = message;
    helper.classList.add('visible');
}

// Função para ocultar mensagem de ajuda
function hideHelperText(helper) {
    helper.innerText = ''; // Limpa o texto
    helper.classList.remove('visible');
}

// Evento de clique no botão de login
loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os dados salvos no localStorage
    const savedEmail = localStorage.getItem('email');
    const savedSenha = localStorage.getItem('senha');

    // Verifica se o email e senha digitados correspondem aos dados salvos
    if (inputEmail.value === savedEmail && inputSenha.value === savedSenha) {
        alert("Login realizado com sucesso!");

        // Limpa as mensagens de erro e estilos
        hideHelperText(emailHelper);
        hideHelperText(senhaHelper);
        inputEmail.classList.remove('error');
        inputSenha.classList.remove('error');

        // Redireciona para outra página, se necessário
        window.location.href = "../index.html";

    } else {
        // Exibe mensagem de erro se o email não estiver correto
        if (inputEmail.value !== savedEmail) {
            showHelperText(emailHelper, "Email não cadastrado");
            inputEmail.classList.add('error');
        } else {
            hideHelperText(emailHelper);
            inputEmail.classList.remove('error');
        }

        // Exibe mensagem de erro se a senha não estiver correta
        if (inputSenha.value !== savedSenha) {
            showHelperText(senhaHelper, "Senha incorreta");
            inputSenha.classList.add('error');
        } else {
            hideHelperText(senhaHelper);
            inputSenha.classList.remove('error');
        }
    }
});
