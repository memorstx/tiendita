const modal = document.querySelector("#editarModal");
const guardarCambiosBtn = document.getElementById('guardarCambiosBtn');

function editarArticulo(idArticulo) {
  const boton = document.querySelector(`button[data-id="${idArticulo}"]`);
  const dataId = boton.dataset.id;
  abrirModalParaEditar(dataId);
  
}

function abrirModalParaEditar(dataId) {
  if (!dataId) {
    console.error('ID del artículo no definido');
    return;
  }
  // console.log(dataId);
 
  fetch(`./php/models/Articulo.php?idArticulo=${dataId}`)
    .then(response => response.json())
    .then(datos => {
      // console.log(datos);
      document.getElementById('modalId').value = datos[0].id_articulo;
      document.getElementById('modalNombre').value = datos[0].nombre;
      document.getElementById('modalDescripcion').value = datos[0].descripcion;
      document.getElementById('modalPrecio').value = datos[0].precio;
      formatoPrecio(document.getElementById('modalPrecio'));
    })
    .catch(error => {
      console.error('Error al obtener detalles del artículo:', error);
    });

  modal.style.display = 'block';
}

window.onclick = function (event) {
  const modal = document.getElementById('editarModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};


guardarCambiosBtn.addEventListener('click', function () {
  
  const idArticulo = obtenerIdArticulo();
const nombre = document.getElementById('modalNombre').value;
const descripcion = document.getElementById('modalDescripcion').value;
const marca = document.getElementById('modalMarca').value; 
const precioNumerico = obtenerPrecioNumerico();
console.log(marca);
fetch('./php/models/Actualizar_articulo.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: `idArticulo=${idArticulo}&nombre=${nombre}&descripcion=${descripcion}&marca=${marca}&precio=${precioNumerico}`,
})
  .then(response => response.json())
  .then(data => {
    alert("Datos actualizados correctamente", marca);
    location.reload();
  })
  .catch(error => {
    console.error('Error al enviar la solicitud:', error);
  });

});


function obtenerIdArticulo() {
  return document.getElementById('modalId').value;
}

function obtenerPrecioNumerico() {
  
  const precioConSigno = document.getElementById('modalPrecio').value;
  const precioSinSigno = precioConSigno.replace(/[^\d.]/g, ''); 
  return parseFloat(precioSinSigno);
}

function formatoPrecio(input) {
  let valor = input.value;
  
  valor = valor.replace(/[^0-9.]/g, '');
  valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  input.value = valor ? `$${valor}` : '';
}

function cerrarModal() {
  const modal = document.getElementById('editarModal');
  modal.style.display = 'none';
}