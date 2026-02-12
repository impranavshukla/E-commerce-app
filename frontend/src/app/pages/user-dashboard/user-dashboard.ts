import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  imports: [],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
})
export class UserDashboard {
  constructor(private http:HttpClient) {}

products = signal<any[]>([]);
ngOnInit() {
  this.http
    .get('http://localhost:3001/products?isFeatured=true')
    .subscribe((data: any) => {
      console.log('Featured Products:', data);
      this.products.set(data);
    });
}

}
