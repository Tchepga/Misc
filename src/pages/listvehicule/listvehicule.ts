import { Component} from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { VehiculePage } from '../vehicule/vehicule';

@Component({
  selector: 'page-listvehicule',
  templateUrl: 'listvehicule.html'
})
export class ListVehiculePage {

 
  constructor(public navCtrl: NavController, public navParams: NavParams,public modal: ModalController) {
  
    
  }
  addVehicule()
  {
    let modalAvailability = this.modal.create(VehiculePage);
    modalAvailability.present();
  }
 
}
