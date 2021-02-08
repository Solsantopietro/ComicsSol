fetch("")
.then((data) => {
    return data.json()
})
.then((data) => {
    console.log(data)
    const seccion = document.querySelector('.resultados');
    comics = data.data.results
    
    seccion.innerHTML = '';
        comics.map((comic) => {
            seccion.innerHTML += `<p>${comic.title}</p>`
            
            


        //     seccion.innerHTML += `
        // <article>
        //     <div class="card">
        //         <div class="imagen">
        //             <img src="${comic.image}">
        //         </div>
        //         <div class="info">
        //         <div class="nombre">
        //             <h2>${comic.name}</h2>
        //         </div>
        //         <div class="estado">
        //             <p>${comic.status}</p>
        //             - <p>${comic.species}</p>
        //         </div>
        //         <div class="ubicacion">
        //             <p>Last known location:</p>
        //             <p>${comic.location.name}</p>
        //         </div>
        //         <div class="episodio">
        //             <p>First seen in:</p>
        //             <a>${comic.episode[0]}</a>
        //         </div>
        //         </div>
        //     </div>
        // </article>
        // `
    })
});

// const buscarInfo = (url) => {
//     fetch(url)
//         .then((data) => {
//             return data.json();
//         })
//         .then((personajes) => {
//             console.log(personajes);
//             // const link = document.querySelector("#prox")
    
//             // link.onclick = (e) => {
//             //   e.preventDefault()
//             //   buscarInfo(personajes.info.next)
//             // }
    
//             const seccion = document.querySelector('.resultados');
    
//             seccion.innerHTML = '';
//             personajes.results.map((personaje) => {
//                 seccion.innerHTML += `
//             <article>
//                 <div class="card">
//                     <div class="imagen">
//                         <img src="${personaje.image}">
//                     </div>
//                     <div class="info">
//                     <div class="nombre">
//                         <h2>${personaje.name}</h2>
//                     </div>
//                     <div class="estado">
//                         <p>${personaje.status}</p>
//                         - <p>${personaje.species}</p>
//                     </div>
//                     <div class="ubicacion">
//                         <p>Last known location:</p>
//                         <p>${personaje.location.name}</p>
//                     </div>
//                     <div class="episodio">
//                         <p>First seen in:</p>
//                         <a>${personaje.episode[0]}</a>
//                     </div>
//                     </div>
//                 </div>

//             </article>
//             `
//             })
//         });
//     }
    
//     buscarInfo('https://rickandmortyapi.com/api/character')