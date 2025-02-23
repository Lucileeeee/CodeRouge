<?php
include '../env.php';
include '../util/BDD.php';
include '../util/function.php';
include 'model_util.php';
//! CONNEXION, PAS AJOUT
session_start();
//!METHOD : POST
header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-AllowHeaders, Authorization, X-Requested-With");

if($_SERVER['REQUEST_METHOD'] != "POST"){
    http_response_code(405);
    echo json_encode(["message"=>"Méthode non autorisée, va manger tes morts","code HTTP"=>405]);
    return;
}

$data = file_get_contents('php://input');
$data = json_decode($data);

if(empty($data->mail) || empty($data->mdp)){
    http_response_code(400);
    echo json_encode(["message"=>"Les données ne sont pas valides","code HTTP"=>400]);
    return;
}
if(!filter_var($data->mail, FILTER_VALIDATE_EMAIL)){
    http_response_code(400);
    echo json_encode(["message"=>"L'email n'est pas au bon format","code HTTP"=>400]);
    return;
}

$mail = sanitize($data->mail);
$mdp = sanitize($data->mdp);

$bdd = connexion();

//?verifier que l'email correspond à un compte en Bdd
$data =  getUtilByMail($mail,$bdd);
if(empty($data[0])){    //5.4 Réponse vide ou pas ?
    http_response_code(400);
    echo json_encode(["message"=>"Personne de connu sous cet email","codeHTTP"=>400]);
    return;
}

$result = getUtilMdpByMail($mail ,$bdd);
if (password_verify($mdp, $result['mdp_util']) && $mail === $result['mail_util']) {
    echo json_encode(["message"=>"Password is valid! ET MAIL OK","codeHTTP"=>200]);
    $_SESSION['mail'] = $mail;
    return;
} else {
    echo json_encode(["message"=>"BOUUUUUH Invalid password!","codeHTTP"=>400]);
    return;
}


//todo (pas besoin de $data et $result)



