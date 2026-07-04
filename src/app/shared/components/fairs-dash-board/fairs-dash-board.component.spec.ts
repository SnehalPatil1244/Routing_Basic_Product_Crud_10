import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsDashBoardComponent } from './fairs-dash-board.component';

describe('FairsDashBoardComponent', () => {
  let component: FairsDashBoardComponent;
  let fixture: ComponentFixture<FairsDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairsDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairsDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
