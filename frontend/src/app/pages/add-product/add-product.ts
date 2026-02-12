import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SellerServices } from '../../services/seller-services';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  constructor(private service:SellerServices) {}
productData: FormGroup = new FormGroup({
  title: new FormControl('', [Validators.required]),
  description: new FormControl('', [Validators.required]),
  price: new FormControl('', [Validators.required]),
  brand: new FormControl('', [Validators.required]),
  category: new FormControl('', [Validators.required]),
  stock: new FormControl('', [Validators.required]),
  thumbnail: new FormControl('', [Validators.required]),
  isFeatured: new FormControl(false)
});

onSubmit() {
if (this.productData.valid) {
  console.log('Product Data:', this.productData.value); 
  this.service.addProduct(this.productData.value).subscribe((res:any)=>{
console.log(res);
  })
  this.productData.reset();
}
}
}