<?php
include '../env.php';
include '../util/BDD.php';
include '../util/function.php';
include 'model_util.php';

//METHOD : GET
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-AllowHeaders, Authorization, X-Requested-With");

//VERIFIER QUE LA METHOD EST LA BONNE
if($_SERVER['REQUEST_METHOD'] != "GET"){
    http_response_code(405);
    echo json_encode(["message"=>"Méthode non autorisée","code HTTP"=>405]);
    return;
}

//RECUPERER LA LISTE DES USERS EN BDD
$bdd = connexion();
//var_dump(getUtilisateurs($bdd)) ;
//todo if getUtilisateurs($bdd) return $data -> 
// else return error 

$data =  getUtilByMail($mail,$bdd);
if(!empty($data[0])){    //5.4 Réponse vide ou pas ?
    http_response_code(400);
    var_dump($data);
    echo json_encode(["message"=>"L'email est déjà utilisé","code HTTP"=>400]);
    return;
} 
http_response_code(200);
echo 'echo de data : ' . json_encode($data);
return;

/* try{
    $req = $bdd->prepare('SELECT id_util, nom_util, prenom_util, mail_util, mdp_util FROM utilisateur');
    $req->execute();
    $data = $req->fetchAll(PDO::FETCH_ASSOC);

    http_response_code(200);
    echo json_encode($data);
    return;
}catch(EXCEPTION $error){
    echo $error->getMessage();
    return;
} */