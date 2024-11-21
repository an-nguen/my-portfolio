import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPrettyComponent } from './portfolio-pretty.component';

describe('PortfolioPrettyComponent', () => {
  let component: PortfolioPrettyComponent;
  let fixture: ComponentFixture<PortfolioPrettyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPrettyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPrettyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
