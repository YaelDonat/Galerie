import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { FooterComponent } from './features/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalerieComponent } from './pages/galerie/galerie.component';
import { PhotoDuJourComponent } from './pages/photo-du-jour/photo-du-jour.component';
import { FormsModule } from '@angular/forms';
import { ListImagesComponent } from './features/list-images/list-images.component';
import { ListImagesItemComponent } from './features/list-images-item/list-images-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    GalerieComponent,
    PhotoDuJourComponent,
    ListImagesComponent,
    ListImagesItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
