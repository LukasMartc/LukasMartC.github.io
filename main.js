let inventary = [
    /* {
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
    } */
]

let table = document.getElementById('bodyTable')

function fillTable () {
    inventary.forEach((product) => {
        table.innerHTML += `
            <tr>
                <th scope="row">${product.codigo}</th>
                <td>${product.producto}</td>
                <td>${product.precio}</td>
                <td>${product.stock}</td>
                <td>
                    <button type="button" class="btn btn-primary">Editar</button>
                    <button type="button" class="btn btn-danger">Eliminar</button>
                </td>    
            </tr>
            `   
    });
}

fillTable()

let inputCodigo = document.getElementById('codigo')
let inputProducto = document.getElementById('producto')
let inputPrecio = document.getElementById('precio')
let inputStock = document.getElementById('stock')
let btnAdd = document.getElementById('btnAdd')

btnAdd.addEventListener('click', addProduct)

function addProduct () {
    let product = {
        codigo: inputCodigo.value,
        producto: inputProducto.value,
        precio: inputPrecio.value,
        stock: inputStock.value
    }
    inventary.push(product)
    fillTable()
}

