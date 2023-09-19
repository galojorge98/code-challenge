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
        const dataname = {
            name: nameform.value
        };
    }
});

const dataprueba = {
    name:"galo",
    id: 22 
}
const url = "https://jsonplaceholder.typicode.com/users";
const datapost = {
    headers:{
        "content-type":"application.json; charset=UTF-8"
    },
    body: JSON.stringify(dataprueba),
    method:"POST"
};
fetch(url, datapost)
 .then(res => res.json())
 .then(Response => {console.log(Response)})
 .catch(error =>console.log(error))