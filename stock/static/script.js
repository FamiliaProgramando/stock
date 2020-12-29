
try {
  let select_receta = document.getElementById("select_receta");
  let optiones_receta = document.getElementById("select_options_receta");
  let angle_up = document.getElementsByClassName("fa-angle-up")[0];
  let angle_down = document.getElementsByClassName("fa-angle-down")[0];

  function desplegar () {
    console.log("me hiciste click");
    optiones_receta.classList.toggle("desplegado");
    angle_down.classList.toggle("cerrado");
    angle_up.classList.toggle("cerrado");
  }

select_receta.addEventListener("click",desplegar);
} catch {
  console.log("el objeto select_receta no existe");
}

