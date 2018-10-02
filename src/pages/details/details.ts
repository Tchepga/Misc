import { Component} from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { ResumeColisPage } from '../resumecolis/resumecolis';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  
  constructor(public navCtrl: NavController, private view: ViewController,public modal : ModalController) {
    
    
  }

 
  closeDetails()
  {
    this.view.dismiss();
  }

  resumeColis()
  {
    let modalResume = this.modal.create(ResumeColisPage);
    modalResume.present();
  }
}
