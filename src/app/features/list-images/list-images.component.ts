import { Component,Input, OnInit } from '@angular/core';

interface IMarsPhoto {
  id: string;
  img_src: string;
};

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {

  @Input() marsPhotos: IMarsPhoto[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.marsPhotos);
  }

}
