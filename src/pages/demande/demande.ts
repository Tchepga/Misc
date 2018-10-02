import { Component} from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LitigePage } from '../litige/litige';


@Component({
  selector: 'page-demande',
  templateUrl: 'demande.html'
})
export class DemandePage {

  
  
  constructor(public navCtrl: NavController,public modal : ModalController) {
    
  
    
   
  }

  
  showLitige()
  {
    console.log("ok");
    let modalLittige = this.modal.create(LitigePage);
    modalLittige.present();
  }
  

}
