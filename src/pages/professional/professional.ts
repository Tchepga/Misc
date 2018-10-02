import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TransportPage } from '../transport/transport';

@Component({
  selector: 'page-professional',
  templateUrl: 'professional.html'
})
export class ProfessionalPage {

  @ViewChild('navContent') nav: NavController;
  selectedItem: any;
  icons: string[];
  contentProfessionel : any = TransportPage;
  items: Array<{title: string, note: string, icon: string}>;

  pet :any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.pet = "information";
  }

 
}
