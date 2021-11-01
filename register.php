<?php
  include 'secrets.php';

  if ($_POST) {
     function getCaptcha($SecretKey) {
       $path = "https://www.google.com/recaptcha/api/siteverify?secret=".SECRET_KEY."&response=".$SecretKey;
       $response = file_get_contents($path, true);
       return json_decode($response);
     }

     $googleResponse = getCaptcha($_POST["g-recaptcha-response"]);
     $name = $_POST["name"];
     $adults = $_POST["adults"];
     $children = $_POST["children"];
     $menus = $_POST["menus"];
     $cocktail = $_POST["cocktail"] == 'cocktail' ? "present" : "non present";
     $diner = $_POST["diner"] == 'diner' ? "present" : "non present";
     $return = $_POST["return"] == 'return' ? "present" : "non present";
     $comment = $_POST["comment"];
     if ($googleResponse->score >= 0.5) {
       $message = "Nouvel enregistrement!\n";
       $message .= "Nom: {$name}\n";
       $message .= "Nombre d'adultes: {$adults}\n";
       $message .= "Nombre d'enfants: {$children}\n";
       $message .= "Menus specifiques: {$menus}\n";
       $message .= "Cockail: {$cocktail}\n";
       $message .= "Diner: {$diner}\n";
       $message .= "Retour de noces: {$return}\n";
       $message .= "Commentaire: {$comment}\n";
       //mail("mariage@gwenetmat.fr", "Mariage - Enregistrement", $message);
       //echo $message."<br/>";
       echo "Email sent!";
     } else {
       echo "Oups, une erreur s'est produite. Veuillez-nous contacter directement a mariage@gwenetmat.fr ou par telephone.";
     }
  }
?>