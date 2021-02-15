const botonProx = document.querySelector("#prox")
const botonComics = document.querySelector("#comic")
const botonPersonajes = document.querySelector("#char")
const selectSearch = document.querySelector(".selectSearch")
const selectType = document.querySelector(".select-type")
// const selectComic = document.querySelector(".selectComic")
// const selectChar = document.querySelector(".selectChar")
const urlBase = "http://gateway.marvel.com/v1/public/"
const apiKey = "df9ffa0c0208771549144cf90259dd73"
const comicsPorPagina = 20;
let paginaActual = 0


selectType.onchange = () => {
    console.log(selectType.value)
    if (selectType.value === "comics") {
        buscarComics("comics", paginaActual, "title")
        console.log("estoy busacando comics")
    }
    else {
        console.log("estoy busacando char")
        buscarComics("characters", paginaActual, "name")

    }
}





botonProx.onclick = () => {
    paginaActual++
    console.log("pagina actual:", paginaActual)
    buscarComics()

}

const buscarComics = (url, paginaActual, busqueda) => {
    fetch(`${urlBase + url}?apikey=${apiKey}&offset=${paginaActual * comicsPorPagina}`)
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            console.log(data)
            const seccion = document.querySelector('.resultados');
            personajes = data.data.results

            seccion.innerHTML = '';
            personajes.map((personaje) => {
                seccion.innerHTML += `<p>${personaje[busqueda]}</p>`
            })
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
            const seccion = document.querySelector('.resultados');

            seccion.innerHTML = '';
            comics.map((comic) => {
                seccion.innerHTML += `<p>${comic[busqueda]}</p>`
            })
        })
}


selectSearch.onchange = () => {
    console.log("valor:", selectSearch.value)
    if (selectSearch.value === "-title") {
        busquedaPorOrden("comics", "-title", "title")
        console.log("apretaste de Z a A")
        console.log(selectSearch.value)
    }
    else if (selectSearch.value === "title") {
        busquedaPorOrden("comics", "title", "title")
        console.log("apretaste de A a Z")
        console.log(selectSearch.value)
    }
    else if(selectSearch.value === "-focDate") {
        busquedaPorOrden("comics", "-focDate", "title")
        console.log("apretaste mas nuevos")
        console.log(selectSearch.value)
    }else{
        busquedaPorOrden("comics", "focDate", "title")
        console.log("apretaste mas nuevos")
        console.log(selectSearch.value)
    }
}
