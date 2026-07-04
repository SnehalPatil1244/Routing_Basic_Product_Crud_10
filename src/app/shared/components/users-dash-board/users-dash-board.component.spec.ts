import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDashBoardComponent } from './users-dash-board.component';

describe('UsersDashBoardComponent', () => {
  let component: UsersDashBoardComponent;
  let fixture: ComponentFixture<UsersDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
