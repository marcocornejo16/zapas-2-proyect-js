import { Productos } from './array-list-prod.js';

const tableBodyHTML = document.getElementById('table-body-zapas');
console.log(tableBodyHTML)
console.log(Productos)

Productos.forEach(elem => {
     tableBodyHTML.innerHTML +=  `<tr>
     <td>
     <img src="${elem.img}" alt="" class="table-img img-fluid">
     </td>
     <td>${elem.name}</td>
     <td>${elem.description}</td>
     <td>${elem.price}</td>
     <td>${elem.categorias}</td>
     <td>${elem.favorite}</td>
     <td>Icono elementos</td>
   </tr>`
})