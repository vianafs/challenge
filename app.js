document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");
    const closeBtn = document.querySelector(".closeBtn");
    const authButtons = document.getElementById("authButtons");
    const userGreeting = document.getElementById("userGreeting");
    const userNameSpan = document.getElementById("userName");

    loginBtn.addEventListener("click", () => {
        loginModal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        loginModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
    });

    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        
        // Exibe o nome do usuário e esconde os botões de login e sign up
        userNameSpan.textContent = username;
        userGreeting.style.display = "block";
        authButtons.style.display = "none";
        
        // Fecha o modal após o login
        loginModal.style.display = "none";
    });
});
