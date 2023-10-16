import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoService } from './services/photo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientModule],
    declarations: [AppComponent, PhotoListComponent],
    providers: [PhotoService, ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'photo-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('photo-app');
  });
});
