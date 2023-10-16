// src/app/photo-list/photo-list.component.ts
import { Component, OnInit, HostListener } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  page = 1;
  pageSize = 10;
  loading = false;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore() {
    if (this.loading) return;
    this.loading = true;
    this.photoService.getPhotos(this.page, this.pageSize).subscribe((data) => {
      this.photos = this.photos.concat(data);
      this.page++;
      this.loading = false;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !this.loading
    ) {
      this.loadMore();
    }
  }
}
