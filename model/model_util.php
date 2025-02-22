<?php

function getUtilisateurs($bdd)/* :PDO | string */{
    try{
        $req = $bdd->prepare('SELECT id_util, nom_util, prenom_util, mail_util, mdp_util FROM utilisateur');
        $req->execute();
        $data = $req->fetchAll(PDO::FETCH_ASSOC);
        return $data;
    }catch(EXCEPTION $error){
        return $error->getMessage(); 
    }
}



function getUtilByMail($mail,$bdd)/* :PDO | string */{
    try{
        $req = $bdd->prepare('SELECT mail_util FROM utilisateur WHERE mail_util = ?');
        $req->bindParam(1,$mail,PDO::PARAM_STR);
        $req->execute();
        $data = $req->fetch();
        return $data;
    }catch(Exception $error){
        return $error->getMessage();
    }
}

function addUtilisateur($nom,$prenom,$mail,$password,$bdd)/* :string */{
    $role = 3;
    try{
        $req = $bdd->prepare('INSERT INTO utilisateur (nom_util, prenom_util, mail_util, mdp_util, id_role) VALUES (?,?,?,?,?)');
        $req->bindParam(1,$nom,PDO::PARAM_STR);
        $req->bindParam(2,$prenom,PDO::PARAM_STR);
        $req->bindParam(3,$mail,PDO::PARAM_STR);
        $req->bindParam(4,$password,PDO::PARAM_STR);
        $req->bindParam(5,$role,PDO::PARAM_INT);
        $req->execute();
        return true;
    }catch(Exception $error){
        return false;
    }
}


?>