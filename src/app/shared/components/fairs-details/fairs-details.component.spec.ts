import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsDetailsComponent } from './fairs-details.component';

describe('FairsDetailsComponent', () => {
  let component: FairsDetailsComponent;
  let fixture: ComponentFixture<FairsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
