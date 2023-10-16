import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

getPhotos(page: number, pageSize: number): Observable<Photo[]> {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return this.http.get<Photo[]>(`${this.apiUrl}?_start=${start}&_end=${end}`);
  }
  
}
