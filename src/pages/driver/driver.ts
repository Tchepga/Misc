import { Component} from '@angular/core';
import { NavController, NavParams,AlertController, ViewController} from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html'
})
export class DriverPage {
  nom: string;
  prenom: string;
  num: string;
  tel :string;
  cp : string;
  ville : string;
 
  constructor(public navCtrl: NavController,public view: ViewController, public navParams: NavParams,public inscriptionService : AuthService,private alertCtrl: AlertController) {
  
    
  }
  addChauffeur()
  {

     this.inscriptionService.addDriver(this.tel,this.ville,this.nom,this.prenom,this.num,this.cp );
     this.presentAlert();
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Confirmation inscription',
      message: 'Le chauffeur '+ this.nom +' vient d\'être créé.',
      buttons: ['Ok']
    });
    alert.present();
  }
  closeView(){
    this.view.dismiss();
  }
 
}
