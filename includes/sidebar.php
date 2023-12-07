
<aside class="sidebar">
    <a href="#" id="logoLink">
        <img class="sidebar__logo" src="./assets/img/logo_la_tiendita_de_la_esquina.svg" alt="Logo de la tiendita de la esquina">
    </a>
    <ul class="sidebar__menu">
        <li class="sidebar__li">
            <a class="sidebar__a nuevaVentaLink" href="#" id="agregarVentaLink">
               <img class="sidebar__icon" src="./assets/img/icons/icon-new-sale.svg" alt="Ícono de nueva venta">
                <span>Nueva venta</span>
            </a>
        </li>
        <li class="sidebar__li">
            <a class="sidebar__a" href="#" id="listadoVentasLinksidebar">
                <img class="sidebar__icon" src="./assets/img/icons/icon-list-sales.svg" alt="Ícono de nueva venta">
                <span>Listado de Ventas</span>
            </a>
        </li>

        <li class="sidebar__li">
            <a class="sidebar__a listaArticulos" href="#" id="verArticulosLink">
                <img class="sidebar__icon" src="./assets/img/icons/icon-list-sales.svg" alt="Ícono de listado de artículos">
                <span>Listado de Artículos</span>
            </a>
        </li>
    </ul>
</aside>


<script>
document.getElementById('logoLink').addEventListener('click', function() {

    location.reload();
});

document.getElementById('listadoVentasLinksidebar').addEventListener('click',function() {
    location.reload();
});
</script>