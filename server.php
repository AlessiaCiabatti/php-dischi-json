<?php
// richiamo file json e lo legge come stringa e lo salvo in variabile
$json_str = file_get_contents('dischi.json');
// var_dump($json_str);

// adesso è una stringa e ora lo vogliamo trasformare in un oggetto PHP
$disc_list = json_decode($json_str);
// var_dump($disc_list);

/*

LOGICA PHP

*/

// trasformo il file php come se fosse un file json
header('Content-Type: application/json');
// devo eliminare var_dump prima di modificare un header altrimenti da un Warning, perchè gli stavo già passando dati

//stampo lista
echo json_encode($disc_list);

?>