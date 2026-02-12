import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SellerServices {
  constructor(private http:HttpClient) {}

  postUser(data:any){
    return this.http.post('http://localhost:3001/users', data);
  }
  addProduct(data:any){
    return this.http.post('http://localhost:3001/products', data);
  }

  loginUser(email: string, password: string) {
  return this.http.get<any[]>(
    `http://localhost:3001/users?email=${email}&password=${password}`
  );
}

}
