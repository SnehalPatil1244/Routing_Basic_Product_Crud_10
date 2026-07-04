import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConfirmationComponent } from './get-confirmation.component';

describe('GetConfirmationComponent', () => {
  let component: GetConfirmationComponent;
  let fixture: ComponentFixture<GetConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
