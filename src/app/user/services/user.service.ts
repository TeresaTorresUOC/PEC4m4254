import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {}

  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<any>(`${this.baseUrl}/user/login`, payload, { observe: 'response' })
      .pipe(
        map((res) => {
          const headerToken =
            res.headers.get('Authorization') ?? res.headers.get('x-access-token');
          const token = res.body?.token ?? headerToken?.replace(/^Bearer\s+/i, '');

          return { token: token ?? 'FAKE_TOKEN' };
        })
      );
  }


  register(payload: RegisterRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/register`, payload);
  }
}
