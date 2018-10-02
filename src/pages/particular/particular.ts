import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import mapboxgl from 'mapbox-gl';
import { AvailabilityPage } from '../availability/availability';
import { ClientPage } from "../client/client";
import { AuthService } from '../../services/auth.service';
import { UsagerPage } from '../usager/usager';
import { AuthentificationPage } from '../authentification/authenfication';

@Component({
  selector: 'page-particular',
  templateUrl: 'particular.html'
})
export class ParticularPage implements OnInit{

  @ViewChild('map') mapContainer : ElementRef;
  @ViewChild('navContent') nav: NavController;
  map: any;
  icons: string[];
  
  show = true;
  contentParticular :any =  UsagerPage;
  clientContent : any = ClientPage;
  constructor(public navCtrl: NavController,public modal : ModalController, private authservice :AuthService) {
    
    this.icons = ['car', 'bus',  'bicycle','train', 'walk','boat','plane'];
   // this.navCtrl.setRoot(UsagerPage);
   
  }

  ionViewDidEnter() 
  {
    this.icons = ['car', 'bus',  'bicycle','train', 'walk','boat','plane'];
    this.loadmap();
    
   
  }
  ngOnInit()
  {
    
  }
  loadmap()
  {
    
     mapboxgl.accessToken='pk.eyJ1IjoicHRjaGVwZ2EiLCJhIjoiY2poODd1ZjhyMGcybjMzbzF1dzcwemI1YSJ9.CFJRkwb-rSSVek9_aXU5Vg';
     this.map =new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [-6.477, 40],
      zoom: 9,
      container : 'map'  
       
     });
 
  }

  addavailability()
  {
    let modalAvailability = this.modal.create(AvailabilityPage);
    modalAvailability.present();  
  }

  openspace()
  {
    console.log("ok");
    let modalAvailability = this.modal.create(AuthentificationPage);
    modalAvailability.present();
    /*if( true/*this.authservice.CheckAuth())
    {
      
      
   /*}else
    {
      
      this.nav.push(this.clientContent);
    }*/

     
    
  }

}
