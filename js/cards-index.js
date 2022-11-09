import { Productos } from "./array-list-prod.js";

const cardsIndex = document.getElementById('cards-main');
const cardFavorite = document.getElementById('card-favorite')
const cardsFutbol = document.getElementById('cards-futbol')
const cardsTennis = document.getElementById('cards-tenis')
const descuentoProd = document.getElementById('descuento')

const renderProducts = () =>{
    Productos.forEach((zapas, index) => {
        if (zapas.favorite === true) {
            cardFavorite.innerHTML = `
            <div class=" row m-5">
            <h4 class="border-bottom p-2" >Mira el favorito de la semana</h4>    
                <div class="col-md-6">
                    <img src=${zapas.img} class="img-fluid img-card-destacada">
                    </div>
                    <div class="col-md-6 col-sm-12">
                    <div class="card-body">
                    <h5 class="card-title ">${zapas.name}</h5>
                    <p class="card-text w-100 responsive-destacada">${zapas.description}</p>
                    </div>
                    <button class="btn-cards d-flex"><a href="/pages/cards.html" class="text-dec-none">Ver mas</a></button>
                </div>
                </div>`
        } else if (zapas.categorias === 'Running') {
            
            cardsIndex.innerHTML += `
            <div class="card flex-cards cards-shadow mb-5 cards-responsive col-sm-12 col-md-6 col-xl-2">
            
                <img src=${zapas.img} class="card-img-top m-0 img-fluid  cards-img">
                
                <div class="card-body bg-cards">
                <h5 class="card-title border-bottom">${zapas.name}</h5>
                <p class="card-text"><b>Talle:</b> ${zapas.talle}</p>
                <p class="card-text text-cards"> ${zapas.description}</p>
                </div>
                <button class="btn-cards m-0"><a href="/pages/paginaCard.html?id=${index}" class="text-dec-none">Ver mas</a></button>
                
        </div>  `
        } else if (zapas.categorias === 'Botines') {
            cardsFutbol.innerHTML += `
            <div class="card flex-cards cards-shadow cards-responsive mb-5 col-sm-12 col-md-6 col-xl-2">
            
                <img src=${zapas.img} class="card-img-top m-0 img-fluid  cards-img">
                
                <div class="card-body bg-cards">
                <h5 class="card-title border-bottom">${zapas.name}</h5>
                <p class="card-text"><b>Talle:</b> ${zapas.talle}</p>
                <p class="card-text text-cards"> ${zapas.description}</p>
                </div>
                <button class="btn-cards m-0"><a href="/pages/paginaCard.html?id=${index}" class="text-dec-none">Ver mas</a></button>
                
        </div>`
        } else if (zapas.categorias === 'Tenis')  {
            cardsTennis.innerHTML += `
            <div class="card flex-cards cards-shadow cards-responsive mb-5 col-sm-12 col-md-6 col-xl-2">
                <div>
                <img src=${zapas.img} class="card-img-top img-fluid m-0 cards-img">
                </div>
                <div class="card-body bg-cards">
                <h5 class="card-title border-bottom">${zapas.name}</h5>
                <p class="card-text"><b>Talle:</b> ${zapas.talle}</p>
                <p class="card-text text-cards"> ${zapas.description}</p>
                </div>
                <button class="btn-cards "> <a href="/pages/paginaCard.html?id=${index}" class="text-dec-none">Ver mas</a></button>
                
                
        </div>`
        }

    
    })
}

renderProducts()

