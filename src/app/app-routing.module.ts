import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PhotoDuJourComponent } from './pages/photo-du-jour/photo-du-jour.component';
import { GalerieComponent } from './pages/galerie/galerie.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'galerie', component: GalerieComponent },
  { path: 'photo', component: PhotoDuJourComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
