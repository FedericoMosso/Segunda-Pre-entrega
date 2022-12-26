const productos = [
    { id: 1, nombre: "Merlot Roble", precio: 850},
    { id: 2, nombre: "Corbeau Roble", precio: 850},
    { id: 3, nombre: "Malbec Roble", precio: 850},
    { id: 4, nombre: "Malbec Numerado", precio: 1100},
    { id: 5, nombre: "Blend Prestige", precio: 1400},
    { id: 6, nombre: "Pinot Noir Prestige", precio: 1400},
    { id: 7, nombre: "Malbec Reserva Prestige", precio: 1400},
    { id: 8, nombre: "Malbec Rose", precio: 850},
    { id: 9, nombre: "Cabernet Savignon", precio: 850},
    { id: 10, nombre: "Chardonnay", precio: 850},
    { id: 11, nombre: "Espumante Extra Brut", precio: 1200},
    { id: 12, nombre: "Espumante Extra Brut Champenoisse", precio: 1650},
    { id: 13, nombre: "Espumante RS Brut Nature Champenoisse", precio: 2300},
    { id: 14, nombre: "Master Blend RS", precio: 2300},
    { id: 15, nombre: "Fangio LegendMaster Blend", precio: 2450},
]

function Producto(nombre, precio){
    this.id = productos.length + 1;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
}

productos.push(new Producto("Fangio Blend", 1900))

//funciones de filtrado
console.log(productos);

function buscarPorNombre(arr, filtro){
    const encontrado= arr.find((producto)=>{
        return producto.nombre.includes(filtro);
    })
    return encontrado;
}

function filtrarPorNombre(arr, filtro){
    return arr.filter((producto)=>{
        return producto.nombre.includes
        (filtro);
    })
}

let buscar = prompt("Ingresa el nombre del producto")
const filtrado = filtrarPorNombre(productos, buscar);

console.log(filtrado);

    
/*let buscar = prompt("Ingresa el nombre del produccto")
const prodEncontrado = buscarPorNombre(productos, buscar)

console.log(prodEncontrado);*/
