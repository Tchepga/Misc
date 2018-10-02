import { Component, NgZone} from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { ClientPage } from '../client/client';



@Component({
  selector: 'page-inscriptionuser',
  templateUrl: 'inscriptionuser.html'
})

export class InscriptionUserPage {

  nom: string;
  prenom: string;
  adresse: string;
  tel :string;
  mail : string;
  dateborn : Date;
  password : string;

  private captchaPassed: boolean = false;
    private captchaResponse: string;
 
  constructor(private zone : NgZone,public navCtrl: NavController,private view: ViewController, public inscriptionService : AuthService, public modal:ModalController) {
    
   
  }
  captchaResolved(response: string): void {
 
    this.zone.run(() => {
        this.captchaPassed = true;
        this.captchaResponse = response;
    });

}
    validateInscription()
    {
        let dateActu = new Date();
        let reponse =  this.inscriptionService.addUser("étudiant",this.statut,this.mail,dateActu,this.password,this.nom,this.prenom,this.adresse);
        
        if(reponse)
        {
           
          let modalAvailability = this.modal.create(ClientPage);
          modalAvailability.present(); 
          this.closeView();
          
        }
    }
    closeView()
    {
      this.view.dismiss();
    }

}


