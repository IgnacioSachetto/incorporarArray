var i = 0
var acumulado = 0
var iva = 0
var cont = 0

alert("BIENVENIDO")

const accesorios = ["Vincha","Aros"]
const marroquineria = [ "Cartera" , "Bandolera"]
const productos = accesorios.concat(marroquineria)
const precios = [10,20,30,40]

    alert("LISTA DE PRODUCTOS DISPONIBLES")

for (let i = 0; i < productos.length;i++){
    alert("Producto: " + productos[i] + ". Precio: $" + precios[i] + ".");
}

for (let i = 0; i < productos.length;i++){
    alert("¿Desea agregar: " + productos[i] + "? "+ "Precio: $" + precios[i] +".");
    
    var resp = parseInt(prompt("0 Si, 1 No"))

    if (resp == 0){
        cont = cont + precios[i]
        alert("¡¡Producto Agregado!!")
        alert("Su total es de: $" + cont)
    } 
}
/*
while (i == 0){
    var precioProducto = parseFloat(prompt("Ingrese el precio de su producto"))
    var cantidad = parseFloat(prompt("Ingrese la cantidad de su producto"))        
    var acumulado = calcularSubTotal(precioProducto,cantidad) + acumulado

    alert("Su subTotal es de: $" + calcularSubTotal(precioProducto,cantidad))

    i = parseInt (prompt("¿Desea ingresar un producto? 0 Si , 1 No"))
}

alert("Su Total es de: $" + acumulado)
*/

iva = parseInt (prompt("¿Desea añadir IVA? 0 Si , 1 No"))

if (iva == 0){
    alert("Su Total incluyendo IVA es de: $" + calcularIVA(cont))

    cont = calcularIVA(cont)

    envio = parseInt(prompt("¿Desea añadir envio? 0 Si , 1 No"))

    if (envio == 0){
        var precioEnvio = parseFloat(prompt("Ingrese el precio de su envio"))

        alert("Su Total Final es de: $" + parseInt(calcularEnvio(cont,precioEnvio)))
    } else {
        alert("Su Total Final fue de: $" + cont)
    }


} else {

    envio = parseInt (prompt("¿Desea añadir envio? 0 Si , 1 No"))

    if (envio == 0){
        var precioEnvio = parseFloat(prompt("Ingrese el precio de su envio"))
        alert("Su Total Final es de: $" + calcularEnvio(cont,precioEnvio))
    } else {
        alert("Su Total Final fue de: $" + cont)
    }
}
/*

/*Funciones*/

function calcularSubTotal(precioProducto,cantidad){
    return(precioProducto * cantidad)
}

function calcularIVA (cont){
    return (cont + (cont* 0.21))
}

function calcularEnvio(cont,precioEnvio){
    return(cont+precioEnvio)
}













