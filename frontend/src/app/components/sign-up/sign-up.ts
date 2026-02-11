import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SellerServices } from '../../services/seller-services';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  constructor(
    private seller: SellerServices,
    private router: Router,
  ) {}
  sellerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  sellerSignUp() {
    if (this.sellerForm.valid) {
      this.seller.postUser(this.sellerForm.value).subscribe({
        next: (res: any) => {
          // ✅ Save logged-in seller in localStorage
          localStorage.setItem('userData', JSON.stringify(res));

          console.log(res);
          alert('Signup Successful');
         

if(res.role === 'seller'){
   this.router.navigate(['/seller/dashboard']);
} else {
   this.router.navigate(['/user/dashboard']);
}
        },
        error: (err) => {
          console.log(err);
          alert('Something went wrong');
        },
      });
    }
  }
}
