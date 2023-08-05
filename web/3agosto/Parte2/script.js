const formUser = document.getElementById("formUser")
const txtName = document.getElementById("txtName")
const txtCorreo = document.getElementById("txtCorreo")
const txtPassword = document.getElementById("txtPassword")
const txtPassword2 = document.getElementById("txtPassword2")

formUser.addEventListener("submit", (e) => {
    if (txtPassword != txtPassword2.value) {
        console.log("Diferente")
        e.preventDefault();
        alert("Contraseñas diferentes")
    } else {
        console.log("iguales")
    }
    if (validateEmmail(txtCorreo.value)) {
        console.log(CorreoInvalido)
        e.preventDefault();

    }
})

const validateEmmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}