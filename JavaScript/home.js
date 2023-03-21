import {data} from "./data.js";

let fechaActual = data.fechaActual
let eventos = data.eventos

let arrayEventosPasados = []
let arrayEventosFuturos = []

for (let i = 0; i < eventos.length; i++) {
    if (eventos[i].date < fechaActual) {
        arrayEventosPasados.push(eventos[i])
    } else {
        arrayEventosFuturos.push(eventos[i])
    }
}
console.log(arrayEventosPasados)
console.log(arrayEventosFuturos)

for (let i = 0; i < eventos.length; i++) {
    let id = "tarjeta" + (i + 1)
    let div = crearDiv(id, eventos[i])
    document.querySelector('#carrusel').appendChild(div)
}

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
            <a href="detail.html" class="btn btn-outline-dark me-1 seemore">See more</a>
          </div>
        </div>
      </div>
        `

    return div

}

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