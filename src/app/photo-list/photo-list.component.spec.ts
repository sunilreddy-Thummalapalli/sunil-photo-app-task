import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { PhotoListComponent } from './photo-list.component';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../models/photo.model';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let photoService: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoListComponent],
      imports: [HttpClientModule],
      providers: [PhotoService],
    });

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    photoService = TestBed.inject(PhotoService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an empty photo list', () => {
    expect(component.photos).toEqual([]);
  });

  it('should load more photos on init', () => {
    const mockData: Photo[] = [/* Your mock data here */];
    spyOn(photoService, 'getPhotos').and.returnValue(of(mockData));
    component.ngOnInit();
    expect(component.loading).toBe(false);
    expect(component.photos).toEqual(mockData);
  });

  it('should load more photos when scrolling to the bottom', () => {
    const mockData: Photo[] = [/* Your mock data here */];
    spyOn(photoService, 'getPhotos').and.returnValue(of(mockData));
    component.onScroll();
    expect(component.loading).toBe(false);
    expect(component.photos).toEqual(mockData);
  });

  it('should not load more photos when already loading', () => {
    component.loading = true;
    spyOn(photoService, 'getPhotos');
    component.onScroll();
    expect(photoService.getPhotos).not.toHaveBeenCalled();
  });
});
