<?php
include '../env.php';
include '../util/BDD.php';
include '../util/function.php';
include 'model_util.php';

//!METHOD : POST
// Accès depuis n'importe quel site ou appareil (*) //same (même domain), none (personne)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");// Format des données envoyées
header("Access-Control-Allow-Methods: POST");// Méthode autorisée, ici POST, mais ça peut être GET, PUT ou DELETE
header("Access-Control-Allow-Headers: Content-Type, Access-Control-AllowHeaders, Authorization, X-Requested-With");// Entêtes autorisées

if($_SERVER['REQUEST_METHOD'] != "POST"){//VERIFIER QUE LA METHOD EST LA BONNE
    http_response_code(405);
    echo json_encode(["message"=>"Méthode non autorisée, va manger tes morts","code HTTP"=>405]);
    return;
}

$data = file_get_contents('php://input');//RECUPERATION DE DONNEE 
$data = json_decode($data);//DECODER LE JSON

if(empty($data->prenom) || empty($data->nom) || empty($data->mail) || empty($data->mdp)){
    http_response_code(400);
    echo json_encode(["message"=>"Les données ne sont pas valides","code HTTP"=>400]);
    return;
}
if(!filter_var($data->mail, FILTER_VALIDATE_EMAIL)){
    http_response_code(400);
    echo json_encode(["message"=>"L'email n'est pas au bon format","code HTTP"=>400]);
    return;
}

$prenom = sanitize($data->prenom);
$nom = sanitize($data->nom);
$mail = sanitize($data->mail);
$mdp = sanitize($data->mdp);

$mdp = password_hash($mdp,PASSWORD_BCRYPT);
$bdd = connexion();

//try{
$data =  getUtilByMail($mail,$bdd);
if(!empty($data[0])){    //5.4 Réponse vide ou pas ?
    http_response_code(400);
    echo json_encode(["message"=>"L'email est déjà utilisé","code HTTP"=>400]);
    return;
}
$ajouter = addUtilisateur($nom,$prenom,$mail,$mdp,$bdd);
if ($ajouter == false){
    http_response_code(500);
    echo json_encode(["message" => "Un problème est survenu lors de
    l'enregistrement"]);
    return;
}
http_response_code(200);
echo json_encode(["message" => "Enregistrement effecuté avec succès"]);
return; 
/*}catch(EXCEPTION $error){
    echo $error->getMessage();
    return;
}*/


//FORMAT ATTENTU POUR $data
/*
    {
        'prenom':prenom,
        'nom':nom,
        'mail':mail,
        'mdp':mdp
    }
*/