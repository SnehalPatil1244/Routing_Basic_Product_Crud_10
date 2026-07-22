import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin, ISingIn } from '../models/auth';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Auth_Base_Url: string = environment.AuthBaseUrl
  isLoging$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) { }

  login(userDetails: ILogin): Observable<any> {
    let Login_Url = `${this.Auth_Base_Url}/api/auth/login`
    return this.http.post<any>(Login_Url, userDetails)
  }
  signUp(userDetails: ISingIn): Observable<any> {
    let Sign_Up = `${this.Auth_Base_Url}/api/auth/register`
    return this.http.post<any>(Sign_Up, userDetails)
  }

  saveToken(token: string) {
    localStorage.setItem('token', token)
  }

  saveuserRole(userRole: string) {
    localStorage.setItem('userRole', userRole)
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }
  getuserRole(): string | null {
    return localStorage.getItem('userRole')

  }
  LogOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
  }
}
