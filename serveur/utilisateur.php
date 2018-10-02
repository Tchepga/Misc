<?php
// Grabs the URI and breaks it apart in case we have querystring stuff
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

$request_uri = explode('/', $_SERVER['REQUEST_URI'], 8);
// Démarrage session
session_start();

// Route it up!
switch ($request_uri[sizeof($request_uri)-1]) {
    
    // authen page
    case 'authen':
       checkAuth();
        break;
    // get users page
     case 'set_users':
        set_users();
        break;
    case 'get_user':
        get_user();
        break;
    // Everything else
    default:
        header('HTTP/1.0 404 Not Found');
        require '404.php';
        break;
}


 function checkAuthe()
 {
    
 }
 function checkAuth()
 {
    
    
    if( isset($_SESSION['email']))
       $reponse=true;    
    else
      $reponse=false;
        

        
        return  json_encode($reponse); 
 }

 function get_user()
 {
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $mailE = $request;
        
        try{
            $bdd1 = new PDO('mysql:host=localhost;dbname=projetmisc;charset=utf8', 'root', '');
            $sql = "select * from utilisateur where email_user = '".$mailE."'" ;
            $reponse = $bdd1->query($sql);
            $reponse = $reponse->fetchAll();
            if ($sql) {
               var_dump($reponse);
            }
            else {
                echo "Erreur";
            }
            return json_encode($reponse);
           
        }
        catch(Exception $e)
        {
                echo('Erreur : '.$e->getMessage());
                die('Erreur : '.$e->getMessage());
                exit;
        }
        
    }   
 }
function set_users(){


        $postdata = file_get_contents("php://input");
        if (isset($postdata)) {
            $request = json_decode($postdata);
            $nom = $request->nom;
            $prenom = $request->prenom;
            $labelrole = $request->role;
            $numvoie = $request->adresse;
            $mail = $request->email;
            $mdp = $request->mdp;
            $typeuser = $request->type_user;
            $dateinsc = $request->datecreation;
            $cp = "90000";
            $ville = "Belfort";

            try{
                $bdd1 = new PDO('mysql:host=localhost;dbname=projetmisc;charset=utf8', 'root', '');
                $sql = "insert into utilisateur( nom_part,type_user,label_role,prenom_part,num_voie_part,cp_part,ville_part,date_insc_user,email_user,mdp_user)"; 
                $sql = $sql." values ('".$nom."','".$typeuser."','".$labelrole."','".$prenom."','".$numvoie."','".$cp."','".$ville."','".$dateinsc."','".$mail."','".$mdp."');" ;
                $bdd1->exec($sql);

                if ($sql) {
                   var_dump($sql);
                }
                else {
                    echo "Erreur";
                }
                return json_encode($sql);
               
            }
            catch(Exception $e)
            {
                    echo('Erreur : '.$e->getMessage());
                    die('Erreur : '.$e->getMessage());
                    exit;
            }
            
        }   
        
    
        
     
 }