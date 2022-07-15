let inventary = [
    {
        codigo:'P006575',
        producto:'Zapatillas Nike Air 1',
        precio:'$40.000',
        stock: '10'
    },
    {
        codigo:'P006580',
        producto:'Polera Adidas UCH',
        precio:'$30.000',
        stock: '5'
    },
    {
        codigo:'P006950',
        producto:'Buzo Adidas',
        precio:'$20.000',
        stock: '15'
    } 
]

let table = document.getElementById('bodyTable')

/* document.addEventListener("DOMContentLoaded", fillTable) */

function fillTable () {
    table.innerHTML = ''
    inventary.forEach((product) => {
        table.innerHTML += `
            <tr>
                <th scope="row">${product.codigo}</th>
                <td>${product.producto}</td>
                <td>${product.precio}</td>
                <td>${product.stock}</td>
                <td>
                    <button type="button" class="btn btn-primary editar">Editar</button>
                    <button type="button" class="btn btn-danger eliminar" id=${product.codigo}>Eliminar</button>
                </td>    
            </tr>
            `   
    });
    let deleteBtns = Array.from(document.getElementsByClassName('btn btn-danger eliminar'))
    deleteBtns.forEach((button) => {
        button.addEventListener('click', (event) => deleteProduct(event.target.id))
    })
}

fillTable()

let inputCodigo = document.getElementById('codigo')
let inputProducto = document.getElementById('producto')
let inputPrecio = document.getElementById('precio')
let inputStock = document.getElementById('stock')
let btnAdd = document.getElementById('btnAdd')
let form = document.getElementById('inventaryForm')

btnAdd.addEventListener(addProduct)

function addProduct () {
    let product = {
        codigo: inputCodigo.value,
        producto: inputProducto.value,
        precio: inputPrecio.value,
        stock: inputStock.value
    }
    inventary.push(product)
    fillTable()
    form.reset()
}

function deleteProduct (codigo) {
    inventary = inventary.filter((product)=>product.codigo!==codigo)
    fillTable()
}


