let btnPrueba = document.getElementById("btnPrueba");

let modal = document.getElementById("miModal");

let cerrar = document.getElementById("btnCerrar");

let divCanciones = document.getElementById("divCanciones");

let btnBusqueda = document.getElementById("btnBusqueda");

let inputBusqueda = document.getElementById("inputBusqueda");

btnPrueba.addEventListener("click", function () {
    // elementosHTML tiene una propiedad .style
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
});

btnCerrar.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
});

async function buscarDeezer(busqueda) {
    let configuracion = {
        method: "GET",
        headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key': '5308447b06mshf680a483510cafdp18bebbjsn91d349e9507c'
        },
    };

    try {
        let rpta = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${busqueda}`, configuracion);
        const datos = await rpta.json(); //convierte de TEXTO(json) a un Objeto de JS
        //console.log(datos.data);
        dibujarCanciones(datos.data);
    } catch (error) {
        console.log(error);
    }
}

function dibujarCanciones(arregloCanciones) {
    let htmlCanciones = "";

    arregloCanciones.forEach(function (cancion) {
        htmlCanciones =
            htmlCanciones +
            `<div class="cancion-container">
                <div class="cancion">
                    <div class="cancion-img">
                        <img
                            src="${cancion.artist.picture_medium}"
                            alt="${cancion.title}">
                    </div>
                    <div class="cancion-content">
                        <h3>${cancion.title}</h3>
                        <p>${cancion.artist.name}</p>
                        <audio controls>
                            <source src="${cancion.preview}">
                        </audio>
                    </div>
                </div>
            </div>`;
    });
    divCanciones.innerHTML = htmlCanciones;
}