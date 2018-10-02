import { Component} from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { ResumeColisPage } from '../resumecolis/resumecolis';


@Component({
  selector: 'litige-details',
  templateUrl: 'litige.html'
})
export class LitigePage {

  
  constructor(public navCtrl: NavController, private view: ViewController,public modal : ModalController) {
    
    
  }

 
  closeDetails()
  {
    this.view.dismiss();
  }

 
}
