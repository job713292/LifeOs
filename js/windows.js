const btn = document.getElementById("notas-btn");
const ventana = document.getElementById("notas");
const windowdd = document.getElementById("windows-container");
const desktop = document.getElementById("desktop-icons");
const cerrarVentana = document.getElementById("cerrarVentana")

btn.onclick = function(){
    ventana.classList.remove("oculto");
    windowdd.style.zIndex = "3"; 
    
}

window.onclick = function(event) {
  if (event.target == windowdd) {
    ventana.classList.add("oculto");
    windowdd.style.zIndex = "1";
  }
};

cerrarVentana.addEventListener("click", function(){
  ventana.classList.add("oculto");
});