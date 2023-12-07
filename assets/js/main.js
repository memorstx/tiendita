document.addEventListener('DOMContentLoaded', function () {
  const ROOT_CONTAINER_ID = 'root';
  const LISTADO_VENTAS_LINK_ID = 'listadoVentasLink';
  const VER_ARTICULOS_LINK_ID = 'verArticulosLink';
  const AGREGAR_VENTA_LINK_ID = 'agregarVentaLink';

  function cargarYMostrarDatos(url, mostrarFuncion, container, mostrarBotonAgregar = false) {
    fetch(url)
      .then(response => response.json())
      .then(datos => {
        if (datos.length > 0) {
          container.innerHTML = '';
          mostrarFuncion(container, datos, mostrarBotonAgregar);
        } else {
          // Manejar el caso en que no haya datos
        }
      })
      .catch(error => manejarError(error));
  }

  function mostrarVentas(container, datos) {
    const elementosHTML = `
      <div class='articulos'>
        <div class='articulos__header'>
          <div class="articulos__data">ID Venta</div>
          <div class="articulos__data">Fecha</div>
          <div class="articulos__data">Total</div>
        </div>
        ${datos.map(venta => `
          <div class='articulos__row'>
            <div class='articulos__data'>${venta.id_venta}</div>
            <div class='articulos__data'>${venta.fecha}</div>
            <div class='articulos__data'>$${venta.total}</div>
          </div>
        `).join('')}
      </div>`;

    container.innerHTML = elementosHTML;
  }

  function mostrarArticulos(container, datos, mostrarBotonAgregar = false) {
    const elementosHTML = `
      <div class='articulos'>
        
        ${datos.map(articulo => `
          <div class='articulos__row'>
            <span class='articulos__data-code'>
              <span class='articulos__data-barcode'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 24V8H5.28571V24H3ZM6.42857 24V8H8.71429V24H6.42857ZM9.85714 24V8H11V24H9.85714ZM13.2857 24V8H15.5714V24H13.2857ZM16.7143 24V8H20.1429V24H16.7143ZM21.2857 24V8H22.4286V24H21.2857ZM24.7143 24V8H28.1429V24H24.7143Z" fill="#09172F"/>
                </svg>

                ${articulo.codigo}
              </span>  
            </span>
            <div class='articulos__set'>
              <span class='articulos__data'>${articulo.nombre}</span>
              <span class='articulos__data--description'>${articulo.descripcion}</span>
              <div class='articulos__tags'>
                <span class='articulos__tag'>${articulo.marca}</span>
                <span class='articulos__tag'>${articulo.categoria}</span>
              </div>
            </div>
            <span class='articulos__data-precio'>$${articulo.precio}</span>
            <span class='articulos__data-controller'>
              ${mostrarBotonAgregar
                ? `<button class='articulos__button' data-id='${articulo.id_articulo}' onclick='agregarArticuloVenta(${articulo.id_articulo})'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path d="M14.7778 8H8.77783V14H6.77783V8H0.777832V6H6.77783V0H8.77783V6H14.7778V8Z" fill="#149033"/>
                  </svg>
                </button>`
                : `
                  <button class='articulos__button' id='editarArticulo' data-id='${articulo.id_articulo}' onclick='editarArticulo(${articulo.id_articulo})'>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_161_2360)">
                        <path d="M27.7778 0H8.77783C4.35955 0 0.777832 3.58172 0.777832 8V28C0.777832 32.4183 4.35955 36 8.77783 36H27.7778C32.1961 36 35.7778 32.4183 35.7778 28V8C35.7778 3.58172 32.1961 0 27.7778 0Z" fill="#EFF3FF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5349 11.0396L21.236 12.3386L23.4393 14.5419L24.7382 13.2429L22.5349 11.0396ZM24.8059 13.1752C24.8059 13.1752 24.8059 13.1752 24.8059 13.1752ZM22.0251 15.9561L19.8217 13.7528L11.7778 21.7967V24H13.9812L22.0251 15.9561ZM21.1884 9.55769C21.5457 9.20044 22.0301 9 22.5349 9C23.0398 9 23.5242 9.20044 23.8814 9.55769L26.2201 11.8964C26.5774 12.2536 26.7778 12.7381 26.7778 13.2429C26.7778 13.7479 26.5774 14.2322 26.2202 14.5894C26.2202 14.5894 26.2202 14.5894 26.2202 14.5894L24.1465 16.6632L15.3675 25.4421C15.0105 25.7992 14.5263 25.9998 14.0214 26H11.6822C11.1772 26 10.6928 25.7993 10.3356 25.4422C9.97853 25.0851 9.77783 24.6008 9.77783 24.0956V21.7569C9.77804 21.2522 9.97851 20.7675 10.3357 20.4104C10.3358 20.4103 10.3357 10.3358 20.4104L21.1884 9.55769Z" fill="#1B53B7"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_161_2360">
                          <rect width="36" height="36" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>              
                  </button>
                  <button class='articulos__button' data-id='${articulo.id_articulo}' onclick='eliminarArticulo(${articulo.id_articulo})'>
                    <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.777832" width="34.2222" height="36" rx="8" fill="#EFF3FF"/>
                      <path d="M13.4445 26C12.9556 26 12.5372 25.8261 12.1894 25.4782C11.8415 25.1304 11.6673 24.7117 11.6667 24.2222V12.6667H10.7778V10.8889H15.2223V10H20.5556V10.8889H25.0001V12.6667H24.1112V24.2222C24.1112 24.7111 23.9372 25.1298 23.5894 25.4782C23.2415 25.8267 22.8229 26.0006 22.3334 26H13.4445ZM22.3334 12.6667H13.4445V24.2222H22.3334V12.6667ZM15.2223 22.4444H17.0001V14.4444H15.2223V22.4444ZM18.7778 22.4444H20.5556V14.4444H18.7778V22.4444Z" fill="#E91F4F"/>
                    </svg>              
                  </button>
                `}
            </span>
          </div>
        `).join('')}
      </div>`;

    container.innerHTML = elementosHTML;
  }

  document.querySelectorAll('.listaArticulos').forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
      cargarYMostrarDatos('./listado_articulos.php', mostrarArticulos, document.getElementById(ROOT_CONTAINER_ID), false);
      event.preventDefault();
      document.getElementById("header").textContent = "Lista de artículos";
      
    });
  });

  document.querySelectorAll('.nuevaVentaLink').forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
      cargarYMostrarDatos('./listado_articulos.php', mostrarArticulos, document.getElementById(ROOT_CONTAINER_ID), true);
      event.preventDefault();
      document.getElementById("header").textContent = "Nueva venta";

  
    });
  });

  cargarYMostrarDatos('./listado_ventas.php', mostrarVentas, document.getElementById(ROOT_CONTAINER_ID));

  
});
