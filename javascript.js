const nameform = document.getElementById("name");
const lastnameform = document.getElementById("lastName");
const dateOBform = document.getElementById("dateOfBirth");
const button = document.getElementById("submit");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(nameform.value == "" || lastnameform.value == "" || dateOBform.value == "") {
        alert("Asegurece de completar todo los campos");
    } else {
        alert("Formulario enviado con exito!!");
        console.log(`El nombes es: ${nameform.value} y apellidos es: ${lastnameform.value} y la fecha de nacimiento es: ${dateOBform.value}`);
    }
});

const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
 .then(res => res.json())
 .then(Response => {console.log(Response)
})