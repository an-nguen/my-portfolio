import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideDocument } from '@core/providers/document';
import { provideWindow } from '@core/providers/window';
import { GTM_ID_TOKEN } from '@core/constants';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
      ],
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideRouter([]),
        provideDocument(),
        provideWindow(),
        { provide: GTM_ID_TOKEN, useValue: '' }
      ]
    }).compileComponents();
  });

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-portfolio'`, async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-portfolio');
  });

});
