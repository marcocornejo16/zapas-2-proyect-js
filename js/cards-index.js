// import { Productos } from "./array-list-prod.js";

let cardsIndex = document.getElementById("cards-main");
let cardFavorite = document.getElementById("card-favorite");
let cardsFutbol = document.getElementById("cards-futbol");
let cardsTennis = document.getElementById("cards-tenis");

const Products = JSON.parse(localStorage.getItem("products")) || [];

//Hacemos arrays vacios donde se van guardando los productos de acuerdo a la categoria
let running = [];
let botines = [];
let tenis = [];

//recorremos el array de productos y hacemos push en los arrays vacios de acuerdo a su categoria

Products.forEach((prod, indice) => {
    if (prod.categoria == "Tenis") {
        renderProduct(prod, indice, cardsTennis)
    }
    if (prod.categoria == "Botines") {
        renderProduct(prod, indice, cardsFutbol)
    }
    if (prod.categoria == "Running") {
        renderProduct(prod, indice, cardsIndex)
    }
});

function renderProduct(prod, idx, cardContainer) {
    cardContainer.innerHTML += `
        <div class="card flex-cards cards-shadow mb-5 cards-responsive col-sm-12 col-md-6 col-xl-2">
            <img src=${prod.image} class="card-img-top m-0 img-fluid  cards-img">
                <div class="card-body bg-cards">
                <h5 class="card-title border-bottom">${prod.name}</h5>
                <p class="card-text text-cards"> ${prod.description}</p>
                </div>
            <button class="btn-cards m-0"><a href="/pages/paginaCard.html?id=${idx}" class="text-dec-none">Ver mas</a></button>
    </div>`
    if(prod.favorito == true){
        cardFavorite.innerHTML = `
                    <div class=" row m-5">
                    <h4 class="border-bottom p-2" >Mira el favorito de la semana</h4>
                        <div class="col-md-6">
                            <img src=${prod.image} class="img-fluid img-card-destacada">
                            </div>
                            <div class="col-md-6 col-sm-12">
                            <div class="card-body">
                            <h5 class="card-title ">${prod.name}</h5>
                            <p class="card-text w-100 responsive-destacada">${prod.description}</p>
                            </div>
                            <button class="btn-cards d-flex"><a href="/pages/paginaCard.html?id=${idx}" class="text-dec-none">Ver mas</a></button>
                    </div>
                    </div>`
    }
    };
    


















// //recorremos cada array de categoria y llamamos a la funcion para pintar las cards
// running.forEach((prod) => {
//     newCard(prod, cardsIndex);
// });
// botines.forEach((prod) => {
//     newCard(prod, cardsFutbol);
// });
// tenis.forEach((prod) => {
//     newCard(prod, cardsTennis);
// });

// function newCard(prod,idx,index) {
//     idx.innerHTML += `
//         <div class="card flex-cards cards-shadow mb-5 cards-responsive col-sm-12 col-md-6 col-xl-2">
//             <img src=${prod.image} class="card-img-top m-0 img-fluid  cards-img">
//                 <div class="card-body bg-cards">
//                 <h5 class="card-title border-bottom">${prod.name}</h5>
//                 <p class="card-text text-cards"> ${prod.description}</p>
//                 </div>
//             <button class="btn-cards m-0"><a href="/pages/paginaCard.html" class="text-dec-none">Ver mas</a></button>
// </div>  `




