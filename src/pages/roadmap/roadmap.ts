import { Component} from '@angular/core';
import { NavController,  ModalController } from 'ionic-angular';
import { AvailabilityPage } from '../availability/availability';


@Component({
  selector: 'page-roadmap',
  templateUrl: 'roadmap.html'
})
export class RoadMapPage {

  
  constructor(public navCtrl: NavController,public modal : ModalController) {
    
    
  }
  addAvailability()
  {
     let modalAbailability = this.modal.create(AvailabilityPage);
     modalAbailability.present();
  }
 
}
