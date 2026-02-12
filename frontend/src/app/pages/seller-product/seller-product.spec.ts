import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerProduct } from './seller-product';

describe('SellerProduct', () => {
  let component: SellerProduct;
  let fixture: ComponentFixture<SellerProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
