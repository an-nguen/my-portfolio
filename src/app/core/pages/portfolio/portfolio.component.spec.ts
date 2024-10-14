import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideHighlightOptions } from 'ngx-highlightjs';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;
  let mainContentDiv: HTMLDivElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PortfolioComponent,
      ],
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideHighlightOptions({
          lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
          coreLibraryLoader: () => import('highlight.js/lib/core'),
          languages: {
            typescript: () => import('highlight.js/lib/languages/typescript'),
            css: () => import('highlight.js/lib/languages/css'),
            xml: () => import('highlight.js/lib/languages/xml')
          }
        }),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
    mainContentDiv = fixture.nativeElement.querySelector('.main');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the code', () => {
    expect(mainContentDiv.textContent).toBeTruthy()
  });
});
