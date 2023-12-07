

<?php
setlocale(LC_TIME, 'es_ES.UTF-8'); 
date_default_timezone_set('America/Mexico_City');

$fechaFormateada = strftime('%e de %B de %Y');

echo '
<header class="header">
  <h1 class="header__h1" id="header">Inicio</h1>
  <span class="header__date">'.$fechaFormateada.'</span>
</header>
';


?>
