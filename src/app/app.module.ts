import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {  HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import {ParticularPage } from '../pages/particular/particular';
import { ProfessionalPage } from '../pages/professional/professional';
import { ItinerairePage } from '../pages/Itineraire/itineraire';
import { ColisPage} from '../pages/colis/colis';
import {FollowPage} from '../pages/follow/follow';
import {DetailsPage} from '../pages/details/details';
import {ResumeColisPage} from '../pages/resumecolis/resumecolis';
import {RoadMapPage} from '../pages/roadmap/roadmap';
import {AvailabilityPage} from '../pages/availability/availability';
import { ClientPage } from '../pages/client/client';
import { UsagerPage } from '../pages/usager/usager';
import { ProfilPage } from '../pages/profil/profil';

import { MapboxApiService } from '../services/mapbox.service';
import {AuthService} from '../services/auth.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DemandePage } from '../pages/demande/demande';
import { LitigePage } from '../pages/litige/litige';
import { CtwocPage } from '../pages/ctwoc/ctwoc';
import { AdminPage } from '../pages/admin/admin';
import {TransportPage} from '../pages/transport/transport';
import { ListDriverPage } from '../pages/listdriver/listdriver';
import { VehiculePage } from '../pages/vehicule/vehicule';
import { ListVehiculePage } from '../pages/listvehicule/listvehicule';
import { AuthentificationPage } from '../pages/authentification/authenfication';
import { InscriptionUserPage } from '../pages/inscriptionuser/inscriptionuser';
import { RecaptchaModule } from 'ng-recaptcha';
import { DriverPage } from '../pages/driver/driver';

@NgModule({
  declarations: [
    MyApp,
    ParticularPage,
    ProfessionalPage,
    ItinerairePage,
    ColisPage,
    FollowPage,
    DetailsPage,
    ResumeColisPage,
    AvailabilityPage,
    RoadMapPage,
    ProfilPage,
    UsagerPage,
    ClientPage,
    DemandePage,
    LitigePage,
    CtwocPage,
    AdminPage,
    TransportPage,
    ListDriverPage,
    VehiculePage,
    ListVehiculePage,
    AuthentificationPage,
    InscriptionUserPage,
    DriverPage
  ],
  imports: [
    BrowserModule,
    RecaptchaModule.forRoot(),
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ClientPage,
    ProfilPage,
    ParticularPage,
    ProfessionalPage,
    ItinerairePage,
    ColisPage,
    FollowPage,
    DetailsPage,
    ResumeColisPage,
    AvailabilityPage,
    UsagerPage,
    RoadMapPage,
    DemandePage,
    LitigePage,
    CtwocPage,
    AdminPage,
    TransportPage,
    ListDriverPage,
    VehiculePage,
    ListVehiculePage,
    AuthentificationPage,
    InscriptionUserPage,
    DriverPage
  ],
  providers: [
    AuthService,
    MapboxApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
