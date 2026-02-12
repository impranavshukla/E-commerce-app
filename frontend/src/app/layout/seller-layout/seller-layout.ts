import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-seller-layout',
  imports: [RouterOutlet,RouterLink],
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
