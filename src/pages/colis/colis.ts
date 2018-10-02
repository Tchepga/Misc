import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'page-colis',
  templateUrl: 'colis.html'
})

export class ColisPage {

  
  constructor(public navCtrl: NavController, public modCtrl: ModalController) {
    
    
  }

 
  showDetailsColis()
  {
    
    let modal = this.modCtrl.create(DetailsPage);
    modal.present();
     
     
  }

}
