// script.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Aqui você pode adicionar a lógica de autenticação
        console.log('Tentativa de login:', {
            username: username,
            password: password
        });
        
        // Exemplo de validação simples
        if(username && password) {
            // Simulando um login bem-sucedido
            alert('Login realizado com sucesso!');
            // Aqui você pode redirecionar para outra página
            // window.location.href = 'dashboard.html';
        } else {
            alert('Por favor, preencha todos os campos!');
        }
    });
});