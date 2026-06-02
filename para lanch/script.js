function verificarLogin() {
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    if (login === "admin" && senha === "123456") {
        alert("entra ai meu bom");
    } else {
        alert("ta errado, otário");
    }

    login = document.getElementById("login").value = '';
    senha = document.getElementById("senha").value = '';
}
