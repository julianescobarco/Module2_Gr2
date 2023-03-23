import {data} from "./data.js";

let fechaActual = data.fechaActual // lectura de fecha actual desde data.js
let eventos = data.eventos // lectura de eventos desde data.js

let arrayEventosPasados = [] //inicializar Array de Eventos pasados
let arrayEventosFuturos = [] //inicializar Array de Eventos Futuros
// Clasificación de eventos según fecha
for (let i = 0; i < eventos.length; i++) {
    if (eventos[i].date < fechaActual) {
        arrayEventosPasados.push(eventos[i])
    } else {
        arrayEventosFuturos.push(eventos[i])
    }
}
// Función para cambiar contenido detail
function detailsCard(eventos) {
    // Llamado de elementos por Id
    let imgdetail = document.getElementById('imgdetail');
    let titulodetail = document.getElementById('titulodetail');
    let date = document.getElementById('date');
    let description = document.getElementById('description');
    let category = document.getElementById('category');
    let place = document.getElementById('place');
    let capacity = document.getElementById('capacity');
    let ases = document.getElementById('ases');
    let price = document.getElementById('price');
    // Se llama el Id del boton accionado
    let idClickStr = sessionStorage.getItem("idClickStr");
    let idClick = parseInt(idClickStr);
    // Se modifica la información según el evento
    imgdetail.src = eventos[idClick].image
    imgdetail.alt = eventos[idClick].name
    titulodetail.textContent = eventos[idClick].name
    date.textContent = "Date: " +eventos[idClick].date
    description.textContent = "Description: " +eventos[idClick].description
    category.textContent = "Category: " +eventos[idClick].category
    place.textContent = "Place: " +eventos[idClick].place
    capacity.textContent = "Capacity: " +eventos[idClick].capacity
    price.textContent = "Price: " +eventos[idClick].price
    // Condicional para identificar si el evento tiene Assistance o Estimate
    if (eventos[idClick].assistance != undefined) {
        ases.textContent = "Assistance: " +eventos[idClick].assistance

    }else{
        ases.textContent = "Estimate: " +eventos[idClick].estimate
    }

}
// Se trae el valor de idClickstr desde  donde se accione el botón (Home, UpEvents, PastEvents)
let idClickStr = sessionStorage.getItem("idClickStr");
let idClick = parseInt(idClickStr); //Se convierte idClickStr a int para usarlo como posición (i)
// Se crean variables para comparar
let detailhome = idClick+"home" 
let detailpast = idClick+"past" 
let detailup = idClick+"upco"  
// Diferencia el idClickStr y enviar la función detailsCards con el ArrayCorrespondiente
if (idClickStr == detailhome) {
    detailsCard(eventos);
} else if(idClickStr == detailup){
    detailsCard(arrayEventosFuturos);
} else if(idClickStr == detailpast){
    detailsCard(arrayEventosPasados);
}
