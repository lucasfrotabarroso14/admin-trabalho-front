import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';
  static TOKEN_KEY = 'token';

  constructor(private http: HttpClient) {
  }

  isLogged(): boolean {
    return sessionStorage.getItem(AuthService.TOKEN_KEY) != null
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, {email, password})
      .pipe(
        tap(response => {
          sessionStorage.setItem(AuthService.TOKEN_KEY, response.token)
        })
      )
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, {name, email, password});
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${userId}`);
  }
}
