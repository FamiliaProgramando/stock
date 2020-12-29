window.onload = function() {

  let boton = document.getElementById("prov-bt");

  boton.addEventListener("click", event => {
    let nombre = document.getElementById("prov-in").value;

    if (nombre) {
      fetch(`/api/v1/proveedor?nombre=${nombre}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let div = document.getElementById("proveedores");
          div.innerHTML = "";

          let list = document.createElement("ul");
          div.appendChild(list);

          data.proveedores.forEach(proveedor => {
            for (let key in proveedor) {
              let item = document.createElement("li");
              let node = document.createTextNode(proveedor[key]);
              item.appendChild(node);
              div.appendChild(item);
            }
          });
        })
    }

  });

};
