import { Component, Input, OnInit } from '@angular/core';
import { MarsImagesService } from 'src/app/services/mars-images.service';


@Component({
  selector: 'app-photo-du-jour',
  templateUrl: './photo-du-jour.component.html',
  styleUrls: ['./photo-du-jour.component.css']
})
export class PhotoDuJourComponent implements OnInit {

  constructor(private MarsImagesService: MarsImagesService) {
    this.MarsImagesService = MarsImagesService;
  }
  annee: any;
  mois: any;
  jour: any;
  marsPhotos = [];

  choixDate() {
    this.MarsImagesService.dateChange(this.jour, this.mois, this.annee);
    this.MarsImagesService.getMarsImagesFromAPI().subscribe(
      (res) => {
        this.marsPhotos = res.photos;
        console.log(res.photos);
      },
    );
  }

  ngOnInit(): void {



    this.MarsImagesService.getMarsImagesFromAPI().subscribe(
      (res) => {
        this.marsPhotos = res.photos;
        console.log(res.photos);
      },

      (error) => {
        console.log(error);
      }
    );
  }
}
