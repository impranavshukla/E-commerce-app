import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-shop',
  imports: [CommonModule],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
constructor(private http:HttpClient) {}

products = signal<any[]>([]);

ngOnInit() {
  this.http.get('http://localhost:3001/products').subscribe((data:any) => {
    console.log('Products:', data);
    this.products.set(data);
  });
}
}
