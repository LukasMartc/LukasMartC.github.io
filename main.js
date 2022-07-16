let inventary = []
let table = document.getElementById('bodyTable')
let inputCodigo = document.getElementById('codigo')
let inputProducto = document.getElementById('producto')
let inputPrecio = document.getElementById('precio')
let inputStock = document.getElementById('stock')
let btnAdd = document.getElementById('btnAdd')
let form = document.getElementById('inventaryForm')
let btnUpdate = document.getElementById('btnUpdate')

btnAdd.addEventListener('click', (event) => addProduct(event))

function addProduct (event) {
    event.preventDefault()
    let product = {
        codigo: inputCodigo.value,
        producto: inputProducto.value,
        precio: inputPrecio.value,
        stock: inputStock.value
    }
    inventary.push(product)
    form.reset()
    localStorageInventaryList(inventary)
    fillTable()
}

function localStorageInventaryList (plist) {
    localStorage.setItem('inventaryData', JSON.stringify(plist))
}

function fillTable () {
    let storedList = localStorage.getItem('inventaryData')
    if(storedList == null) {
        inventary = []
    }
    else {
        inventary = JSON.parse(storedList)
    }
    table.innerHTML = ''
    inventary.forEach((product) => {
        table.innerHTML += `
            <tr>
                <th scope="row">${product.codigo}</th>
                <td>${product.producto}</td>
                <td>${product.precio}</td>
                <td>${product.stock}</td>
                <td>
                    <button type="button" class="btn btn-primary editar" id="${product.codigo}">Editar</button>
                    <button type="button" class="btn btn-danger eliminar" id="${product.codigo}">Eliminar</button>
                </td>    
            </tr>
            `   
    });
    let deleteBtns = Array.from(document.getElementsByClassName('btn btn-danger eliminar'))
    deleteBtns.forEach((button) => {
        button.addEventListener('click', (event) => deleteProduct(event.target.id))
    })
    let editBtns = Array.from(document.getElementsByClassName('btn btn-primary editar'))
    editBtns.forEach((button) =>{
        button.addEventListener('click', (event) => { 
            btnAdd.style.display = 'none'
            btnUpdate.style.display = 'block'
            editProduct(event.target.id)})
    })
    btnUpdate.addEventListener('click', (event) => {
        event.preventDefault()
        btnUpdate.style.display = 'none'
        btnAdd.style.display = 'block'
        updateData(event.target.getAttribute('element'))
    })
}

function deleteProduct (codigo) {
    inventary = inventary.filter((product)=>product.codigo!==codigo)
    localStorage.setItem('inventaryData', JSON.stringify(inventary))
    fillTable()
}

function editProduct (id) { 
    btnUpdate.setAttribute('element', id)
    let productFound =  inventary.find((product) => product.codigo === id)
    inputCodigo.value = productFound.codigo
    inputProducto.value = productFound.producto
    inputPrecio.value = productFound.precio
    inputStock.value = productFound.stock
}

fillTable()

function updateData (id) {
    inventary.forEach((product) => {
        if(product.codigo === id) {
            product.producto = inputProducto.value
            product.precio = inputPrecio.value
            product.stock = inputStock.value
            product.codigo = inputCodigo.value
        }
    })
    deleteProduct()
    form.reset()
    addProduct()
    fillTable()
} 









