import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductPanelComponent } from './all-product-panel.component';

describe('AllProductPanelComponent', () => {
  let component: AllProductPanelComponent;
  let fixture: ComponentFixture<AllProductPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProductPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
