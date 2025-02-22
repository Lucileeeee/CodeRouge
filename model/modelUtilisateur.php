<?php
include './env.php';
include './util/BDD.php';
include './util/function.php';
/*idrole = 3;*/


$bdd = connexion();

try{
    $req = $bdd->prepare('SELECT id_util, nom_util, prenom_util, mail_util, mdp_util FROM utilisateur');
    $req->execute();
    $data = $req->fetchAll(PDO::FETCH_ASSOC);

    http_response_code(200);
    echo json_encode($data);
    return;
}catch(EXCEPTION $error){
    echo $error->getMessage();
    return;
}