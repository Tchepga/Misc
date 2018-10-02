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
    case 'ajouterVehicule':
        ajouterVehicule();
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

 
function ajouterVehicule(){


        $postdata = file_get_contents("php://input");
        if (isset($postdata)) {
            $request = json_decode($postdata);
            $num = $request->num;
            $type = $request->type;
            $marque = $request->marque;
            $modele = $request->modele;
            $anneemodele = $request->anneemodele;
            $poidscharge = $request->poidscharge;
            $poidsvide = $request->poidsvide;
            $cap = $request->cap;
            $volume = $request->volume;
            $km = $request->km;
            
            
            /*$cp = "90000";
            $ville = "Belfort";*/

            try{
                $bdd1 = new PDO('mysql:host=localhost;dbname=projetmisc;charset=utf8', 'root', '');
                $sql = "INSERT INTO `vehicule` (`NUM_IMMAT`, `TYPE_TRANSPORT`, `MARQUE_VEHI`, `MODELE_VEHI`, `ANNEE_VEHI`, `POIDS_CHARGE_VEHI`, `POIDS_VIDE_VEHI`, `CAPACITE_PERS_VEHI`, `VOLUME_TRANSPORT_VEHI`, `KILOMETRAGE_VEHI`)"; 
                $sql = $sql." values ('".$num."','".$type."','".$marque."','".$modele."','".$anneemodele."','".$poidscharge."','".$poidsvide."','".$cap."','".$volume."','".$km."');" ;
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