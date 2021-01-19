/*proveedores*/
let proveedores =[];
let todosInsumos = [];
let insProv = [];
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
let tablaInsumos = document.getElementById("lista_insumos");
// let lupulos = document.querySelectorAll('#lista_insumos h3')[1];
// let sales = document.querySelectorAll('#lista_insumos h3')[2];
// let levaduras = document.querySelectorAll('#lista_insumos h3')[3];
// let envasado = document.querySelectorAll('#lista_insumos h3')[4];
// let limpieza = document.querySelectorAll('#lista_insumos h3')[5];
// let primero = numeros[0];
// let segundo = numeros[1];
// let tercero = numeros[2];
let inputs = document.querySelectorAll("#proveedores_form input");
let botones = document.querySelectorAll('.boton');
let cancelar = document.querySelector('.cancel');
let guardar = document.querySelector('.ok');
let datos;
let action = "";
let proveedor = 0;
let cantprov;
let numprov = 0;
let end = false;
let url;
let email;
let id;

window.addEventListener('load', cargarProveedores);


function actualizarPlanilla (num) {
  prov_nombre.value = proveedores[num].nombre;
  prov_telefono.value = proveedores[num].telefono;
  prov_email.value = proveedores[num].email;
  prov_pagina.value = proveedores[num].pagina;
  id = proveedores[num].id;
  cargarInsumo();
}

function cargarProveedores () {
  fetch("/api/v1/proveedor")
  .then(res=> res.json())
  .then(data=>{
    let nombres = [];
    let provdesord;
    provdesord = data.proveedores;
    data.proveedores.forEach(proveedor => {
      nombres.push(proveedor.nombre);
    });
    nombres.sort();

    nombres.forEach(nombre => {
      provdesord.forEach(proveedor => {
        if (proveedor.nombre == nombre) {
          proveedores.push(proveedor);
        }
      });
    });

    console.log(proveedores);
    prov_nombre.value = proveedores[0].nombre;
    prov_telefono.value = proveedores[0].telefono;
    prov_email.value = proveedores[0].email;
    prov_pagina.value = proveedores[0].pagina;
    id = proveedores[0].id;
    end = true;
    cantprov = proveedores.length;
    cargarInsumo();
  })
};

const getinfoinsumo = async (idins,precio) => {
  try {
    const resIns = await fetch(`/api/v1/insumo/${idins}`)
    const ins = await resIns.json();
    let respuesta = ins;
    respuesta.insumo.precio = precio;
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

function cargarInsumo () {
  let tabla_insumos = new DocumentFragment();
  let insumos_proveedor = [];
  let categorias = ["granos", "lúpulos", "sales", "levaduras", "envazado", "limpieza"];
  let granos = new DocumentFragment();
  let lupulos = new DocumentFragment();
  let sales = new DocumentFragment();
  let levaduras = new DocumentFragment();
  let envazado = new DocumentFragment();
  let limpieza = new DocumentFragment();
  categorias.forEach(categoria => {
    let titulo = document.createElement("h3");
    let tit = document.createTextNode(categoria);
    titulo.appendChild(tit);
    switch(categoria) {
      case "granos":
        granos.appendChild(titulo);
        break;
      case "lúpulos":
        lupulos.appendChild(titulo);
        break;
      case "sales":
        sales.appendChild(titulo);
        break;
      case "levaduras":
        levaduras.appendChild(titulo);
        break;
      case "envazado":
        envazado.appendChild(titulo);
        break;
      case "limpieza":
        limpieza.appendChild(titulo);
        break;
    }
  })

  let atributos = ["nombre", "marca", "size", "precio"];

  const getinsumosP = async (idprov) => {
    try{
      let insP = await getinsumosProv(idprov);
      let i =0;
      if (insP.insumos.length>0){
        insP.insumos.forEach(insumo => {
          getinfoinsumo(insumo.insumo_id, insumo.precio)
          .then((respuesta) =>{
            insumos_proveedor.push(respuesta);
            i +=1;
            if (i == insP.insumos.length){
              console.log(`valores insumos: ${JSON.stringify(insumos_proveedor)}`);
              let ins = 0;
              insumos_proveedor.forEach(insumoVal => {
                let insumo = document.createElement("div");
                insumo.classList.add("insumo")
                let num = 0;
                atributos.forEach(atributo => {
                  let atributoInsumo = document.createElement("div");
                  atributoInsumo.classList.add("atributo_insumo", atributo);
                  let texto;
                  if (atributo=="size") {
                    texto = document.createTextNode(insumoVal.insumo["cantidad"]+" "+insumoVal.insumo["unidad"]);
                  } else {
                    texto = document.createTextNode(insumoVal.insumo[atributo]);
                  }
                  atributoInsumo.appendChild(texto);
                  insumo.appendChild(atributoInsumo);
                  num +=1;
                });
                switch(insumoVal.insumo["tipo_insumo"]) {
                  case "granos":
                    granos.appendChild(insumo);
                    break;
                  case "lúpulos":
                    lupulos.appendChild(insumo);
                    break;
                  case "sales":
                    sales.appendChild(insumo);
                    break;
                  case "levaduras":
                    levaduras.appendChild(insumo);
                    break;
                  case "tapitas":
                    envazado.appendChild(insumo);
                    break;
                  case "azúcares":
                    envazado.appendChild(insumo);
                    break;
                  case "detergentes":
                    limpieza.appendChild(insumo);
                    break;
                  case "esponjas":
                    limpieza.appendChild(insumo);
                    break;
                  case "ácidos":
                    limpieza.appendChild(insumo);
                    break;
                  case "bases":
                    limpieza.appendChild(insumo);
                    break;
                  case "sanitizantes":
                    limpieza.appendChild(insumo);
                    break;
                  default:
                    console.log(`no incluido: ${insumoVal.insumo["tipo_insumo"]}`);
                }
                ins+=1;
              });
              tabla_insumos.appendChild(granos);
              tabla_insumos.appendChild(lupulos);
              tabla_insumos.appendChild(sales);
              tabla_insumos.appendChild(levaduras);
              tabla_insumos.appendChild(envazado);
              tabla_insumos.appendChild(limpieza);
              tablaInsumos.innerHTML = "";
              tablaInsumos.appendChild(tabla_insumos);
            }
          })
        })
      } else {
        tabla_insumos.appendChild(granos);
        tabla_insumos.appendChild(lupulos);
        tabla_insumos.appendChild(sales);
        tabla_insumos.appendChild(levaduras);
        tabla_insumos.appendChild(envazado);
        tabla_insumos.appendChild(limpieza);
        tablaInsumos.innerHTML = "";
        tablaInsumos.appendChild(tabla_insumos);
      }
    } catch (error) {
      console.log(error);
    }
  }
  getinsumosP(id);

}

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
      numprov = proveedores.length-1;
      id =res.created.id;
    } else {
      console.log("hubo un error");
    }
  })
};

function editarProveedor (datos) {
  console.log(JSON.parse(datos));
  console.log(id);
  fetch(`/api/v1/proveedor/${id}`,{
    method: 'PUT',
    body: datos,
    headers: {"Content-type": "application/json"}
  })
  .then(res=> {
    if (res.ok) {
      console.log("el proveedor se actualizo correctamente");
      datos = JSON.parse(datos);
      proveedores[numprov].nombre = datos.nombre;
      proveedores[numprov].telefono = datos.telefono;
      proveedores[numprov].email = datos.email;
      proveedores[numprov].pagina = datos.pagina;
    } else{
      console.log("No fue posible actualizar el proveedor")
    }
    return res.text();
  })
  .then(res=>console.log(res))
};

async function borrarRelacion(idinsumo, idprov) {
  console.log(idinsumo);
  let delinsumo = await fetch(`/api/v1/insumo/${idinsumo}/proveedor/${idprov}`, {
    method: 'DELETE'
  })
  return delinsumo;
};

async function getinsumosProv(idprov) {
  let res = await fetch(`/api/v1/proveedor/${idprov}/insumo`);
  if (!res.ok) {
    console.log("No fue posible acceder a los insumos del proveedor")
    throw new Error(`No fue posible acceder a los insumos del proveedor: ${res.status}`)
  } else {
    let jres = await res.json();
    return jres;
  }
};

async function insumosProv(idprov) {
  let res = await getinsumosProv(idprov);
  let delres = "ok";
  if (res.insumos.length>0){
    for await (const insumo of res.insumos){
      const resin = await borrarRelacion(insumo.insumo_id,idprov)
      if (resin.ok) {
        console.log("Se ha borrado la relacion insumo-proveedor");
        } else{
        console.log("No fue posible borrar la relacion insumo-proveedor")
        delres = "error";
        throw new Error(`No fue posible borrar los insumos del proveedor: ${resin.status}`)
      }
    }
  } else {
    console.log("El proveedor no tiene asociado insumos");
    console.log(delres);
  }
  return delres;
};

async function borrarProveedor(id) {
  insumosProv(id)
  .then(res => {
    if (res=="ok") {
      console.log(res);
      fetch(`/api/v1/proveedor/${id}`,{
        method: 'DELETE',
        body: datos,
        headers: {"Content-type": "application/json"}
      }).then(res => {
        if (res.ok) {
          console.log("Se ha borrado el proveedor");
          console.log(res);
          proveedores.splice(numprov,1);
          console.log(proveedores);
          numprov = 0;
          actualizarPlanilla (numprov);
        } else{
          console.log("No fue posible borrar el proveedor")
        }
        return res.text();
      })
    } else{
      console.log("No fue posible borrar el proveedor")
    }
  })
  .catch(e => {
    console.log('Hubo un problema con su operacion fetch: ' + e.message);
  });
};

borrar.addEventListener("click", () => {
  console.log("click borrar");
  action = 'delete';
  borrar.classList.add('active');
  console.log(action);
  let r = confirm(`Esta seguro que quiere eliminar el proveedor ID: ${id} del sistema?`)
  if (r == true) {
    console.log(`intentando borrar proveedor ID: ${id}`);
    borrar.classList.remove('active');
    borrarProveedor(id);
  } else {
    console.log("Accion cancelada");
    borrar.classList.remove('active');
  }
});

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
  actualizarPlanilla(numprov);
});

guardar.addEventListener("click", async () => {
  console.log("click ok");
  console.log(action);
  datos = {
    nombre: prov_nombre.value,
    telefono : prov_telefono.value,
    email : prov_email.value,
    pagina : prov_pagina.value
  };
  // datosIns = new FormData(formulario);
  console.log(todosInsumos);
  let precios = document.querySelectorAll(".atributo_insumo.precio input");
  for await (const ins of precios){
    try {
      fetch(`/api/v1/insumo/${ins.id}/proveedor/${id}`).then(res => {
        let CB = document.getElementById(`C${ins.id}`);
        let p = ins.value;
        if (p==''){
          p = 0;
        }
        console.log(p);
        let datos = {"precio": p};
        if (!res.ok) {
          console.log("No existe la relacion");
          if(CB.checked){
            fetch(`/api/v1/insumo/${ins.id}/proveedor/${id}`,{
              method: 'POST',
              body: JSON.stringify(datos),
              headers: {"Content-type": "application/json"}
            }).then(res => console.log(res))
          };
        } else {
          console.log("Existe la relacion");
          if(!CB.checked){
            fetch(`/api/v1/insumo/${ins.id}/proveedor/${id}`,{
              method: 'DELETE',
              headers: {"Content-type": "application/json"}
            }).then(res => console.log(res))
          } else {
            fetch(`/api/v1/insumo/${ins.id}/proveedor/${id}`,{
              method: 'PUT',
              body: JSON.stringify(datos),
              headers: {"Content-type": "application/json"}
            }).then(res => console.log(res))
          }
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

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
  cargarInsumo();
});

async function getinsumos () {
  let res = await fetch(`/api/v1//insumo`);
  if (!res.ok) {
    throw new Error(`No fue posible acceder a los insumos de la base de datos: ${res.status}`)
  } else {
    let jres = await res.json();
    return jres;
  }
}

async function mostrarInsumos(idprov) {
  let cabecera = document.getElementById("cabecera_insumos");
  console.log("mostrando insumos");
  let checkList = document.createElement("div");
  checkList.classList.add("atributo_insumo");
  let texto;
  texto = document.createTextNode("Ofrece");
  checkList.appendChild(texto);
  cabecera.appendChild(checkList);
    let tabla_insumos = new DocumentFragment();
    let insumos_proveedor = [];
    let categorias = ["granos", "lúpulos", "sales", "levaduras", "envazado", "limpieza"];
    let granos = new DocumentFragment();
    let lupulos = new DocumentFragment();
    let sales = new DocumentFragment();
    let levaduras = new DocumentFragment();
    let envazado = new DocumentFragment();
    let limpieza = new DocumentFragment();
    categorias.forEach(categoria => {
      let titulo = document.createElement("h3");
      let tit = document.createTextNode(categoria);
      titulo.appendChild(tit);
      switch(categoria) {
        case "granos":
          granos.appendChild(titulo);
          break;
        case "lúpulos":
          lupulos.appendChild(titulo);
          break;
        case "sales":
          sales.appendChild(titulo);
          break;
        case "levaduras":
          levaduras.appendChild(titulo);
          break;
        case "envazado":
          envazado.appendChild(titulo);
          break;
        case "limpieza":
          limpieza.appendChild(titulo);
          break;
      }
    })
    let atributos = ["nombre", "marca", "size", "precio", "ofrece"];
    try {
      let actuales = await getinsumosProv(idprov);
      let todos =  await getinsumos();
      todosInsumos = todos.insumos;
      console.log(todosInsumos);
      for await (const ins of todos.insumos){
        let ofrece = false;
        for await (const i of actuales.insumos){
          if (ins.id == i.insumo_id) {
            ofrece = true;
            ins.precio = i.precio;
          }
        };
        let insumo = document.createElement("div");
        insumo.classList.add("insumo")
        atributos.forEach(atributo => {
          let atributoInsumo = document.createElement("div");
          atributoInsumo.classList.add("atributo_insumo", atributo);
          let texto;
          if (atributo=="size") {
            texto = document.createTextNode(ins.cantidad+" "+ins.unidad);
            atributoInsumo.appendChild(texto);
          } else if (atributo=="ofrece") {
            let check = document.createElement("input");
            check.type = "checkbox";
            check.name = `C${ins.id}`;
            check.id = `C${ins.id}`;
            if (ofrece) {
              check.checked = true;
            }
            atributoInsumo.appendChild(check);
          } else if (atributo=="precio") {
            let input = document.createElement("input");
            input.type = "number";
            input.id = `${ins.id}`;
            if (ofrece) {
              input.value = ins.precio;
            }
            atributoInsumo.appendChild(input);
          } else {
            texto = document.createTextNode(ins[atributo]);
            atributoInsumo.appendChild(texto);
          }
          insumo.appendChild(atributoInsumo);
          switch(ins["tipo_insumo"]) {
            case "granos":
              granos.appendChild(insumo);
              break;
            case "lúpulos":
              lupulos.appendChild(insumo);
              break;
            case "sales":
              sales.appendChild(insumo);
              break;
            case "levaduras":
              levaduras.appendChild(insumo);
              break;
            case "tapitas":
              envazado.appendChild(insumo);
              break;
            case "azúcares":
              envazado.appendChild(insumo);
              break;
            case "detergentes":
              limpieza.appendChild(insumo);
              break;
            case "esponjas":
              limpieza.appendChild(insumo);
              break;
            case "ácidos":
              limpieza.appendChild(insumo);
              break;
            case "bases":
              limpieza.appendChild(insumo);
              break;
            case "sanitizantes":
              limpieza.appendChild(insumo);
              break;
            default:
              console.log(`no incluido: ${ins["tipo_insumo"]}`);
          }
        })
      }
      tabla_insumos.appendChild(granos);
      tabla_insumos.appendChild(lupulos);
      tabla_insumos.appendChild(sales);
      tabla_insumos.appendChild(levaduras);
      tabla_insumos.appendChild(envazado);
      tabla_insumos.appendChild(limpieza);
      tablaInsumos.innerHTML = "";
      tablaInsumos.appendChild(tabla_insumos);
    } catch (error) {
      console.log(error);
    }

        // let insP = await getinsumosProv(idprov);
        // let i =0;
        // if (insP.insumos.length>0){
        //   insP.insumos.forEach(insumo => {
            // getinfoinsumo(insumo.insumo_id, insumo.precio)
            // .then((respuesta) =>{
            //   insumos_proveedor.push(respuesta);
            //   i +=1;
            //   if (i == insP.insumos.length){
            //     console.log(`valores insumos: ${JSON.stringify(insumos_proveedor)}`);
            //     let ins = 0;
            //     insumos_proveedor.forEach(insumoVal => {
    //if (res.insumos.length>0){
    //   for await (const insumo of res.insumos){
    //     const resin = await borrarRelacion(insumo.insumo_id,idprov)
    //     if (resin.ok) {
    //       console.log("Se ha borrado la relacion insumo-proveedor");
    //       } else{
    //       console.log("No fue posible borrar la relacion insumo-proveedor")
    //       delres = "error";
    //       throw new Error(`No fue posible borrar los insumos del proveedor: ${resin.status}`)
    //     }
    //   }
    // } else {
    //   console.log("El proveedor no tiene asociado insumos");
    //   console.log(delres);
    // }
};

function desplegarInfo () {
  if (info_prov.classList.contains("hidden")) {
    info_prov.classList.remove("hidden");
    desplegar.style.transform="rotate(180deg)";
  }
}

editar.addEventListener("click", () => {
  console.log(action);
  console.log("click editar");
  if (!(action == "edit")){
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
    desplegarInfo();
    botones.forEach(element => {
      if (element.classList.contains('numero_prov')||element.classList.contains('flecha')||element.classList.contains('cancel')||element.classList.contains('ok')) {
        element.classList.toggle("hidden");
      }
    })
    mostrarInsumos(id).then(res=>console.log(res));
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
  tablaInsumos.innerHTML = "";
  desplegarInfo();
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
  if (numprov > 0) {
    siguiente.classList.remove('inactive');
    ultimo.classList.remove('inactive');
    console.log(numprov);
    numprov -= 1;
    console.log(numprov);
    console.log(cantprov);
    actualizarPlanilla (numprov);
  }
  if (numprov == 0) {
    anterior.classList.add('inactive');
    primero.classList.add('inactive');

  }
});

siguiente.addEventListener("click", () => {
  console.log("click siguiente");
  if (numprov < cantprov - 1) {
    anterior.classList.remove('inactive');
    primero.classList.remove('inactive');
    console.log(numprov);
    numprov += 1;
    console.log(numprov);
    console.log(cantprov);
    actualizarPlanilla (numprov);
  }
  if (numprov == cantprov-1) {
    siguiente.classList.add('inactive');
    ultimo.classList.add('inactive');
  }
});

ultimo.addEventListener("click", () => {
  console.log("click ultimo");
  anterior.classList.remove('inactive');
  primero.classList.remove('inactive');
  if (numprov < cantprov - 1) {
    numprov = cantprov - 1;
    console.log(numprov);
    console.log(cantprov);
    actualizarPlanilla (numprov);
    siguiente.classList.add('inactive');
    ultimo.classList.add('inactive');
  }
});

primero.addEventListener("click", () => {
  console.log("click primero");
  ultimo.classList.remove('inactive');
  siguiente.classList.remove('inactive');
  if (numprov > 0) {
    numprov = 0;
    console.log(numprov);
    console.log(cantprov);
    actualizarPlanilla (numprov);
    anterior.classList.add('inactive');
    primero.classList.add('inactive');
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


//let editando = false;

  // let valores_insumos = [
  //                 {"nombre": "Pale Ale",
  //                  "marca": "Cargill",
  //                  "cantidad": "25",
  //                  "unidad": "kg",
  //                  "precio": "2000",
  //                  "tipo_insumo": "granos"
  //                 },
  //                 {"nombre": "Pilsener Ale",
  //                 "marca": "Cargill",
  //                 "cantidad": "25",
  //                 "unidad": "kg",
  //                 "precio": "2000",
  //                 "tipo_insumo": "sales"
  //                },
  //               {"nombre": "Pale Ale",
  //                 "marca": "Cargill",
  //                 "cantidad": "25",
  //                 "unidad": "kg",
  //                 "precio": "2000",
  //                 "tipo_insumo": "lupulos"
  //               },
  //               {"nombre": "Pilsener Ale",
  //               "marca": "Cargill",
  //               "cantidad": "25",
  //               "unidad": "kg",
  //               "precio": "2000",
  //               "tipo_insumo": "envasado"
  //                }
  //               ];
