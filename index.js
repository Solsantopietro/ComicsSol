const botonProx = document.querySelector("#prox")
const botonComics = document.querySelector("#comic")
const botonPersonajes = document.querySelector("#char")
const selectSearch = {
    comics: document.querySelector(".selectSearch"),
    characters: document.querySelector(".selectSearchChar")
}
const selectType = document.querySelector(".select-type")
const buttonSearch = document.querySelector(".search-button")
const urlBase = "http://gateway.marvel.com/v1/public/"
const apiKey = "df9ffa0c0208771549144cf90259dd73"
const comicsPorPagina = 20;
let paginaActual = 0


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
            const searchText = document.querySelector(".search-input")

            personajes = data.data.results


            seccion.innerHTML = '';
            personajes.map((personaje) => {
                let imagen = personaje.thumbnail.path
                let extension = personaje.thumbnail.extension
                seccion.innerHTML += `
                <div class="card">
                    <div class="comic-img-container">
                        <img src="${imagen}.${extension}" alt="" class="imagen">
                    </div>
                    <div class="container-name">
                        <h3 class="comic-title">${personaje[busqueda]}</h3>
                    </div>
                </div>
                `
            })

            const hayAlgoEscrito = () => {
                return (searchText.value !== "")

            }

            const pasaFiltroDeTexto = (personajes) => {
                if (hayAlgoEscrito()) {
                    if (personajes.includes(textInputFilter.value.toLowerCase())) {
                        return true
                    }
                    return false
                } else {
                    return true
                }
            }

            pasaFiltroDeTexto(personajes)



        });
}



// ESTRUCTURA DE UNA URL:
// url de la api + coleccion que buscamos + ? + queryParam=valor + & + queryParam=valor

// BUSAQUEDA DE COMIC ALFABETICAMENTE 

const busquedaPorOrden = (url, orderBy, busqueda) => {
    fetch(`${urlBase + url}?apikey=${apiKey}&orderBy=${orderBy}`)
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            console.log(data)
            console.log("busco de Z a A")

            comics = data.data.results
            console.log(comics)
            const seccion = document.querySelector('.resultados');

            seccion.innerHTML = '';
            comics.map((comic) => {
                seccion.innerHTML += `<p>${comic[busqueda]}</p>`
            })
        })
}

selectType.onchange = () => {
    if(selectType.value === 'characters') {
        selectSearch.characters.classList.remove("hidden")
        selectSearch.comics.classList.add("hidden")
    }else {
        selectSearch.comics.classList.remove("hidden")
        selectSearch.characters.classList.add("hidden")
    }

}

const busqueda = () => {
    buttonSearch.onclick = (e) => {
        e.preventDefault();
        buscarComics()

    }
}

busqueda()
