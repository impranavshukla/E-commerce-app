import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-seller-layout',
  imports: [RouterOutlet],
  templateUrl: './seller-layout.html',
  styleUrl: './seller-layout.css',
})
export class SellerLayout {
  constructor(private router:Router) {}
   logout(){
  localStorage.removeItem('userData');
  this.router.navigate(['/login']);
}
}
