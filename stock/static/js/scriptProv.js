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
let primero = document.querySelectorAll(".numero_prov")[0];
let segundo = document.querySelectorAll(".numero_prov")[1];
let tercero = document.querySelectorAll(".numero_prov")[2];
let inputs = document.querySelectorAll("#proveedores_form input");
let botones = document.querySelectorAll('.boton');
console.log(inputs[0]);

let end = false;
let url;
let email;
let editando = false;

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
    end = true;
    url = prov_pagina.value;
    email = prov_email.value;
  })
};

/*} catch {
console.log("el objeto no existe, pertenece a la pagina proveedores");
}
*/

window.addEventListener('load', cargarProveedores);
prov_pagina.addEventListener("click", () => {
  if (prov_email.classList.contains('link')) {
    let win = window.open(url, '_blank');
    win.focus()
  }
});

prov_email.addEventListener("click", () => {
  if (prov_email.classList.contains('link')) {
    let win = window.open(`mailto:${email}?Subject=Consulta%20insumos`, '_blank');
    win.focus()
  }
});


editar.addEventListener("click", () => {
  console.log(editando);

  if (!editando){
    console.log("click editar");
    editando = true;

    inputs.forEach(element => {
      element.removeAttribute('readonly');
      element.classList.remove('no_editable');
      if (element.classList.contains('link')){
        element.classList.remove('link');
        element.classList.add('no_link');
      }
    })

    botones.forEach(element => {

      if (element.classList.contains('numero_prov')||element.classList.contains('flecha')||element.classList.contains('cancel')||element.classList.contains('ok')) {
        element.classList.toggle("hidden");
      }

      if (element.classList.contains('cancel')) {
        element.addEventListener("click", () => {
          console.log("click cancelar");
          editando = false;
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
        })

        } else if (element.classList.contains('ok')) {
          element.addEventListener("click", () => {
            console.log("click ok");
            editando = false;
            /* Agregar edicion de la base de datos */

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

          })
      }
    })

  }
});

borrar.addEventListener("click", () => {
  console.log("click borrar");
  confirm("Esta seguro que quiere eliminar este proveedor del sistema?")
});

agregar.addEventListener("click", () => {
  console.log("click agregar");

  inputs.forEach(element => {
    element.removeAttribute('readonly');
    element.classList.remove('no_editable');
    element.value = '';
    if (element.classList.contains('link')){
      element.classList.remove('link');
      element.classList.add('no_link');
    }
  })

  botones.forEach(element => {
    if (element.classList.contains('numero_prov')||element.classList.contains('flecha')||element.classList.contains('cancel')||element.classList.contains('ok')) {
      element.classList.toggle("hidden");
      if (element.classList.contains('cancel')) {
        element.addEventListener("click", () => {
          console.log("click cancelar");
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
        })
      } else if (element.classList.contains('ok')) {
        element.addEventListener("click", () => {
          console.log("click ok");
          /* Agregar edicion de la base de datos */
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
        })
      }
    }
  })

});

anterior.addEventListener("click", () => {
  console.log("click anterior");
});

siguiente.addEventListener("click", () => {
  console.log("click siguiente");
});


primero.addEventListener("click", () => {
  console.log("click 1");

});

segundo.addEventListener("click", () => {
  console.log("click 2");
});

tercero.addEventListener("click", () => {
  console.log("click 3");
});
