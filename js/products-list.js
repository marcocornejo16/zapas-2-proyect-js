
const Products =  JSON.parse(localStorage.getItem('products')) || [];
const tableBodyHTML = document.getElementById('table-body-zapas');
const AddProductForm = document.querySelector('#FormProducts');
let editable;
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
        <span onclick="setFavorite(${index})">${elem.favorite ? `<i class="fa-solid fa-star bg-yellow"></i>` : `<i class="fa-regular fa-star"></i>`} </span>
            </button>
        </td>
        <td>${elem.stock ? `<i class="fa-solid fa-check"></i>` : ``}</td>
        <td class="">
                    <div class="d-flex">
                    <button class="btn btn-success p-1 me-2" onclick="editProduct(${index})">
                    <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                        <button type="eliminar" class="btn btn-danger p-1 " onclick="deleteProduct(${index})">
                        <i class="fa-regular fa-xmark"></i>
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
agregarProducts();
localStorage.setItem('products',JSON.stringify(Products));

const formData = new FormData(AddProductForm);
    const otroProduct = Object.fromEntries(formData)

    newProduct.price = parseInt(otroProduct.price)

    console.log(otroProduct)

    otroProduct.jostick = !!otroProduct.jostick;
    otroProduct.stock = !!otroProduct.stock;

    if(editable) {
        Products[editable] = newProduct;
    } else {
        Products.push(newProduct)
    }

    editable = undefined;
    console.log(Products)
    //Guardamos el array de productos modificado
    localStorage.setItem('products', JSON.stringify(Products))

    // Pintamos nuevamente la tabla para que reflejen los cambios
    agregarProducts();

    // Reseteo el formulario para que esta listo para una carga
    AddProductForm.reset()



})


function deleteProduct(idx) {
    console.log(`delete`)
    Products.splice(idx, 1);
    localStorage.setItem('products', JSON.stringify(Products))
    agregarProducts();
}

function editProduct(idx) {
    const productToEdit = Products[idx]
    const formEl = AddProductForm.elements
    formEl.name.value = productToEdit.name;
    formEl.description.value = productToEdit.description;
    formEl.price.value = productToEdit.price;
    formEl.image.value =  productToEdit.image;
    formEl.stock.checked = productToEdit.stock;
    
    

    AddProductForm.setAttribute('edit', idx);
    editable=idx;  
    const prod = Products[idx]

    Object.keys(prod).forEach(key => {
        if(`checked` in AddProductForm.elements[key]) {
        console.log(key, !!prod[key])
        AddProductForm.elements[key].checked = !!prod[key]
        }

        AddProductForm.elements[key].value = Products[idx][key]
    })
    AddProductForm.setAttribute('data-edit', idx);

    localStorage.setItem('products',JSON.stringify(Products));

}

    function setFavorite(indice) {
        console.log('Hola')
        Products.forEach((prod) => {
            prod.favorite = false;
        })
        Products[indice].favorite = true;
        console.log(Products);
        agregarProducts()
        localStorage.setItem('products', JSON.stringify(Products))
    }

