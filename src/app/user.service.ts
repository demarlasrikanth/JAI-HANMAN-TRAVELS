import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {UserModel} from "./helpers/usermodel";
import {environment} from "../environments/environment";
import {catchError, map, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = "http://localhost:3000/users";
  private baseurl = environment.baseURL
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private currentUser: Object | any;

  constructor(private http: HttpClient, private router: Router) {
  }


  saveNewuser(userModel: UserModel) {
    return this.http.post(`${this.baseurl}/register`, userModel);
  }

  getList() {
    return this.http.get(`${this.baseurl}/users`);
  }

  // Sign-in
  login(data: any) {
    return this.http.post<any>(`${this.baseurl}/login`, data)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
        this.getUserProfile(res.user.id).subscribe((r) => {
          this.currentUser = res.user;
          this.router.navigate(['/userProfile', this.currentUser.id]);
        })
      })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null);
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.url}/${id}`;
    return this.http.get(api, {headers: this.headers}).pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}

