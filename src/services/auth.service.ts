import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    authen = true;
    constructor(public http: Http) {

    }
    public getUserData(_email: string) {
        const url = 'http://localhost/projetMiscBeta/serveur/utilisateur.php/get_user';
        let headers = new Headers();
       
        
        return this.http.post(url, { mail:_email}, { headers: headers })

            .subscribe(res => {
                console.log(res.toString());
            
            });
    }
  
    public CheckAuth() {

         
        return this.http.get('http://localhost/projetMiscBeta/serveur/utilisateur.php/authen')

            .map(rep => rep.json());
    }
    public addUser(_typeuser: string, _role: string, _email: string, _datecreation: Date,_mdp:string,_nom:string,_prenom:string,_adresse:string) {
        const url = 'http://localhost/projetMiscBeta/serveur/utilisateur.php/set_users';
        let headers = new Headers();
        let actu = _datecreation.toISOString().slice(0,10);
        
        return this.http.post(url, { id: '',
                                     type_user: _typeuser, 
                                     role: _role,
                                     email:_email,
                                     datecreation:actu,
                                     mdp:_mdp,
                                     nom:_nom,
                                     prenom:_prenom,
                                     adresse:_adresse

                                      }, { headers: headers })

            .subscribe(res => {
                console.log(res.toString());
            
            });
            
    }
    public addDriver(_numtel: string,_ville:string,_nom:string,_prenom:string,_numvoie:string, _cp:string) {
        const url = 'http://localhost/projetMiscBeta/serveur/driver.php/ajouterChauffeur';
        let headers = new Headers();
        //let actu = _datecreation.toISOString().slice(0,10);
        
        return this.http.post(url, { id: '',
                                     numtel:_numtel,
                                     nom:_nom,
                                     prenom:_prenom,
                                     numvoie:_numvoie,
                                     cp:_cp,
                                     ville: _ville

                                      }, { headers: headers })

            .subscribe(res => {
                console.log(res.toString());
            
            });
            
    }

    public addVehicle(immat : string,_type : string,_marque : string,_modele : string,_anneemodele: Date,_poidscharge : string,
                        _poidsvide : string,_cap : string,_volume : string, _km:string){
        const url = 'http://localhost/projetMiscBeta/serveur/vehicule.php/ajouterVehicule';
        let headers = new Headers();
        //let datemodele = _anneemodele.toString().slice(6,10)+'/'+_anneemodele.getMonth+'/'+_anneemodele.getDate;
       let _datecreation = new Date();
        let actu = _datecreation.toISOString().slice(0,10);
        return this.http.post(url, { 
            num : immat,
            type : _type,
            marque: _marque,
            modele : _modele,
            anneemodele: actu,
            poidscharge : _poidscharge,
            poidsvide : _poidsvide,
            cap : _cap,
            volume : _volume,
            km : _km
                                      }, { headers: headers })

            .subscribe(res => {
                console.log(res.toString());
            
            });
            
    }

}