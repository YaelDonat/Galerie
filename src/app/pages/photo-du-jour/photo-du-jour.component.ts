import { Component, Input, OnInit } from '@angular/core';
import { MarsImagesService } from 'src/app/services/mars-images.service';


@Component({
  selector: 'app-photo-du-jour',
  templateUrl: './photo-du-jour.component.html',
  styleUrls: ['./photo-du-jour.component.css']
})
export class PhotoDuJourComponent implements OnInit {

  /*marsPhotos = [{ id: "1", img_src: "https://mars.nasa.gov/system/resources/detail_files/26372_1-PIA24937-web.jpg" },
                { id: "2", img_src: "https://mars.nasa.gov/system/resources/detail_files/26372_1-PIA24937-web.jpg" },
                {id:"3", img_src:"https://mars.nasa.gov/system/resources/detail_files/26372_1-PIA24937-web.jpg"}]*/

  constructor(private MarsImagesService: MarsImagesService) {
    this.MarsImagesService = MarsImagesService;
  }

  marsPhotos = [];
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
