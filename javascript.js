const nameform = document.getElementById("name");
const lastnameform = document.getElementById("lastName");
const dateOBform = document.getElementById("dateOfBirth");
const button = document.getElementById("submit");
const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (nameform.value == "" || lastnameform.value == "" || dateOBform.value == "") {
        alert("Asegurece de completar todo los campos");
    } else {
        alert("Formulario enviado con exito!!");
        console.log(`El nombes es: ${nameform.value} y apellidos es: ${lastnameform.value} y la fecha de nacimiento es: ${dateOBform.value}`);
        
        const dataname = {
            id: 23,
            name: nameform.value,
            lastName: lastnameform.value,
            dateOfBirt: dateOBform.value
        };
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify(dataname);

        let response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.json();
        console.log(data);

    }
});
