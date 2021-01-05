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

let recetas;
recetas =
[{
  nombre: "DPSM01", estilo: "Dorada Pampeana", tipo: "rubia",
  granos: ["pale ale", "caramelo", "chocolate"], lupulos: ["cascade arg", "cascade USA"]
},
{
  nombre: "DPSM02", estilo: "Dorada Pampeana", tipo: "rubia",
  granos: ["pale ale", "caramelo", "chocolate"], lupulos: ["cascade arg", "cascade USA"]
},
{
  nombre: "DPSM03", estilo: "Dorada Pampeana", tipo: "rubia",
  granos: ["pale ale", "caramelo", "chocolate"], lupulos: ["cascade arg", "cascade USA"]
},
{
  nombre: "DPSM04", estilo: "Dorada Pampeana", tipo: "rubia",
  granos: ["pale ale", "caramelo", "chocolate"], lupulos: ["cascade arg", "cascade USA"]
},
{
  nombre: "DPSM05", estilo: "Dorada Pampeana", tipo: "rubia",
  granos: ["pale ale", "caramelo", "chocolate"], lupulos: ["cascade arg", "cascade USA"]
},
{
  nombre: "DPSM06", estilo: "Dorada Pampeana", tipo: "rubia",
  granos: ["pale ale", "caramelo", "chocolate"], lupulos: ["cascade arg", "cascade USA"]
}];
console.log (recetas);

try {
  let select_default = document.querySelector(".default");
  let resumen_receta = document.querySelector(".resumenReceta");

  function cargarRecetas () {
    console.log("cargada");
    recetas.forEach(receta => {
      optiones_receta.innerHTML += `<li class="option">${receta.nombre}</li>`
    });
    document.querySelectorAll(".option").forEach((opcion) => {
      opcion.addEventListener("click",(e) => {
        select_default.innerHTML = e.currentTarget.innerHTML;
        resumen_receta.innerHTML = '',
        recetas.forEach(receta => {
          if (receta.nombre == e.currentTarget.innerHTML) {
            for (let property in receta) {
              resumen_receta.innerHTML += `<b>${property}:</b> ${receta[property]} <br><br>`;
            };
            resumen_receta.classList.remove("hidden");
          }
        })
      });
    })
  };

  window.addEventListener('load', cargarRecetas)

  let select_box_receta = document.getElementById("select_receta_box");
  let select_default_receta = document.getElementsByClassName("select_receta_default")[0];
  let optiones_receta = document.getElementById("select_options_receta");
  let angle_up = document.getElementsByClassName("fa-angle-up")[0];
  let angle_down = document.getElementsByClassName("fa-angle-down")[0];



  function desplegar () {
    console.log("me hiciste click");
    optiones_receta.classList.toggle("desplegado");
    select_default_receta.classList.toggle("active");
    angle_down.classList.toggle("hidden");
    angle_up.classList.toggle("hidden");
  }

  select_box_receta.addEventListener("click",desplegar);
} catch {
  console.log("el objeto no existe");
}

/*
fetch("/api/v1/proveedor")
.then(res=> res.json())
.then(data=>{
  console.log(data.recetas)
  recetas = data.recetas
})*/
