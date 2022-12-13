
//condicional para determinar si el usuario o contraseÃ±a coinciden. 
let documentacion = {nombre: false, dni: false}
let cantidadtotal = 0
let cantidad1 = 0
let cantidad2 = 0
let flag = false
let mayoresDeEdad = [] 
let menoresDeEdad = []
const usuarios = [{nombre: 'hernan', dni: "45813742", edad: "24"}, {nombre: 'flor', dni: "54723154", edad: "17"}]

function login (form){
    const dni = form.d.value 
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].dni === dni) {
            usuarios[i].sesion = true;
            window.location.assign("./pages/cuenta.html")
            }
            if (usuarios[i].nombre === form.n.value) {
                usuarios[i].sesion = true;
                window.location.assign("./pages/cuenta.html")
            }
       }  
              
 }  

 function filtrado() {
    for (let i = 0; i < usuarios.length; i++) {
       if (usuarios[i].edad < 18) {
        menoresDeEdad.push(usuarios[i])
       } else{
        mayoresDeEdad.push(usuarios[i])
       }

    }
 }


//funcion para trasferir de cuenta primaria a secundaria.
function formula() {
    let cantidadtotal = parseInt(document.getElementById("cantidad").value);
    let cantidad1 = parseInt(document.getElementById("c1").value);
    let cantidad2 = parseInt(document.getElementById("c2").value);
    if(cantidad1 >= cantidadtotal){
        document.getElementById("c1").value = (cantidad1 - cantidadtotal)
        document.getElementById("c2").value = (cantidad2 + cantidadtotal)
    }else{
        alert("saldo insuficiente")
    }
}
//funcion para transferir de cuenta secundaria a la primaria.
function formula2() {
    let cantidadtotal = parseInt(document.getElementById("cantidad").value);
    let cantidad1 = parseInt(document.getElementById("c1").value);
    let cantidad2 = parseInt(document.getElementById("c2").value);
    if (cantidad2 >= cantidadtotal) {
        document.getElementById("c1").value = (cantidad1 + cantidadtotal)
        document.getElementById("c2").value = (cantidad2 - cantidadtotal)    
    }else{
        alert("saldo insuficiente")
    }
}
//funcion para depositar a cuenta primaria.
function formula3() {
    let cantidadtotal = parseInt(document.getElementById("cantidad").value);
    let cantidad1 = parseInt(document.getElementById("c1").value);
    let cantidad2 = parseInt(document.getElementById("c2").value);
    document.getElementById("c1").value = (cantidad1 + cantidadtotal) 
}
//funcion para depositar a cuenta secundaria.
function formula4() {
    let cantidadtotal = parseInt(document.getElementById("cantidad").value);
    let cantidad1 = parseInt(document.getElementById("c1").value);
    let cantidad2 = parseInt(document.getElementById("c2").value);
    document.getElementById("c2").value = (cantidad2 + cantidadtotal) 
}
//funcion para retirar de cuenta primaria.
function formula5() {
    let cantidadtotal = parseInt(document.getElementById("cantidad").value);
    let cantidad1 = parseInt(document.getElementById("c1").value);
    let cantidad2 = parseInt(document.getElementById("c2").value);
    document.getElementById("c1").value = (cantidad1 - cantidadtotal) 
}
//funcion para retirar de cuenta secundaria.
function formula6() {
    let cantidadtotal = parseInt(document.getElementById("cantidad").value);
    let cantidad1 = parseInt(document.getElementById("c1").value);
    let cantidad2 = parseInt(document.getElementById("c2").value);
    document.getElementById("c2").value = (cantidad2 - cantidadtotal) 
}