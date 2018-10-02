import { Component} from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { InscriptionUserPage } from '../inscriptionuser/inscriptionuser';


@Component({
  selector: 'page-authentification',
  templateUrl: 'authentification.html'
})
export class AuthentificationPage {

  
  constructor(public navCtrl: NavController, private view: ViewController,public modal : ModalController) {
    
    
  }

 
  closeResume()
  {
    this.view.dismiss();
  }

  openinscriptionUsger()
  {
    let modalAvailability = this.modal.create(InscriptionUserPage);
      modalAvailability.present();
  }

  authentification()
  {
    console.log("vérification authentification");
     // Vérifier depuis la base de données si il a le droit
  }
}
