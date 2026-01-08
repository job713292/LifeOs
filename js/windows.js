const botones = document.querySelectorAll(".icon");
const ventana = document.getElementById("ventanas");
const contenedorVentanas = document.getElementById("windows-container");
const desktop = document.getElementById("desktop-icons");
const cerrarVentana = document.getElementById("cerrarVentana");


//Abrir ventana
botones.forEach(icono => {
  icono.addEventListener("click", () => {
    abrirVentana();
  });
});

//Cerrar al hacer click fuera 

window.addEventListener("click", (event) => {
  if(event.target === contenedorVentanas){
    cerrarVentanaFn();
  }
});

//Boton de cerrar ventana

cerrarVentana.addEventListener("click", cerrarVentanaFn);

//Funciones reutilizables 

function abrirVentana(){
  ventana.classList.remove("oculto");
  contenedorVentanas.style.zIndex = "10";
  desktop.style.zIndex = "1";
}

function cerrarVentanaFn(){
  ventana.classList.add("oculto");
  contenedorVentanas.style.zIndex = "1";
  desktop.style.zIndex = "5"; 
}