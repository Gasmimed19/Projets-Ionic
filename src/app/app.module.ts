import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyBKvce023LEbMhXfRUF4kVm06JvloElIH4",
  authDomain: "gestionpfes-7ba9d.firebaseapp.com",
  projectId: "gestionpfes-7ba9d",
  storageBucket: "gestionpfes-7ba9d.appspot.com",
  messagingSenderId: "703950320184",
  appId: "1:703950320184:web:8ea0ef68cb0d0afbe8eccd"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
