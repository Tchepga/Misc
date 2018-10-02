<?php

echo " La ressource demandée n'existe pas. Code d'erreur : 404";
$request_uri = explode('?', $_SERVER['REQUEST_URI'], 2);
echo "\nroute :" .$request_uri[0];
?>