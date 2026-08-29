const form = document.querySelector("form");

const savedEmail = localStorage.getItem("blinkRememberedEmail");

if (savedEmail) {
    document.querySelector("#email").value = savedEmail;
    document.querySelector("#rememberMe").checked = true;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#password").value;
    const rememberMe = document.querySelector("#rememberMe");

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

    // Remember-me
    if (rememberMe.checked) {
        localStorage.setItem("blinkRememberedEmail", email);
    } else {
        localStorage.removeItem("blinkRememberedEmail");
    }

    // Tudo certo
    window.location.href = "../loading/loading.html";
});