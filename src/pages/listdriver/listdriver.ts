import { Component} from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DriverPage } from '../driver/driver';

@Component({
  selector: 'page-listdriver',
  templateUrl: 'listdriver.html'
})
export class ListDriverPage {

 
  constructor(public navCtrl: NavController,  public mod: ModalController) {
  
    
  }
  openAddVehicule()
  {
    let modalDriver = this.mod.create(DriverPage);
    modalDriver.present();  
  }
 
}
