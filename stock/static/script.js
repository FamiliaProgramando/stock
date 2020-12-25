
try {
    let select_receta = document.getElementById("select_receta");
    let optiones_receta = document.getElementById("select_options_receta");   

function desplegar () {
    console.log("me hiciste click");
    optiones_receta.classList.add = "desplegado"; 
}

select_receta.addEventListener("click",desplegar);
} catch {
    console.log("el objeto select_receta no existe");
}

