// src/app/photo-entry/photo-entry.component.ts
import { Component, Input, SimpleChanges } from '@angular/core';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-photo-entry',
  templateUrl: './photo-entry.component.html',
  styleUrls: ['./photo-entry.component.scss'],
})
export class PhotoEntryComponent {
  @Input() photo: Photo | undefined;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.photo)
  }
}
