import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarsImagesService {

  hostURL = 'https://api.nasa.gov';
  apiURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=VBfDtCCiFRum94ruI9Ny19eUumdLfAwbXclwn0ao';
  apiKey = 'VBfDtCCiFRum94ruI9Ny19eUumdLfAwbXclwn0ao';

  constructor(private readonly http: HttpClient) { }


  /*  getImages() {
      const params = `sol=1000&page=1&api_key=${this.apiKey}`;
  
      return this.http
        .get<HttpMarsImagesDto>(
          `${this.hostURL}${this.apiURL}?${params}`,
          {
            observe: 'response',
          },
        )
        .pipe(
          tap(
            // En cas de réponse normale, on ne garde pas l'historique
            () => {},
            // Utiliser le localstorage pour stocker les modifications de favoris
            (error: any) => {
              console.error('HTTP ERROR | ' + error);
            },
          ),
        );
    }*/


  getMarsImagesFromAPI() {
    return this.http.get<any>(this.apiURL);
  }
}
