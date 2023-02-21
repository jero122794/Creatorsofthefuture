const registerForm = document.querySelector("#register_form");

let errors = [];

let nameInput = document.getElementById("name");
let lastNameInput = document.getElementById("lastName");
let mailInput = document.getElementById("mail");
let phNumberInput = document.getElementById("phNumber");
let roleInput = document.getElementById("role");
let descriptionInput = document.getElementById("description");
let cvInput = document.getElementById("cv");
let linkedInInput = document.getElementById("linkedIn");

nameInput.onclick = (error) => {
    if(nameInput == ""){
        errors.push("El campo Nombre no puede estar vacío");
        nameInput.classList.add("form_invalidInput")
    }
    if(errors.length != 0){
        error.preventDefault();
    }
}
