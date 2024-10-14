import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from './not-found.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let contentParagraph: HTMLParagraphElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComponent],
      providers: [provideExperimentalZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
    contentParagraph = fixture.nativeElement.querySelector('#content');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should display 'Page not found' text`, () => {
    const expected = component.NOT_FOUND_TEXT;
    expect(contentParagraph.textContent).toBe(expected);
  });
});
