const botonProx = document.querySelector("#prox")
const botonComics = document.querySelector("#comic")
const botonPersonajes = document.querySelector("#char")


const urlBase = "http://gateway.marvel.com/v1/public/"
const apiKey = "df9ffa0c0208771549144cf90259dd73"
const comicsPorPagina = 20;
let paginaActual = 0

botonProx.onclick = () => {
    paginaActual++
    console.log("pagina actual:", paginaActual)
    buscarComics()

}

const buscarComics = (url, paginaActual, busqueda) => {
    console.log("buscando comics...")
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


botonComics.onclick = () => {
    buscarComics("comics", paginaActual, "title")
}

botonPersonajes.onclick = () => {
    buscarComics("characters", paginaActual, "name")
}

// ESTRUCTURA DE UNA URL:
// url de la api + coleccion que buscamos + ? + queryParam=valor + & + queryParam=valor