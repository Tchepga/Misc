import { Component,ViewChild,ElementRef, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import mapboxgl from 'mapbox-gl';
import { AvailabilityPage } from '../availability/availability';
import { ClientPage } from "../client/client";
import { AuthService } from '../../services/auth.service';
import { UsagerPage } from '../usager/usager';


@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage{

  @ViewChild('map') mapContainer : ElementRef;
  @ViewChild('navContent') nav: NavController;
  map: any;
  icons: string[];
  
  show = true;
  contentParticular :any =  UsagerPage;
  clientContent : any = ClientPage;
  constructor(public navCtrl: NavController,public modal : ModalController, private authservice :AuthService) {
    
   
   
  }

  

  

}
