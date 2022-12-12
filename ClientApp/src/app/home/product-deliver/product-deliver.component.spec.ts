import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeliverComponent } from './product-deliver.component';

describe('ProductDeliverComponent', () => {
  let component: ProductDeliverComponent;
  let fixture: ComponentFixture<ProductDeliverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeliverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
