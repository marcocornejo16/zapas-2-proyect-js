// import { Productos } from './array-list-prod.js';


const Products =  JSON.parse(localStorage.getItem('products')) || [];
const tableBodyHTML = document.getElementById('table-body-zapas');
const AddProductForm = document.querySelector('#FormProducts');

// console.log(tableBodyHTML)
// console.log(Products)


function agregarProducts(){
    tableBodyHTML.innerHTML ='';
    Products.forEach((elem, index) => {
         tableBodyHTML.innerHTML +=  `<tr>
         <td>
            <img src="${elem.image}" alt="" class="table-img img-fluid">
         </td>
         <td>${elem.name}</td>
         <td>${elem.description}</td>
         <td>${elem.price}</td>
         <td>${elem.categorias}</td>
         <td>  
         <span onclick="setFavorite(${index})">${elem.favorito} <i class="fa-solid fa-star text-yellow"></i> </span>
         </td>
         <td>${elem.stock ? `<i class="fa-solid fa-check"></i>` : ``}</td>
         <td class="">
                    <div class="d-flex">
                        <button class="btn btn-danger p-1 me-2" onclick="deleteProduct(${index})">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <button class="btn btn-success p-1" onclick="editProduct(${index})">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                    </div>
                </td>
       </tr>`
    });
}

agregarProducts();



AddProductForm.addEventListener('submit', (event) =>{
if(AddProductForm.checkValidity()=== false){
    return;
}


event.preventDefault();
console.dir (event.target.elements);

const forElements = event.target.elements;

let newProduct = {
    name: forElements.name.value,
    description: forElements.description.value,
    price: forElements.price.valueAsNumber,
    image: forElements.image.value,
    stock: forElements.stock.checked,
    favorito: forElements.favorito.checked,
}

console.log(newProduct);
Products.push(newProduct)
agregarProducts();
})


localStorage.setItem('products',JSON.stringify(Products));


agregarProducts.reset(); 


//dskfjsdjcscsmcks-- ESTO ES LO QUE HIZO MARTIN///

if(editable) {
    Products[editable] = newProduct;
} else {
    Products.push(newProduct)
}

editable = undefined;

localStorage.setItem('products', JSON.stringify(Products))
renderProducts();
agregarProducts.reset();

function deleteProduct(idx) {
    console.log(`delete`)
    Products.splice(idx, 1);
    localStorage.setItem('products', JSON.stringify(Products))
    renderProducts();
}

function editProduct(idx) {
    const productToEdit = Products[idx]
    const formEl = addProductForm.elements
    formEl.name.value = productToEdit.name;
    formEl.description.value = productToEdit.description;
    formEl.price.value = productToEdit.price;
    formEl.image.value =  productToEdit.image;

    formEl.stock.checked = productToEdit.stock;
}


    function setFavorite(indice) {
        console.log(`adsadas`)
        Products.forEach((prod) => {
            prod.favorite = false;
        })
        Products[indice].favorite = true;
        console.log(Products);
        renderProducts();
        localStorage.setItem('products', JSON.stringify(Products))
    }