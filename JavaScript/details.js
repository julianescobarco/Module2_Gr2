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

function detailsCard(container,eventos) {
    
    container.innerHTML = ""; 
    eventos.forEach(element => {
        const div = document.createElement("div");
        div.className= "row"
        let idupco = JSON.parse(sessionStorage.getItem('idClick'));
        let detailupco = idClick+"upco"
        if (idupco==detailupco) {

            div.innerHTML = `
            <div class="col-0"></div>
                <div class="col-lg-6 col-md-6  text-center bg-body-secondary p-4">
                    <img src="${element.image}" class="rounded img-fluid h-100 sombradetails" alt="${element.name}">
                </div>
            <div class="col-lg-6 col-md-6  text-center d-flex flex-column justify-content-center bg-body-secondary p-4">
                <h3 >${element.name}</h3> <br>
                <p class="fs-5 text-start">Date: ${element.date}</p>
                <p class="fs-5 text-start">Description: ${element.description} </p>
                <p class="fs-5 text-start">Category: ${element.category} </p>
                <p class="fs-5 text-start">Place: ${element.place} </p>
                <p class="fs-5 text-start">Capacity: ${element.capacity} </p>
                <p class="fs-5 text-start">Estimate: ${element.estimate} </p>
                <p class="fs-5 text-start">Price: ${element.price} </p>
            </div>
            <div class="col-0"></div>
        </div>`
            
        }else{

            div.innerHTML = `
            <div class="col-0"></div>
                <div class="col-lg-6 col-md-6  text-center bg-body-secondary p-4">
                    <img src="${element.image}" class="rounded img-fluid h-100 sombradetails" alt="${element.name}">
                </div>
            <div class="col-lg-6 col-md-6  text-center d-flex flex-column justify-content-center bg-body-secondary p-4">
                <h3 >${element.name}</h3> <br>
                <p class="fs-5 text-start">Date: ${element.date}</p>
                <p class="fs-5 text-start">Description: ${element.description} </p>
                <p class="fs-5 text-start">Category: ${element.category} </p>
                <p class="fs-5 text-start">Place: ${element.place} </p>
                <p class="fs-5 text-start">Capacity: ${element.capacity} </p>
                <p class="fs-5 text-start">Assistance: ${element.assistance} </p>
                <p class="fs-5 text-start">Price: ${element.price} </p>
            </div>
            <div class="col-0"></div>
        </div>`

        }
        
        container.appendChild(div);
    });
}

let idClickStr = JSON.parse(sessionStorage.getItem('idClick'));
let idClick = parseInt(idClickStr);
let detailhome = idClick+"home"
let detailpast = idClick+"past"
let detailup = idClick+"upco"

let detailcontainer = document.querySelector('#detail');


if (idClickStr == detailhome) {
    document.addEventListener('DOMContentLoaded', () => detailsCard(detailcontainer,[eventos[idClick]]));
} else if(idClickStr == detailup){
    document.addEventListener('DOMContentLoaded', () => detailsCard(detailcontainer,[arrayEventosFuturos[idClick]]));
} else if(idClickStr == detailpast){
    document.addEventListener('DOMContentLoaded', () => detailsCard(detailcontainer,[arrayEventosPasados[idClick]]));
}