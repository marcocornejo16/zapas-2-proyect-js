// import { Productos } from "./array-list-prod.js";

let cardsRunning = document.getElementById("cards-running");
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
        renderProduct(prod, indice, cardsRunning)
    }
});

function renderProduct(prod, idx, cardContainer) {
    cardContainer.innerHTML += `
        <div class="card flex-cards cards-shadow mb-5 cards-responsive col-sm-12 col-md-6 col-xl-2">
        <div class="d-flex">

        <div class="stock-cards m-1" style="height: 25px;">
        ${prod.stock ? `<p>En stock</p>` : '<div class="bg-danger" style="height: 25px;"> <p>Sin stock</p></div>' }
        </div>
        <div class="desc-cards bg-warning m-1" style="height: 25px; ">
        ${prod.descuento ? `<p>15% OFF</p>` : '<div class="bg-white" style="height: 25px;"></div>' }
        </div>   
            
        </div>

            <img src=${prod.image} class="card-img-top m-0 img-fluid  cards-img">
                <div class="card-body bg-cards">
                <h5 class="card-title border-bottom">${prod.name}</h5>
                <p class="card-text text-cards"> ${prod.description}</p>

                <div class="text-end">
                ${prod.descuento ? `<small> <del>$${prod.price}</del></small> <h5>$${Math.round(prod.price / 1.15)}</h5>` : `<div><h5>$${prod.price}</h5></div>` }
            </div>   
                
                </div>
            <button class="btn-cards"><a href="/pages/paginaCard.html?id=${idx}" class="text-dec-none">Ver mas</a></button>
    </div>`
    if(prod.favorito == true){
        cardFavorite.innerHTML = `
                    <div class=" row m-5">
                    <h4 class="border-bottom p-2" >Mira el favorito de la semana</h4>
                        <div class="col-md-6">
                        <div class="stock-cards">${prod.stock ? `<p>En stock</p>` :'<p class="bg-danger">Sin stock</p>' }</div>
                            <img src=${prod.image} class="img-fluid img-card-destacada">
                            </div>
                            <div class="col-md-6 col-sm-12">
                            <div class="card-body">
                            <h5 class="card-title ">${prod.name}</h5>
                            <p class="card-text w-100 responsive-destacada">${prod.description}</p>
                            </div>
                            <button class="btn-cards d-flex">
                            <a href="/pages/paginaCard.html?id=${idx}" class="text-dec-none">Ver mas</a>
                            </button>
                    </div>
                    </div>`
    }
    };
    


















