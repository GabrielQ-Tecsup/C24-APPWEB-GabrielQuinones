//Get
fetch("https://reqres.in/api/users?page=2")
    .then((respuesta) => {
        return respuesta.json(); //parsea de texto a JS
    })
    .then((datos) => {
        console.table(datos.data);
    });

// //Post - Crear
let nuevoUsuario = {
    name: "Alfredo Saire",
    job: "BOSS",
};

// //headers
let cabecera = {
    method: "POST", //Metodo HTTP, POST, PUT, DELETE, GET
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoUsuario), //data,carga, pero hay que transformarlo a JSON
};

fetch("https://reqres.in/api/users", cabecera)
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((usuarioCreado) => {
        console.table(usuarioCreado);
    })
    .catch((error) => {
        console.log(error);
    });
