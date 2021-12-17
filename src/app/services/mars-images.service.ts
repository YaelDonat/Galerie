import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarsImagesService {

  hostURL = 'https://api.nasa.gov';
  apiKey = '&api_key=VBfDtCCiFRum94ruI9Ny19eUumdLfAwbXclwn0ao';

  dateJour: string = "";
  dateMois: string = "";
  dateAnnee: string = "";
  apiURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=VBfDtCCiFRum94ruI9Ny19eUumdLfAwbXclwn0ao';

  dateChange(jour: any, mois: any,annee:any) {
    this.dateJour = jour;
    this.dateMois = mois;
    this.dateAnnee = annee;
    this.apiURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' +
    this.dateAnnee + '-' + this.dateMois + '-' + this.dateJour + this.apiKey;

  }

getDateJour() {
    return this.dateJour;
  }

  getDateMois() {
    return this.dateMois;
  }

  getDateAnnee() {
    return this.dateAnnee;
  }
  constructor(private readonly http: HttpClient) { }





  getMarsImagesFromAPI() {
    return this.http.get<any>(this.apiURL);
  }
}
