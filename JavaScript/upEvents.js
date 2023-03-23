import {data} from "./data.js";

let fechaActual = data.fechaActual // lectura de fecha actual desde data.js
let eventos = data.eventos  // lectura de eventos desde data.js

let arrayEventosPasados = []  //inicializar Array de Eventos pasados
let arrayEventosFuturos = [] //inicializar Array de Eventos Futuros
// Clasificación de eventos según fecha
for (let i = 0; i < eventos.length; i++) {
    if (eventos[i].date < fechaActual) {
        arrayEventosPasados.push(eventos[i])
    } else {
        arrayEventosFuturos.push(eventos[i])
    }
}
// Se crea for que recorra el Array de Eventos Futuros y ejecute la función que crea las cards
for (let i = 0; i < arrayEventosFuturos.length; i++) {
    let id = (i + 1)
    let div = crearDiv(id, arrayEventosFuturos[i])
    document.querySelector('#carrusel').appendChild(div)
}
// Se crea la función dinámica que crea la card con la información del eventos
function crearDiv(id, objeto) {
    let div = document.createElement('div');
    div.className= "swiper-slide"
    div.id = id;

        div.innerHTML = `
        <div class="card h-100">
          <img src="${objeto.image}" class="card-img-top imgcard" alt="${objeto.name}">
          <div class="card-body">
            <h5 class="card-title">${objeto.name}</h5>
            <p class="card-text">${objeto.description}</p>
          </div>
          <div class="card-footer bg-transparent d-flex justify-content-between flex-wrap text-center">
            <small class="card-text mt-2 mb-2 ms-1">Price: ${objeto.price}</small>
            <a id="${id-1}upco" class="btn btn-outline-dark me-1 seemore" onClick="click_here(this.id)">See more</a>
          </div>
        </div>
      </div>
        `

    return div

}
// Se crea la función que se va a ejecutar cuando se acciona el boton
window.click_here = function(buttonId) {
    window.location.href = "../detail.html"; // se trae la dirección local y se cambia a la dirección de details
    window.idClickStr = buttonId // Se almacena el valor del parámetro (buttonId)
    sessionStorage.setItem("idClickStr",idClickStr) // Se almacena la información en el Storage
   }
// se crea la función para el carrusel de slides con swiper
let swiper = new Swiper(".mySwiper", {
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,

    breakpoints: {

        576: {
            slidesPerView: 2,
            spaceBetween: 40,

        },
        920: {
            slidesPerView: 3,
            spaceBetween: 40,

        },
        1240: {
            slidesPerView: 4,
            spaceBetween: 40,

        },
    }
});