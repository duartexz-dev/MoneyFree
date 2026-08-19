
const emaildados = JSON.parse(localStorage.getItem("email"))
const senhadados = JSON.parse(localStorage.getItem("senha"))

if (emaildados || senhadados) {
    window.open("./html/home.html")
}


function criar() {

    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    if (!email || !senha) {
        alert("Coloque todas as informações por favor.")
    } if (!email.includes("gmail.com")) {

        alert("Precisa conter @gmail.com")

    }

    else {

        alert("Parabéns , sua conta está cadastrada no nosso sistema!")
        alert("Vamos,te direcionar para o login principal!")
        window.open("./html/login.html")

        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("senha", JSON.stringify(senha));

    }


}