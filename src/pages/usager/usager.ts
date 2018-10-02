import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-usager',
  templateUrl: 'usager.html'
})
export class UsagerPage {
  pet :any;
  usercase:any;
 
  constructor(public navCtrl: NavController) {
    this.pet = "user";
    this.usercase = "itineraire";
  }


}
