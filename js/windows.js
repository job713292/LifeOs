const botones = document.querySelectorAll(".icon");
const ventana = document.getElementById("ventanas");
const windowdd = document.getElementById("windows-container");
const desktop = document.getElementById("desktop-icons");
const cerrarVentana = document.getElementById("cerrarVentana")


//Abrir ventana 
botones.forEach(icono => {
  icono.addEventListener("click", () => {
    abrirVentana();
  });
});

window.onclick = function(event) {
  if (event.target == windowdd) {
    ventana.classList.add("oculto");
    windowdd.style.zIndex = "1";
  }
};

cerrarVentana.addEventListener("click", function(){
  ventana.classList.add("oculto");
});

function abrirVentana(){
  ventana.classList.remove("oculto");
  windowdd.style.zIndex = "3"; 
}


//prueba de mover ventanas 

const titleBar = document.getElementById("titleBar");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

titleBar.addEventListener("mousedown", (e) =>{
  isDragging = true;

  const rect = ventana.getBoundingClientRect();

  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
  titleBar.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  ventana.style.left = e.clientX - offsetX + "px";
  ventana.style.top = e.clientY - offsetY + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  titleBar.style.cursor = "";
});