document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário.

    // Exibe a notificação de mensagem enviada
    alert('Mensagem enviada com sucesso!');

    // Redireciona para a página inicial
    window.location.href = '../index.html';
});
