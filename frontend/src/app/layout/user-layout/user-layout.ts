import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  imports: [],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.css',
})
export class UserLayout {
currentUser: any;

constructor(private router: Router) {}

ngOnInit() {
  const data = localStorage.getItem('userData');
  if (data) {
    this.currentUser = JSON.parse(data);
  }
}

logout() {
  localStorage.removeItem('userData');
  this.router.navigate(['/login']);
}
}
