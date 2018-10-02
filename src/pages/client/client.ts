import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ProfilPage } from '../profil/profil';
import { DemandePage } from '../demande/demande';


@Component({
  selector: 'page-client',
  templateUrl: 'client.html'
})


export class ClientPage {

  @ViewChild('navclient') navprofil: NavController;  
  contentProfil :any =  ProfilPage;
  constructor(public navCtrl: NavController,public modal : ModalController, private param: NavParams) {
    
  
    
   
  }

  showPrestation()
  {
    console.log(this.param);
    this.navprofil.setRoot(DemandePage);
  }
  showProfil()
  {
    this.navprofil.setRoot(ProfilPage);
  }
  
  
  

}
