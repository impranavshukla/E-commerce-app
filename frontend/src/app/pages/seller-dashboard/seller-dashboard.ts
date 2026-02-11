import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-dashboard',
  imports: [],
  templateUrl: './seller-dashboard.html',
  styleUrl: './seller-dashboard.css',
})
export class SellerDashboard {
currentSeller: any;

ngOnInit() {
  const data = localStorage.getItem('userData');
  if (data) {
    this.currentSeller = JSON.parse(data);
  }
}
}
