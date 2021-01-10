/*proveedores*/
let proveedores;
let formulario = document.getElementById("proveedores_form");
let prov_pagina = document.getElementById("proveedores_pagina");
let prov_nombre = document.getElementById("proveedores_nombre");
let prov_telefono = document.getElementById("proveedores_telefono");
let prov_email = document.getElementById("proveedores_email");
let editar = document.getElementById("edit");
let borrar = document.getElementById("delete");
let agregar = document.getElementById("add");
let anterior = document.getElementById("anterior");
let siguiente = document.getElementById("siguiente");
// let numeros = document.querySelectorAll(".numero_prov");
let desplegar = document.querySelectorAll(".desplegar_info")[0];
let info_prov = document.getElementById("info_proveedor");
// let primero = numeros[0];
// let segundo = numeros[1];
// let tercero = numeros[2];
let inputs = document.querySelectorAll("#proveedores_form input");
let botones = document.querySelectorAll('.boton');
let cancelar = document.querySelector('.cancel');
let guardar = document.querySelector('.ok');
let datos;
let action = "";
let actual = 1;
let proveedor = 0;
let cantprov;
let trioprov = 0;

let end = false;
let url;
let email;
let id;
//let editando = false;

function actualizarPlanilla (num) {
  prov_nombre.value = proveedores[num].nombre;
  prov_telefono.value = proveedores[num].telefono;
  prov_email.value = proveedores[num].email;
  prov_pagina.value = proveedores[num].pagina;
  id = proveedores[num].id;
}

function cargarProveedores () {
  fetch("/api/v1/proveedor")
  .then(res=> res.json())
  .then(data=>{
    proveedores = data.proveedores;
    console.log(proveedores);
    prov_nombre.value = proveedores[0].nombre;
    prov_telefono.value = proveedores[0].telefono;
    prov_email.value = proveedores[0].email;
    prov_pagina.value = proveedores[0].pagina;
    id = proveedores[0].id;
    end = true;
    cantprov = proveedores.length;
    if (cantprov > 3){
    }
  })
};

function agregarProveedor (datos) {
  console.log(datos);
   fetch("/api/v1/proveedor",{
    method: 'POST',
    body: datos,
    headers: {"Content-type": "application/json"}
  })
  .then(res=>res.json())
  .then(res=> {
    if (res.created) {
      console.log(res.created);
      proveedores[(proveedores.length)] = {id: res.created.id, nombre: prov_nombre.value, telefono: prov_telefono.value, email: prov_email.value, pagina: prov_pagina.value};
      cantprov = proveedores.length;
    } else {
      console.log("hubo un error");
    }
  })
};

function editarProveedor (datos) {
  console.log(datos);
  console.log(id);
  fetch(`/api/v1/proveedor/${id}`,{
    method: 'PUT',
    body: datos,
    headers: {"Content-type": "application/json"}
  })
  .then(res=>res.text())
  .then(res=>console.log(res))

};

function borrarProveedor (id) {
  console.log(id);
  fetch(`/api/v1/proveedor/${id}`,{
    method: 'DEL',
    body: datos,
    headers: {"Content-type": "application/json"}
  })
  .then(res=>res.text())
  .then(res=> {
    console.log(res);
    console.log("Se ha borrado el proveedor")
  })
};

window.addEventListener('load', cargarProveedores);

prov_pagina.addEventListener("click", () => {
  if (prov_pagina.classList.contains('link') && !(prov_pagina.value == '')) {
    url = prov_pagina.value;
    let win = window.open(url, '_blank');
    win.focus()
  }
});

prov_email.addEventListener("click", () => {
  if (prov_email.classList.contains('link') && !(prov_pagina.value == '')) {
    email = prov_email.value;
    let win = window.open(`mailto:${email}?Subject=Consulta%20insumos`, '_blank');
    win.focus()
  }
});

cancelar.addEventListener("click", () => {
  console.log("click cancelar");
  console.log(action);
  botones.forEach(element => {
    if (element.classList.contains('numero_prov')||element.classList.contains('flecha')) {
      element.classList.remove("hidden");
    }
    else if (element.classList.contains('cancel')||element.classList.contains('ok')) {
      element.classList.add("hidden");
    }
  });
  inputs.forEach(element => {
    element.setAttribute('readonly','true');
    element.classList.add('no_editable');
    if (element.classList.contains('no_link')){
      element.classList.add('link');
      element.classList.remove('no_link');
    }
    if (action == "edit") {
      editar.classList.remove('active');
    } else if (action == "add") {
      agregar.classList.remove('active');
    }
    action = "cancel";
  });
  prov_nombre.value = proveedores[proveedor].nombre;
  prov_telefono.value = proveedores[proveedor].telefono;
  prov_email.value = proveedores[proveedor].email;
  prov_pagina.value = proveedores[proveedor].pagina;
});

guardar.addEventListener("click", () => {
  console.log("click ok");
  console.log(action);
  datos = {
    nombre: prov_nombre.value,
    telefono : prov_telefono.value,
    email : prov_email.value,
    pagina : prov_pagina.value
  };
  botones.forEach(element => {
    if (element.classList.contains('numero_prov')||element.classList.contains('flecha')) {
      element.classList.remove("hidden");
    }
    else if (element.classList.contains('cancel')||element.classList.contains('ok')) {
      element.classList.add("hidden");
    }
  })
  inputs.forEach(element => {
    element.setAttribute('readonly','true');
    element.classList.add('no_editable');
    if (element.classList.contains('no_link')){
      element.classList.add('link');
      element.classList.remove('no_link');
    }
  })

  if (action == "edit") {
    console.log("Funcion Editar Proveedor");
    editarProveedor (JSON.stringify(datos));
    editar.classList.remove('active');
  } else if (action == "add") {
    agregarProveedor (JSON.stringify(datos));
    agregar.classList.remove('active');
  }
  action = "ok";
});

editar.addEventListener("click", () => {
  console.log(action);
  console.log("click editar");
  editar.classList.add('active');
  action = 'edit';
  console.log(action);
  inputs.forEach(element => {
    element.removeAttribute('readonly');
    element.classList.remove('no_editable');
    if (element.classList.contains('link')){
      element.classList.remove('link');
      element.classList.add('no_link');
    }
  })
  prov_nombre.focus();
  botones.forEach(element => {
    if (element.classList.contains('numero_prov')||element.classList.contains('flecha')||element.classList.contains('cancel')||element.classList.contains('ok')) {
      element.classList.toggle("hidden");
    }
  })
});

borrar.addEventListener("click", () => {
  console.log("click borrar");
  action = 'delete';
  borrar.classList.add('active');
  console.log(action);
  let r = confirm("Esta seguro que quiere eliminar este proveedor del sistema?")
  if (r == true) {
    id = 51;
    borrarProveedor(id);
    borrar.classList.remove('active');
  } else {
    console.log("Accion cancelada");
    borrar.classList.remove('active');
  }
});

/*Boton Agregar un Proveedor*/

agregar.addEventListener("click", () => {
  console.log("click agregar");
  console.log(action);
  action = 'add';
  agregar.classList.add('active');
  console.log(action);
  inputs.forEach(element => {
    element.removeAttribute('readonly');
    element.classList.remove('no_editable');
    element.value = '';
    if (element.classList.contains('link')){
      element.classList.remove('link');
      element.classList.add('no_link');
    }
  })
  prov_nombre.focus();
  botones.forEach(element => {
    if (element.classList.contains('numero_prov')||element.classList.contains('flecha')||element.classList.contains('cancel')||element.classList.contains('ok')) {
      element.classList.toggle("hidden");
    }
  })
});

/*Botones de numero y flechas*/

anterior.addEventListener("click", () => {
  console.log("click anterior");
  if (trioprov > 0) {
    trioprov -= 1;
    numeros.forEach(element => {
      element.value -= 1
    })
  }
});

siguiente.addEventListener("click", () => {
  console.log("click siguiente");
  if (trioprov < (cantprov/3-2)) {
    trioprov += 1;
    console.log(trioprov);
    anterior.classList.remove('inactive');
    numeros.forEach(element => {
      let num = parseInt(element.innerHTML);
      element.innerHTML = num + 3;
    })
  } else if (trioprov = (cantprov/3-1)) {
    siguiente.classList.add('inactive');

    numeros.forEach(element => {
      let num = parseInt(element.innerHTML);
      element.innerHTML = num + 3;
    })
  }
});

desplegar.addEventListener("click", () => {
  console.log("click desplegar");
  if (info_prov.classList.contains("hidden")) {
    info_prov.classList.remove("hidden");
    desplegar.style.transform="rotate(180deg)";
  } else {
    info_prov.classList.add("hidden");
    desplegar.style.transform="none";
  }
});

// primero.addEventListener("click", () => {
//   console.log("click 1");
//   segundo.classList.remove('active');
//   tercero.classList.remove('active');
//   primero.classList.add('active');
//   proveedor = 0;
//   actualizarPlanilla (proveedor);
// });

// segundo.addEventListener("click", () => {
//   console.log("click 2");
//   segundo.classList.add('active');
//   primero.classList.remove('active');
//   tercero.classList.remove('active');
//   proveedor = 1;
//   actualizarPlanilla (proveedor);
// });

// tercero.addEventListener("click", () => {
//   console.log("click 3");
//   segundo.classList.remove('active');
//   primero.classList.remove('active');
//   tercero.classList.add('active');
//   proveedor = 2;
//   actualizarPlanilla (proveedor);
// });


