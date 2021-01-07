/*header y nav*/

let hamburger = document.getElementById("logoMenu");
let menu = document.getElementById("menu");
let main = document.getElementsByTagName("main")[0];
hamburger.addEventListener("click", mostrarMenu);
main.addEventListener("click", cerrarMenu);

function mostrarMenu () {
  menu.classList.toggle('hidden');
}

function cerrarMenu () {
  if (!(menu.classList.contains('hidden'))){
    menu.classList.toggle('hidden');
  }
}
