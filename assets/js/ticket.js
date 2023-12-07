const ROOT_CONTAINER_ID = 'root';
let articulosArray = [];
agregarEventosBotones();
let total = 0;

function agregarArticuloVenta(idArticulo) {
  const boton = document.querySelector(`button[data-id="${idArticulo}"]`);
  const dataId = boton.dataset.id;

  fetch(`./php/models/Articulo.php?idArticulo=${dataId}`)
    .then(response => response.json())
    .then(datos => {
      
      const ticketContainer = document.querySelector('.articulos__ticket');

      if (!ticketContainer) {
        crearNuevoTicket();
        
        agregarEventosBotones();
      }

      
      const ticketBody = document.querySelector('.articulos__ticket .ticket__body');

      const existingItem = document.querySelector(`.ticket__data[data-id="${idArticulo}"]`);

      if (existingItem) {
        actualizarContador(existingItem);
      } else {
        agregarNuevoItem(ticketBody, datos, idArticulo);
      }

      actualizarInterfazUsuario('Artículo agregado al ticket');
      
      
      let cantidadArticulo = "cantidad" + idArticulo;
      let precioArticulo = "precio" + idArticulo;
      let importeArticulo = "importe" + idArticulo;

      const cantidadElement = document.getElementById(cantidadArticulo);
      const precioElement = document.getElementById(precioArticulo);
      const importeElement = document.getElementById(importeArticulo);

      let cantidad = parseInt(cantidadElement.textContent, 10);
      let precio = parseInt(precioElement.textContent, 10);
      let importe = cantidad * precio;
      importeElement.textContent = importe;
      

      function calcularSubtotalIVA() {
        let totalImporte = document.getElementById("totalImporte");
        let ivaElement = document.getElementById("iva");
        let subtotalElement = document.getElementById("subtotal");
        const importeElements = document.querySelectorAll('.importe');
        
        const importesArray = Array.from(importeElements);
        
        const subtotal = importesArray.reduce((sum, importeElement) => {
          const importe = parseFloat(importeElement.textContent);
          return sum + importe;
        }, 0);
        
        const iva = subtotal * 0.16;
        
        total = subtotal + iva;
        
        subtotalElement.textContent = "Subtotal: $"+ subtotal.toFixed(2)
        ivaElement.textContent ="IVA: $"+ iva.toFixed(2);
        totalImporte.textContent ="Total: $"+ total.toFixed(2);
        totalImporte.dataset.id = total.toFixed(2);

        const calcularBtn = document.getElementById('calcularBtn');
        calcularBtn.textContent = 'Registrar Venta';
        calcularBtn.removeEventListener('click', calcularSubtotalIVA);
        calcularBtn.addEventListener('click', guardarVenta);
      }
      const calcularBtn = document.getElementById('calcularBtn');
      calcularBtn.addEventListener('click', function() {
        calcularSubtotalIVA();
      });
      

    })
    .catch(error => {
      console.error('Error al obtener detalles del artículo:', error);
    });

    
}






function crearNuevoTicket() {
  
  cargarClientes();

function cargarClientes() {
  
  fetch('./php/models/ObtenerClientes.php')
    .then(response => response.json())
    .then(clientes => {
      
      actualizarSelectClientes(clientes);
    })
    .catch(error => {
      console.error('Error al obtener la lista de clientes:', error);
    });
}

function actualizarSelectClientes(clientes) {
  const selectClientes = document.getElementById('modalCodigo');

  
  selectClientes.innerHTML = '<option value="">Selecciona un cliente</option>';

  clientes.forEach(cliente => {
    const option = document.createElement('option');
    option.value = cliente.id; 
    option.textContent = cliente.nombre+" "+cliente.apellidos; 
    selectClientes.appendChild(option);
  });
}



  const rootContainer = document.getElementById(ROOT_CONTAINER_ID);
  const nuevoTicketHTML = `
    <div class="articulos__ticket">
      <div class="ticket__top">
        <h3 class="articulos">Folio de venta #001</h3>
        <div class="ticket">
          <label class="ticket__label" for="cliente">Cliente:</label>
          <select class="modal__input" id="modalCodigo" required>
            <option>Selecciona un cliente</option>
            <option>Guillermo González</option>
          </select>
        </div>
        <div class="ticket__detalles">
          <div class="ticket__table">
            <div class="ticket__body">
              <!-- Contenido del ticket -->
            </div>
          </div>
        </div>
      </div>

      <div class="ticket__bottom">
        <div class='ticket__footer'>
          <h4 class='ticket__h4' id="subtotal">Subtotal: 0 </h4>
          <h4 class='ticket__h4' id="iva">IVA: 0 </h4>
          <h4 class='ticket__h4' id="totalImporte">Total: 0 </h4>
          <button class='ticket__button-cta' id="calcularBtn">Calcular</button>
        </div>
      </div>
    </div>
  `;
  const nuevoTicketElement = document.createElement('div');
  nuevoTicketElement.innerHTML = nuevoTicketHTML;
  rootContainer.appendChild(nuevoTicketElement);
}

function agregarNuevoItem(ticketBody, datos, idArticulo) {
  const nuevoItemHTML = `
    <div class="ticket__row">
      <div class="ticket__data" data-id="${idArticulo}">
        <div class="ticket__contador" id="cantidad${idArticulo}" data-id="${idArticulo}">1</div>
        
      </div>
      <div class="ticket__data">${datos[0].nombre}</div>
      <div class="ticket__data" id="precio${idArticulo}">${datos[0].precio}</div>
      <div class="ticket__data importe" id="importe${idArticulo}">${datos[0].precio}</div>
      <div class="ticket__data">
        <button class="ticket__substract" id="quitar${idArticulo}" data-id="${idArticulo}" onclick="restarContador(this)">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
          <path d="M3.4445 16C2.95561 16 2.53724 15.8261 2.18939 15.4782C1.84154 15.1304 1.66731 14.7117 1.66672 14.2222V2.66667H0.777832V0.888889H5.22228V0H10.5556V0.888889H15.0001V2.66667H14.1112V14.2222C14.1112 14.7111 13.9372 15.1298 13.5894 15.4782C13.2415 15.8267 12.8229 16.0006 12.3334 16H3.4445ZM12.3334 2.66667H3.4445V14.2222H12.3334V2.66667ZM5.22228 12.4444H7.00005V4.44444H5.22228V12.4444ZM8.77783 12.4444H10.5556V4.44444H8.77783V12.4444Z" fill="#E91F4F"/>
        </svg>
        </button>
      </div>
    </div>
  `;
  ticketBody.innerHTML += nuevoItemHTML;
}


function actualizarContador(existingItem) {
  const contadorElement = existingItem.querySelector('.ticket__contador');
  
  let currentValue = parseInt(contadorElement.textContent, 10);
  currentValue += 1;
  contadorElement.textContent = currentValue;
}

function actualizarInterfazUsuario(mensaje) {
  // Aquí va la lógica para mostrar mensajes o actualizar la interfaz de usuario
  // console.log(mensaje);
}


function agregarEventosBotones() {
  const rootContainer = document.getElementById(ROOT_CONTAINER_ID);

  // Agregar un evento delegado para los clics en los botones de restar
  rootContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('ticket__substract')) {
      restarContador(event.target);
    }
  });
}


function sumarContador(target) {
  
  const contadorInput = target.previousElementSibling;
  let currentValue = parseInt(contadorInput.value, 10);
  currentValue += 1;
  contadorInput.value = currentValue;
}

let restarContadorBloqueado = false;

function restarContador(target) {
  if (restarContadorBloqueado) {
    return;
  }

  const dataId = target.dataset.id;
  const ticketDataElement = document.querySelector(`.ticket__data[data-id="${dataId}"]`);
  const contadorElement = ticketDataElement.querySelector('.ticket__contador');


  if (contadorElement) {
    let currentValue = parseInt(contadorElement.textContent, 10);

    if (currentValue > 0) {
      
      currentValue -= 1;
      contadorElement.textContent = currentValue;

      
      if (currentValue === 0) {
        ticketDataElement.closest('.ticket__row').remove();
      }

      target.disabled = true;

      setTimeout(() => {
        target.disabled = false;
      }, 500); 
    }
  }
}


function guardarVenta() {
  // Obtener los datos necesarios para la venta (puedes ajustar según tus necesidades)
  const cliente = document.getElementById('modalCodigo').value;
  const subtotal = parseFloat(document.getElementById('subtotal').textContent);
  const iva = subtotal * 0.16;
  let total = subtotal + iva;

  if (!cliente || cliente === 'Selecciona un cliente') {
    alert('Por favor, selecciona un cliente');
    const modalCodigo = document.getElementById("modalCodigo");
    modalCodigo.classList.add("warning");
    return;
} else {
    const modalCodigo = document.getElementById("modalCodigo");
    modalCodigo.classList.remove("warning");
}
  
  const fecha = obtenerFecha();
  total = document.getElementById("totalImporte").dataset.id
  
console.log("eltotales:",total);
  function obtenerFecha() {
    const fecha = new Date();
    return fecha.toISOString(); 
  }


  fetch('./php/models/Venta.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded', 
    },
    body: `cliente=${cliente}&fecha=${fecha}&total=${total}`, 
  })
  .then(response => {
    if (response.ok) {
      alert('Venta guardada exitosamente. ¡Éxito!', total);
      location.reload();
      return response.json();
      
    } else {
      console.error('Error en la solicitud:', response.status, response.statusText);
      throw new Error('Error en la solicitud');
    }
  })
  .then(data => {
    console.log('Venta guardada exitosamente:', data);
    
  })
  .catch(error => {
    console.error('Error al guardar la venta:', error);
  });
}
