//nav-links--visible

const btnMenu = document.getElementById("btnMenu");
const navBar = document.querySelector(".nav-links-responsive");

btnMenu.addEventListener("click",()=>{
    navBar.classList.toggle("nav-links--visible");
});
//añadimos la clase al objeto si esta esa se cambiará a la otra??
//cambia el estado de un elemento

//boton que no es un boton que lleva a la carta
document.getElementById('platos').addEventListener('click',()=>{
    window.location.href='../carta.html';
});

//Funcion para el boton pedir ya
function Pedir(){
    window.location="../reservas.html"
}

//funcion del boton reservar
function aviso(){
    alert('No aceptamos revervas por el momento, Gracias ;D');
}