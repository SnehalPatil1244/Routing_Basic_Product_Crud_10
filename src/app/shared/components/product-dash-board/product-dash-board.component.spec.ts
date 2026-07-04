import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDashBoardComponent } from './product-dash-board.component';

describe('ProductDashBoardComponent', () => {
  let component: ProductDashBoardComponent;
  let fixture: ComponentFixture<ProductDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
