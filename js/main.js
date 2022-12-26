let savedPIN = "1234";

function login() {
    let ingresar = false;

for (let i = 2; i >= 0; i--) {
    let userPIN = prompt("Ingresa tu PIN");
    if (userPIN == savedPIN){
        alert("Bienvenido/a. Ingreso Exitoso");
            ingresar = true;
            break; 
    } else {
        alert("Error te quedan " + i + " oportunidades");
    }
}
return ingresar;
}

//console.log(login());

let exito = login()
if(exito){
    //Dentro de la página
let saldo = 100000;
let dolar = 300;


let opcion = prompt('Elegí una opción: \n1 - Ver Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n4 - Comprar dólares. \n5 - Vender dólares. \nPresioná "X" para finalizar.');

while(opcion != "X"){
switch (opcion) {
    case "1":
        alert("Tu saldo es $" + saldo);
        break;
    case "2":
    let retiro = parseInt(prompt("Ingresa el monto a retirar"));
    if(retiro <= saldo){
        saldo = saldo - retiro;
        alert('Retiraste $' + retiro +', tu nuevo saldo es $'+ saldo);
    }else{
        alert("Saldo insuficiente");
    }
    break;
    case "3":
        let deposito = parseInt(prompt("Ingresa el monto a depositar"));
        saldo = saldo + deposito;
        alert("Tu nuevo saldo es $"+ saldo);
    break;
    case "4":
        let compraDlr = parseInt(prompt("Ingrese la cantidad que desea comprar"));
        alert("Actualmente su cuenta no se encuentra habilitada para la compra de dólares.");
        break;
        case "5":
        let ventaDlr = parseInt(prompt("Ingrese la cantidad que desea vender"));
        alert("Actualmente su cuenta no se encuentra habilitada para la venta de dólares.");
        break;

    default:
        alert("opción no válida")
        break;
}
opcion = prompt('Elegí una opción: \n1 - Saldo. \n2 - Retiro de dinero- \n3 - Depósito. \n4 - Comprar dólares. \n5 - Vender dólares.\nPresioná X para finalizar.');
}
}else{
    alert("Error al ingresar, probá con 1234 ;)");
}
alert("Primera Pre-entraga Federico Mosso");