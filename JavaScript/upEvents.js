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

for (let i = 0; i < arrayEventosFuturos.length; i++) {
    let id = (i + 1)
    let div = crearDiv(id, arrayEventosFuturos[i])
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
            <a id="${id-1}upco" class="btn btn-outline-dark me-1 seemore">See more</a>
          </div>
        </div>
      </div>
        `

    return div

}

document.addEventListener('click', (event) => {
    const { target } = event;
    sessionStorage.setItem("idClick", JSON.stringify(target.id));
    if(target.id){
        window.location.href = "../detail.html";
    }
})

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