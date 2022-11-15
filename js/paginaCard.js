let imgCard = document.getElementById('imgCard')
let cardInfo = document.getElementById('cardInfo')
let infoCard = document.getElementById('info-card')
let infoCardExtra = document.getElementById('info-card-extra')
let cardPag = document.getElementById('cardPag')



const Products =  JSON.parse(localStorage.getItem('products')) || [];
console.log(Products)
    const renderProductsPag = () =>{
        const idx = obtenerQueryParamId();
        const prod = Products[idx]
            if(prod){
                    imgCard.innerHTML = `
                    <div class="stock-cards-pags ms-5" style="height: 25px;">
                    ${prod.stock ? `<p>En stock</p>` : '<div class="bg-white" style="height: 25px;"></div>' }
                    </div>
                    <img src="${prod.image}" class="img-fluid img-cover"/>
                    `
                    cardInfo.innerHTML =`
                    <div class="text-pag">
                    <h1 >${prod.name}</h1>
                    <code>CATEGORIA - ${prod.categorias}</code>
                    <div>${prod.descuento ? `<h4>$ <del>${prod.price}</del></h4> <h2>$ ${Math.round((prod.price) / 1.15)}</h2>` : `<div><h4>$${prod.price}</h4></div>`} </div>
                    </div>
                    
                    
                    <div class="btn-outline text-pag">
                        <a href="/pages/404.html" class="btn btn-primary page-card btn">35</a>
                        <a href="/pages/404.html" class="btn btn-primary page-card btn">36</a>
                        <a href="/pages/404.html" class="btn btn-primary page-card btn">37</a>
                        <a href="/pages/404.html" class="btn btn-primary page-card btn">38</a>
                        <a href="/pages/404.html" class="btn btn-primary page-card btn">39</a>
                        <a href="/pages/404.html" class="btn btn-primary page-card btn">40</a>
                        <a href="/pages/404.html" class="btn btn-primary page-card btn">40.5</a>
                        <a href="/pages/404.html" class="btn btn-primary page-card btn">41</a>
                        <a href="/pages/404.html" class="btn btn-primary page-card btn">41.5</a>
                        <a href="/pages/404.html" class="btn btn-primary page-card btn">42</a>
                    </div>
                    <div class="btn-outline text-pag">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check btn-icon" viewBox="0 0 16 16">
                                        <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>
                                    <a href="/pages/404.html" class="btn btn-primary btn-carrito btn">AÑADIR AL CARRITO</a>
                                </div>
                                <div class="information-card text-pag">
                                    <section>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                                            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                                        </svg>
                                        <p>Hasta 3 cuotas sin interes</p>
                                        <p>En 6 cuotas el interes es de un 10%: <b>$${Math.round((prod.price * 1.10) /6)}</b></p>
                                        <p>En 12 cuotas el interes es de un 15%: <b>$${Math.round((prod.price * 1.15) /6)}</b></p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-dash" viewBox="0 0 16 16">
                                            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                                            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-5.5 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Z"/>
                                        </svg>
                                        <p>Devoluciones gratis</p>
                                        
                                        
                                    </section>
                                </div>
                    `
                    infoCard.innerHTML =`
                    <div class="description-pag">
                    <h3 class="border-bottom text-center">Descripcion</h3>
                    <p>${prod.description}</p>
                    </div>
                    `
                    infoCardExtra.innerHTML = `
                    <div class="description-pag">
                    <h4 class="text-center ">Envios y Devoluciones</h4>
                        <h5 class="border-bottom">Envios</h5>
                        <p>Los envios son gratuitos dentro de Argentina. Para envios fuera del pais habra un 10% de recargo del total del producto.</p>
                        <small>Para mas informacion contactarse a servicioalcliente@gmail.com</small>
                        <h5 class="border-bottom mt-3">Devoluciones</h5>
                        <p>Se puede devolver el producto en el primer mes, debera tener la etiqueta y recibo del mismo.</p>
                        <small>Para devoluciones contactarse a devolucionessneakers@gmail.com</small>
                    </div>
                    
                    `
                } 
            }
    
        const obtenerQueryParamId = () =>{
            const parms = window.location.search;
            const parmsUrl = new URLSearchParams(parms);
            const parmsEntries = Object.fromEntries(parmsUrl);
            const index = parmsEntries.id;
            return index



        }

        renderProductsPag()
    

        