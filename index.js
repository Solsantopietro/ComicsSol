const botonProx = document.querySelector("#prox")
const botonComics = document.querySelector("#comic")
const botonPersonajes = document.querySelector("#char")
const selectSearch = {
    comics: document.querySelector(".selectSearch"),
    characters: document.querySelector(".selectSearchChar")
}
const selectType = document.querySelector(".select-type")
const buttonSearch = document.querySelector(".search-button")
const primeraPagina = document.querySelector(".primeraPagina")
const anteriorPagina = document.querySelector(".anteriorPagina")
const siguientePagina = document.querySelector(".siguientePagina")
const ultimaPagina = document.querySelector(".ultimaPagina")
const urlBase = "https://gateway.marvel.com/v1/public/"
const apiKey = "df9ffa0c0208771549144cf90259dd73"
const comicsPorPagina = 20;
let paginaActual = 0


console.log(primeraPagina)



primeraPagina.onclick = () => {
    console.log("click")
    if (paginaActual !== 0) {
        paginaActual = 0
        buscarComics()
        console.log("estamos en la pagina:", paginaActual)
    }
}

siguientePagina.onclick = () => {
    paginaActual++
    buscarComics()
}
anteriorPagina.onclick = () => {
    console.log("click")
    console.log("estamos en la pagina:", paginaActual)
    if (paginaActual !== 0) {
        paginaActual--
        buscarComics()
    }
}
ultimaPagina.onclick = () => {
    document.getElementById('forward').disabled = true;
    document.getElementById('end').disabled = true;
    paginaActual = (48443 - (48443 % 20)) / 20
    buscarComics()
    console.log("pagina actuial", paginaActual)
}


const buscarComics = () => {
    let busqueda = selectType.value === 'comics' ? 'title' : 'name'


    console.log(`${urlBase + selectType.value}?apikey=${apiKey}&offset=${paginaActual * comicsPorPagina}&orderBy=${selectSearch[selectType.value].value}`)
    fetch(`${urlBase + selectType.value}?apikey=${apiKey}&offset=${paginaActual * comicsPorPagina}&orderBy=${selectSearch[selectType.value].value}`)
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            console.log(data)
            const seccion = document.querySelector('.resultados');
            const searchText = document.querySelector("#search-input")


            personajes = data.data.results
            totalDeResultados = data.data.total

            const disabledOrEnabled = () => {
                if (paginaActual === (totalDeResultados - (totalDeResultados % 20)) / 20) {
                    document.getElementById('forward').disabled = true;
                    document.getElementById('end').disabled = true;
                } else {
                    document.getElementById('forward').disabled = false;
                    document.getElementById('end').disabled = false;
                }
                if (paginaActual !== 0) {
                    document.getElementById('start').disabled = false;
                    document.getElementById('back').disabled = false;
                } else {
                    document.getElementById('start').disabled = true;
                    document.getElementById('back').disabled = true;
                }
            }
            disabledOrEnabled()

            const tarjetas = document.querySelectorAll(".card")
            console.log(tarjetas)

            const mostrarTarjeta = (nombre, description, imagen, extension) => {
                seccion.innerHTML = '';
                seccion.innerHTML += `
                        <div class="result-card">
                            <div>
                                <section class="personaje-section">
                                    <img src="${imagen}.${extension}" alt="" class="imagen-result">
                                    <div class="character-info">
                                        <h2 class="character-name">${nombre}</h2>
                                        <h3>Publicado:</h3>
                                        <p class="comic-published"></p>
                                        <h3>Guionistas:</h3>
                                        <p class="comic-writers"></p>
                                        <h3>Descripción:</h3>
                                        <p class="comic-description"></p>
                                        <p class="character-description">${description}</p>
                                    </div>
                                </section>
                                <section class="results-section"></section>
                            </div>
                        </div>
                        `
            }

            const mostrarLasTarjetas = () => {
                seccion.innerHTML = '';

                personajes.map((personaje) => {
                    let imagen = personaje.thumbnail.path
                    let extension = personaje.thumbnail.extension
                    let carta = document.createElement('div');
                    carta.classList.add('card')
                    carta.onclick = () => {
                        mostrarTarjeta(personaje[busqueda], personaje.description, imagen, extension)
                    }
                    carta.innerHTML = `
                    <div class="comic-img-container">
                        <img src="${imagen}.${extension}" alt="" class="imagen">
                    </div>
                    <div class="container-name">
                        <h3 class="comic-title">${personaje[busqueda]}</h3>
                    </div>
                    
                `
                    seccion.appendChild(carta)

                })
            }
            mostrarLasTarjetas()





            const hayAlgoEscrito = () => {
                return (searchText.value !== "")

            }

            const pasaFiltroDeTexto = () => {
                console.log(hayAlgoEscrito())
                if (hayAlgoEscrito()) {
                    let personajesFiltrados = personajes.filter(personaje => {
                        return personaje[busqueda].toLowerCase().includes(searchText.value.toLowerCase())
                    })
                    
                    console.log(personajesFiltrados)
                    personajes = personajesFiltrados
                    mostrarLasTarjetas()
                }
            }

            pasaFiltroDeTexto()



        });
}
buscarComics()



selectType.onchange = () => {
    if (selectType.value === 'characters') {
        selectSearch.characters.classList.remove("hidden")
        selectSearch.comics.classList.add("hidden")
    } else {
        selectSearch.comics.classList.remove("hidden")
        selectSearch.characters.classList.add("hidden")
    }

}

buttonSearch.onclick = (e) => {
    e.preventDefault();
    buscarComics()

}



