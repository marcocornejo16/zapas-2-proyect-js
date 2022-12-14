//*Buscar en localStorage
//*Traer tabla y formulario
//*Crear funcion para pintar tabla

const Products = JSON.parse(localStorage.getItem('products')) || [];
const tableBodyHTML = document.getElementById('table-body-zapas');
const AddProductForm = document.querySelector('#FormProducts');
let editable;


function pintarTabla() {
    tableBodyHTML.innerHTML = '';
    Products.forEach((elem, index) => {
        tableBodyHTML.innerHTML += `<tr>
        <td>
            <img src="${elem.image}" alt="" class="table-img img-fluid">
        </td>
        <td>${elem.name}</td>
        <td class="text-description-table">${elem.description}</td>
        <td>${elem.price}</td>
        <td>${elem.categoria}</td>
        <td>  
        <span onclick="setFavorite(${index})">${elem.favorito ? `<i class="fa-solid fa-star"></i>` : `<i class="fa-regular fa-star"></i>`} </span>
            </button>
        </td>
        <td>${elem.stock ? `<i class="fa-solid fa-check"></i>` : ``}</td>
        <td>${elem.descuento ? `<i class="fa-solid fa-check"></i>` : ``}</td>
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

pintarTabla();


AddProductForm.addEventListener('submit', (event) => {


    if (AddProductForm.checkValidity() === false) {
        return;
    }


    event.preventDefault();

    console.dir(event.target.elements);

    const forElements = event.target.elements;
    console.dir(event)
    let newProduct = {
        name: forElements.name.value,
        description: forElements.description.value,
        price: forElements.price.valueAsNumber,
        image: forElements.image.value,
        stock: forElements.stock.checked,
        favorito: forElements.favorito.checked,
        categoria: forElements.categoria.value,
        descuento: forElements.descuento.checked,
    }
    

    console.log('Nuevo producto cargado')
    pintarTabla();
    localStorage.setItem('products', JSON.stringify(Products));

    const formData = new FormData(AddProductForm);
    const otroProduct = Object.fromEntries(formData)

    newProduct.price = parseInt(otroProduct.price)

    console.log(newProduct)



    if (editable >= 0) {
        Products[editable] = newProduct;
    } else {
        Products.push(newProduct)
        swal('Se ha cargado un producto','', 'success');
    }

    AddProductForm.reset()
    AddProductForm.focus()

    console.log(Products)
    localStorage.setItem('products', JSON.stringify(Products))
    pintarTabla();

})


function deleteProduct(idx) {
    console.log(`Producto borrado`)
    Products.splice(idx, 1);
    localStorage.setItem('products', JSON.stringify(Products))
    pintarTabla();
}

function editProduct(idx) {
    console.log('Producto a editar')
    const productoAEditar = Products[idx]

    const formEl = AddProductForm.elements

    formEl.name.value = productoAEditar.name;
    formEl.description.value = productoAEditar.description;
    formEl.price.value = productoAEditar.price;
    formEl.image.value = productoAEditar.image;
    formEl.stock.checked = productoAEditar.stock;
    formEl.favorito.checked = productoAEditar.favorito;
    formEl.categoria.value = productoAEditar.categoria;
    formEl.descuento.checked = productoAEditar.descuento;


    console.log(productoAEditar)

    AddProductForm.setAttribute('edit', idx);
    const prod = Products[idx]

    Object.keys(prod).forEach(key => {
        if ('checked' in AddProductForm.elements[key]) {
            console.log(key, !!prod[key])
            AddProductForm.elements[key].checked = prod[key]
            // swal('Se editara un producto','', 'warning');
        }
        AddProductForm.elements[key].value = Products[idx][key]
        
    })
    AddProductForm.setAttribute('data-edit', idx);
    editable = idx;
    
    
    
}

function setFavorite(idx) {
    console.log('Producto favorito')
    Products.forEach((prod) => {
        prod.favorito = false;
    })
    Products[idx].favorito = true;


    console.log(Products);
    pintarTabla()
    localStorage.setItem('products', JSON.stringify(Products))
}