window.addEventListener("load", function(event){
    console.log("Loaded correctly");
    let prueba = document.querySelector("#pruebita");
    prueba.innerText += ", ponete a trabajar más bien"
    prueba.innerHTML += "<strong>" + "   lol   " + "</strong>"
})