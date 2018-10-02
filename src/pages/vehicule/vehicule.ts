import { Component} from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'page-vehicule',
  templateUrl: 'vehicule.html'
})
export class VehiculePage {

  immat : string;
  type : string;
  marque : string;
  modele : string;
  anneemodele: Date;
  poidscharge : string;
  poidsvide : string;
  cap : string;
  volume : string;
  km:string;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public inscriptionService : AuthService, private alertCtrl: AlertController) {
  
    
  }
  addVehicule()
  {

     this.inscriptionService.addVehicle(this.immat,this.type,this.marque,this.modele,this.anneemodele,this.poidscharge,this.poidsvide,this.cap,this.volume,this.km );
     this.presentAlert();
     console.log("addvehicule");
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Confirmation inscription',
      message: 'Le véhicule vient d\'être créé.',
      buttons: ['Ok']
    });
    alert.present();
  }


}


