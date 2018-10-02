import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ListDriverPage } from '../listdriver/listdriver';

@Component({
  selector: 'page-transport',
  templateUrl: 'transport.html'
})
export class TransportPage {

  itemsDrive :any;
  @ViewChild('navContent') nav: NavController;
  constructor(public navCtrl: NavController, public modal: ModalController) {
  
    this.itemsDrive = ["chauffeur1","chauffeur2","chauffeur3"];
    
  }
  consultDriver()
  {
    let modal = this.modal.create(ListDriverPage);
    modal.present();
  }
 
}
