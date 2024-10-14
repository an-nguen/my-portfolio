import { TestBed, ComponentFixture } from '@angular/core/testing';

import { GTMService } from './gtm.service';
import { Component, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideDocument } from '@core/providers/document';
import { provideWindow } from '@core/providers/window';
import { GTM_ID_TOKEN, GTM_SCRIPT_EL_ID } from '@core/constants';


@Component({ standalone: true })
class DummyComponent { }

describe('GTMService', () => {
  let fixture: ComponentFixture<DummyComponent>;
  let service: GTMService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyComponent],
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideDocument(),
        provideWindow(),
        { provide: GTM_ID_TOKEN, useValue: 'GTM-XXXXXX' }
      ]
    }).compileComponents();
    service = TestBed.inject(GTMService);
    fixture = TestBed.createComponent(DummyComponent);
    await fixture.whenStable();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should addGTMScript method add a <script> element', () => {
    service.addGTMScript();
    fixture.detectChanges();
    const scriptEl = document.querySelector(`script#${GTM_SCRIPT_EL_ID}`);
    expect(scriptEl).toBeTruthy();
  });
});
