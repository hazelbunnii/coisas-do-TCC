const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.querySelector("#email");
    const senha = document.querySelector("#password");


    // ========================================
    // EMAIL
    // ========================================

    if (email.value === "") {

        alert("Digite seu email!");

        return;
    }


    // ========================================
    // SENHA
    // ========================================

    if (senha.value === "") {

        alert("Digite sua senha!");

        return;
    }


    // Senha precisa ter pelo menos 8 caracteres

    if (senha.value.length < 8) {

        alert("A senha precisa ter pelo menos 8 caracteres!");

        return;
    }


    // ========================================
    // VERIFICA SE É CADASTRO
    // ========================================

    const confirmarSenha =
        document.querySelector("#confirm-password");


    // ========================================
    // CADASTRO
    // ========================================

    if (confirmarSenha) {

        // Confirmação da senha

        if (senha.value !== confirmarSenha.value) {

            alert("As senhas não são iguais!");

            return;
        }


        // Termos

        const termos =
            document.querySelector("#terms");

        if (!termos.checked) {

            alert("Você precisa aceitar os termos!");

            return;
        }


        alert("Cadastro válido! ✨");

    }


    // ========================================
    // LOGIN
    // ========================================

    else {

        alert("Login válido! ✨");

    }

});