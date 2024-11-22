document.addEventListener('DOMContentLoaded', function () {
    let inputEmail = document.getElementById('email-login'); // ID correto
    let inputSenha = document.getElementById('senha-login'); // ID correto
    let formularioLogin = document.getElementById('form-login');

    console.log(inputEmail);
    console.log(inputSenha);
    // Função para validar o login
    function validarLogin(email, senha) {
        let erros = [];

        // Verificar se o e-mail foi preenchido
        if (!email) {
            erros.push('O e-mail é obrigatório.');
        }

        // Verificar se a senha foi preenchida
        if (!senha) {
            erros.push('A senha é obrigatória.');
        }

        return erros;
    }

    // Função para verificar se o usuário está cadastrado
    function verificarCadastro(email, senha) {
        let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
        let usuario = cadastros.find(cadastro => cadastro.email === email && cadastro.senha === senha);
        return usuario;
    }

    formularioLogin.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        let email = inputEmail.value;
        let senha = inputSenha.value;

        let erros = validarLogin(email, senha);

        if (erros.length > 0) {
            alert('Erro(s):\n' + erros.join('\n'));
        } else {
            let usuario = verificarCadastro(email, senha);

            if (usuario) {
                alert('Login realizado com sucesso!');
                window.location.href = "pag-quizzes.html"; // Redireciona para a página de jogos
            } else {
                alert('E-mail ou senha inválidos!');
            }
        }
    });
});
