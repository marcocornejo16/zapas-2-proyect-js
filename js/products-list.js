import { Zapas } from './array-list-prod.js';

const tableBodyHTML = document.getElementById('table-body-zapas');
console.log(tableBodyHTML)

Zapas.forEach(elem => {
     tableBodyHTML.innerHTML +=  `<tr>
     <td class="table-img">Imagen</td>
     <td>Marca-modelo</td>
     <td>Alguna descripcion</td>
     <td>$</td>
     <td>Categoria</td>
     <td>Favorito</td>
     <td>Icono elementos</td>
   </tr>`
})