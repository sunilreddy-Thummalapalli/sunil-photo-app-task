import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoEntryComponent } from './photo-entry.component';
import { Photo } from '../models/photo.model';

describe('PhotoEntryComponent', () => {
  let component: PhotoEntryComponent;
  let fixture: ComponentFixture<PhotoEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoEntryComponent],
    });

    fixture = TestBed.createComponent(PhotoEntryComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an @Input() photo property', () => {
    const photo: Photo = {
      albumId: 1,
      id: 1,
      title: 'Test Photo',
      url: 'https://example.com/photo.jpg',
      thumbnailUrl: 'https://example.com/thumbnail.jpg',
    };
    component.photo = photo;
    fixture.detectChanges();

    expect(component.photo).toEqual(photo);
  });

  it('should log the photo in ngOnChanges', () => {
    const photo: Photo = {
      albumId: 1,
      id: 1,
      title: 'Test Photo',
      url: 'https://example.com/photo.jpg',
      thumbnailUrl: 'https://example.com/thumbnail.jpg',
    };
    spyOn(console, 'log'); // Spy on console.log

    component.photo = photo;
    component.ngOnChanges({});
    
    expect(console.log).toHaveBeenCalledWith(photo);
  });
});
