const modal = document.getElementById("btn");
const ventana = document.getElementById("ventana");
const  windowdd = document.getElementById("desktop");

modal.onclick = function(){
    ventana.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == windowdd) {
    ventana.style.display = "none";
  }
};