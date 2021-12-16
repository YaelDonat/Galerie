import { Component, Input, OnInit } from '@angular/core';

interface ItemMarsPhoto {
  id: string;
  img_src: string;
};

@Component({
  selector: 'app-list-images-item',
  templateUrl: './list-images-item.component.html',
  styleUrls: ['./list-images-item.component.css']
})
export class ListImagesItemComponent implements OnInit {

  @Input() photosMars: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
