<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];

$token = "5284202738:AAHwxuxDkY5hxxo__sB4Ce_JGK_iRQOB3-c";
$chat_id = "-778470917";
$actual_link = $_SERVER['HTTP_REFERER'];

$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Количество: ' => $poduct_quantity,
);


foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$arrContextOptions=array(
  "ssl"=>array(
      "verify_peer"=>false,
      "verify_peer_name"=>false,
  ),
); 

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thanks.html');
} 
else {
  echo "Error";
}
?>