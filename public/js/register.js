window.addEventListener("load", function(e){
    console.log("load correctly");
    const registerForm = document.querySelector("#register_form");
    
    let errors = [];
    
    let nameInput = document.querySelector("#name");
    let lastNameInput = document.querySelector("#lastName");
    let mailInput = document.querySelector("#mail");
    let phNumberInput = document.querySelector("#phNumber");
    let roleInput = document.querySelector("#role");
    let descriptionInput = document.querySelector("#description");
    let cvInput = document.querySelector("#cv");
    let linkedInInput = document.querySelector("#linkedIn");
    let passwordInput = document.querySelector("#password");
    let passwordConfirmationInput = document.querySelector("#passwordConfirmation")
    //validating functions
    let validateEmpty = (e) =>{
        let input = e.target;
        if(input.value == ""){
            errors.push("El campo nombre no debe estar vacío");
            const spanTagError = input.nextElementSibling;
            input.classList.add("form_invalidInput");
            spanTagError.innerHTML += "<li>El campo " + input.name + " es obligatorio</li>"
        }
    }
    let validateLength = (e)=>{
        let input = e.target;
        if(input.value.length < 8){
            errors.push("la contraseña debe ser de mínimo 8 caracteres")
            const spanTagError = input.nextElementSibling;
            input.classList.add("form_invalidInput")
            spanTagError.innerHTML += "<li>La contraseña debe tener un mínimo de 8 caracteres</li>"
        }
    }

    //Nombre
    nameInput.addEventListener("blur", validateEmpty)
    //Apellidos
    lastNameInput.addEventListener("blur", validateEmpty)
    //Correo
    mailInput.addEventListener("blur", validateEmpty)
    //Número telefónico
    phNumberInput.addEventListener("blur", validateEmpty)
    //rol
    roleInput.addEventListener("blur", validateEmpty)
    //Descripcion
    descriptionInput.addEventListener("blur", validateEmpty)
    //cv
    cvInput.addEventListener("blur", validateEmpty)
    //linkedin
    linkedInInput.addEventListener("blur", validateEmpty)
    //contraseña
    passwordInput.addEventListener("blur", validateEmpty)
    passwordInput.addEventListener("blur", validateLength)
    passwordConfirmationInput.addEventListener("blur", validateEmpty)
    //formulario
    registerForm.addEventListener("submit", (e)=>{
       if(passwordInput.value != passwordConfirmationInput.value){
            e.preventDefault
            alert("Contraseñas diferentes")
       }
    })
})