import { Component,ViewChild} from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DemandePage } from '../demande/demande';


@Component({
  selector: 'page-ctwoc',
  templateUrl: 'ctwoc.html'
})
export class CtwocPage {
  @ViewChild('navCtwoc') nav: NavController;
  contentCtwoc :any = DemandePage;
  
  constructor(public navCtrl: NavController,public modal : ModalController) {
    
  //this.navCtrl.setRoot(this.contentCtwoc);
    
   
  }

  
  
  

}
