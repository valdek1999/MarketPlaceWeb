import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRepairComponent } from './product-repair.component';

describe('ProductRepairComponent', () => {
  let component: ProductRepairComponent;
  let fixture: ComponentFixture<ProductRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
