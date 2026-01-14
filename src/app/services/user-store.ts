import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'article-token';

@Injectable({ providedIn: 'root' })
export class UserStoreService {
  private readonly tokenSubject = new BehaviorSubject<string | null>(this.readToken());
  readonly token$ = this.tokenSubject.asObservable();

  get token(): string | null {
    return this.tokenSubject.value;
  }

  get isAuthenticated(): boolean {
    return !!this.token;
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
    this.tokenSubject.next(token);
  }

  clear() {
    localStorage.removeItem(TOKEN_KEY);
    this.tokenSubject.next(null);
  }

  private readToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }
}
