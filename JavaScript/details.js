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

function detailsCard(eventos) {
    let imgdetail = document.getElementById('imgdetail');
    let titulodetail = document.querySelector('#titulodetail');
    let date = document.querySelector('#date');
    let description = document.querySelector('#description');
    let category = document.querySelector('#category');
    let place = document.querySelector('#place');
    let capacity = document.querySelector('#capacity');
    let ases = document.querySelector('#ases');
    let price = document.querySelector('#price');

    let idClickStr = JSON.parse(sessionStorage.getItem('idClick'));
    let idClick = parseInt(idClickStr);

    imgdetail.src = eventos[idClick].image
    imgdetail.alt = eventos[idClick].name
    titulodetail.textContent = eventos[idClick].name
    date.textContent = "Date: " +eventos[idClick].date
    description.textContent = "Description: " +eventos[idClick].description
    category.textContent = "Category: " +eventos[idClick].category
    place.textContent = "Place: " +eventos[idClick].place
    capacity.textContent = "Capacity: " +eventos[idClick].capacity
    price.textContent = "Price: " +eventos[idClick].price
    if (eventos[idClick].assistance != undefined) {
        ases.textContent = "Assistance: " +eventos[idClick].assistance

    }else{
        ases.textContent = "Estimate: " +eventos[idClick].estimate
    }

}

let idClickStr = JSON.parse(sessionStorage.getItem('idClick'));
let idClick = parseInt(idClickStr);
let detailhome = idClick+"home"
let detailpast = idClick+"past"
let detailup = idClick+"upco"

if (idClickStr == detailhome) {
    detailsCard(eventos);
} else if(idClickStr == detailup){
    detailsCard(arrayEventosFuturos);
} else if(idClickStr == detailpast){
    detailsCard(arrayEventosPasados);
}