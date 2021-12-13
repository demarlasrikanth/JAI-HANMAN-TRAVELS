import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

 @Injectable({
  providedIn: 'root'
})
export class UserService {
   url = "http://localhost:8080/api/v1/users";

   constructor(private http: HttpClient) {
   }

   saveNewuser(data: any) {
     return this.http.post(this.url, data);
   }

   userlogin(emailId: any, password: any) {
     return this.http.post(this.url, emailId, password)

   }

 }

