<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900;9..40,1000&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/reset.css">
  <link rel="stylesheet" href="assets/css/tiendita.css">

  <!-- Primary Meta Tags -->

  <meta name="title" content="La tiendita de la esquina" />
  <meta name="description" content="Sistema web intuitivo para la venta de artículos en general, con funciones que incluyen la creación de nuevas ventas, el registro detallado de las mismas y la visualización de las ventas realizadas." />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="localhost/" />
  <meta property="og:title" content="Sistema web intuitivo para la venta de artículos en general, con funciones que incluyen la creación de nuevas ventas, el registro detallado de las mismas y la visualización de las ventas realizadas." />
  <meta property="og:description" content="" />
  <meta property="og:image" content="localhost/image.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="localhost/image.png" />
  <meta property="twitter:title" content="Sistema web intuitivo para la venta de artículos en general, con funciones que incluyen la creación de nuevas ventas, el registro detallado de las mismas y la visualización de las ventas realizadas." />
  <meta property="twitter:description" content="Sistema web intuitivo para la venta de artículos en general, con funciones que incluyen la creación de nuevas ventas, el registro detallado de las mismas y la visualización de las ventas realizadas." />
  <meta property="twitter:image" content="localhost/image.png" />

  <script src="assets/js/main.js" defer></script>
  
  <title>Tiendita de la esquina</title>


  <link rel="apple-touch-icon" sizes="180x180" href="./assets/img/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="./assets/img/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="./assets/img/favicon/favicon-16x16.png">
  
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">
</head>
<body>
  
  <main class="main">
    <?php include 'includes/sidebar.php'; ?>
    <?php include 'includes/header.php'; ?>
    <section class="section">
      <div class="main__container" id="root">

        <div class="message">
          <h2 class="message__h2">No hay registro de ventas</h2>
          <p class="message__p">Agrega nuevas ventas, descubre productos y gestiona a tus clientes.</p>
          <div class="cards">
            <div class="cards__element">
              <h3 class="cards__h3">Ventas</h3>
              <p class="cards__p">Registra nuevas ventas, verifica detalles y mantén un control total y organizado.</p>
              <button class="cards__button nuevaVentaLink" >Agregar venta</button>
            </div>
            <div class="cards__element">
              <h3 class="cards__h3">Artículos</h3>
              <p class="cards__p">Agrega, edita o elimina artículos para mantener tu inventario siempre actualizado.</p>
              <button class="cards__button listaArticulos" id="verArticulosLink">Ver artículos</button>
            </div>
            <div class="cards__element">
              <h3 class="cards__h3">Clientes</h3>
              <p class="cards__p">Añade, modifica o borra clientes para un seguimiento eficiente y personalizado</p>
              <button class="cards__button button" disabled>Ver clientes</button>
            </div>
          </div>
        </div>
       
      </div>
      

      
      <div id="editarModal" class="modal">
          <div class="modal__content">
            <h3 class="message__h2">Editar artículo</h3>            
            <!-- <form class="modal__form"> -->
              <input class="modal__hidden" type="text" id="modalId" hidden>
              <div class="modal__element">
                <!-- <label class="modal__label" for="modalCodigo">Código de barras</label>
                <input class="modal__input" type="text" id="modalCodigo" placeholder="Codigo de barras"> -->
              </div>

              <div class="modal__element">
                <label class="modal__label" for="modalNombre">Nombre del artículo:</label>
                <input class="modal__input" type="text" id="modalNombre" placeholder="Nombre del artículo">
              </div>

              <div class="modal__element">
                <label class="modal__label" for="modalDescripcion">Descripción del artículo</label>
                <textarea class="modal__input textarea" name="descripcion" id="modalDescripcion" placeholder="Descripción del artículo"></textarea> 
              </div>

              <div class="modal__element">
                <label class="modal__label" for="modalMarca">Marca</label>
                <input class="modal__input" name="marca" type="text" id="modalMarca" placeholder="Marca">
              </div>

              <!-- <div class="modal__element">
                <label class="modal__label" for="modalCategoria">Categoría</label>
                <input class="modal__input" type="text" id="modalCategoria" placeholder="Categoría">
              </div> -->

              <div class="modal__element">
                <label class="modal__label" for="modalPrecio">Precio</label>
                <input class="modal__input precio" type="text" id="modalPrecio" inputmode="numeric" placeholder="Precio" oninput="formatoPrecio(this)">
              </div>
              
              <div class="modal__element">
                <button id="guardarCambiosBtn">Guardar Cambios</button>
              </div>
            <!-- </form> -->
          </div>
        </div>
      
   </section>
  </main>

  <script src="./assets/js/articulos.js"></script>
  <script src="./assets/js/ticket.js"></script>
  <script>

    

  </script>
</body>

</html>


<!-- <h3 class="articulos">Folio de venta #00${currentTicketId}</h3> -->

          <!-- <div class="ticket">
            <label class="ticket__label" for="cliente">Cliente:</label>
            <select class="modal__input" id="modalCodigo">
              <option>Selecciona un cliente</option>
              <option>Guillermo González</option>
            </select>
          </div> -->

          <!-- <div class="ticket__detalles">
            <div class="ticket__table">
              <div class="ticket__body">
              


              <div class="ticket__row">
                  <div class="ticket__data-contador">
                    <button data-id="counter_${currentTicketId}" class="ticket__substract">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="2" viewBox="0 0 14 2" fill="none">
                        <path d="M14 2H8H6H0V0H6H8H14V2Z" fill="#E91F4F"></path>
                      </svg>
                    </button>
                    <input class="ticket__contador" type="text" id="counter_${currentTicketId}" value="0" readonly="">
                    <button data-id="counter_${currentTicketId}" class="ticket__add">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#149033"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="ticket__data">${datos[0].nombre}</div>
                  <div class="ticket__data">${datos[0].precio}</div>
                  <div class="ticket__data">${datos[0].id_articulo * 2}</div>
                  <div class="ticket__data">
                    <button class="ticket__button" data-id="${currentTicketId}" onclick="borrarArticulo(${currentTicketId})">Borrar</button>
                  </div>
                </div>


                
              </div>
            </div>
          </div> -->

                