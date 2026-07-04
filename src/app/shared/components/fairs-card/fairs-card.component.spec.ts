import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsCardComponent } from './fairs-card.component';

describe('FairsCardComponent', () => {
  let component: FairsCardComponent;
  let fixture: ComponentFixture<FairsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
