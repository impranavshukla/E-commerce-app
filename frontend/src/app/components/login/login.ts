import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SellerServices } from '../../services/seller-services';

@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   constructor(
    private seller: SellerServices,
    private router: Router,
  ) {}

  loginData:FormGroup=new FormGroup({
    "email":new FormControl(''),
    "password":new FormControl('')
  });

onLogin() {

  if (this.loginData.valid) {

    const email = this.loginData.value.email;
    const password = this.loginData.value.password;

    this.seller.loginUser(email, password).subscribe({

      next: (res: any[]) => {
        console.log(res);

        if (res.length > 0) {

          const user = res[0];

          // ✅ Store logged-in user
          localStorage.setItem('userData', JSON.stringify(user));

          alert("Login Successful");

          // ✅ Role-based redirect
          if (user.role === 'seller') {
            this.router.navigate(['/seller/dashboard']);
          } else {
            this.router.navigate(['/user/dashboard']);
          }

        } else {
          alert("Invalid Email or Password");
        }

      },

      error: (err) => {
        console.log(err);
        alert("Something went wrong");
      }

    });

  }

}

}
