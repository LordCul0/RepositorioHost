const botoncalcular = document.getElementById("botoncalcular");
let distancia = document.getElementById("distancia");
let tiempo = document.getElementById("tiempo");
let resultadoP = document.getElementById("resultadoP");

botoncalcular.addEventListener("click",clicked)
function clicked(){
    let distanciaValor = distancia.value; 
    let tiempoValor = tiempo.value;
    let resultado = distanciaValor / tiempoValor;
    resultado = Math.round(resultado)
    resultadoP.innerHTML = resultado;

}
