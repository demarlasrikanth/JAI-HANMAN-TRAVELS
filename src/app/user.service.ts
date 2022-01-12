import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "./helpers/usermodel";
import {environment} from "../environments/environment";
import {map} from "rxjs";
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";


class User {
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = "http://localhost:3000";
  private baseurl = environment.baseURL


  constructor(private http: HttpClient) {
  }

  saveNewuser(userModel: UserModel) {
    return this.http.post(`${this.baseurl}/register`, userModel);
  }

  getList() {
    return this.http.get(`${this.baseurl}/users`);
  }

  login(data: any) {
    return this.http.post(`${this.baseurl}/login`, data).pipe(map(a:any)=>{

    })

}
}
