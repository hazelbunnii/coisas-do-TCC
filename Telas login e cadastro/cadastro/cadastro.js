const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#password").value;
    const confirmarSenha = document.querySelector("#confirm-password").value;
    const termos = document.querySelector("#terms");


    // Verificar nome

    if (nome === "") {
        alert("Digite seu nome!");
        return;
    }


    // Verificar email

    if (email === "") {
        alert("Digite seu email!");
        return;
    }


    // Verificar senha vazia

    if (senha === "") {
        alert("Digite sua senha!");
        return;
    }


    // Verificar tamanho da senha

    if (senha.length < 8) {
        alert("A senha precisa ter pelo menos 8 caracteres!");
        return;
    }


    // Verificar confirmação da senha

    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais!");
        return;
    }


    // Verificar termos

    if (!termos.checked) {
        alert("Você precisa aceitar os termos!");
        return;
    }


    // Tudo certo

    window.location.href = "../login/login.html";

});