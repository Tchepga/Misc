import { Component} from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-resumecolis',
  templateUrl: 'resumecolis.html'
})
export class ResumeColisPage {

  
  constructor(public navCtrl: NavController, private view: ViewController) {
    
    
  }

 
  closeResume()
  {
    this.view.dismiss();
  }

}
