<?php

require "DBBlackbox.php";

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["msg"];
$message_arr=[$name, $email, $message];

$msg = insert($message_arr);

header('Location: index.html');

?>