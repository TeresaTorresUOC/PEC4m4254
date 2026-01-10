import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Article } from '../models/article.model'; 

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
    private readonly articlesSubject = new BehaviorSubject<Article[]>([
      { id: 1, name: 'Article 1', price: 19.99, imageUrl: 'assets/article1.jpg', quantityInCart: 0, isOnSale: false },
      { id: 2, name: 'Article 2', price: 9.5, imageUrl: '', quantityInCart: 0, isOnSale: true },
      { id: 3, name: 'Article 3', price: 29.0, imageUrl: 'assets/article3.jpg', quantityInCart: 0, isOnSale: false },
    ]);
    

  getArticles(): Observable<Article[]> {
    return this.articlesSubject.asObservable().pipe(delay(0));
  }

  changeQuantity(articleID: number, chagenInQuantity: number): Observable<Article> {
    const current = this.articlesSubject.getValue();
    const idx = current.findIndex(a => a.id === articleID);

    if (idx === -1) {
      return throwError(() => new Error(`Article with id ${articleID} not found`));
    }

    const updated: Article = {
      ...current[idx],
      quantityInCart: Math.max(0, current[idx].quantityInCart + chagenInQuantity),
    };

    const next = [...current];
    next[idx] = updated;

    return of(updated).pipe(
      tap(() => this.articlesSubject.next(next)),
      delay(0)
    );
  }

  create(article: Article): Observable<any> {
    const current = this.articlesSubject.getValue();
    const nextId = current.length ? Math.max(...current.map(a => a.id)) + 1 : 1;

    const created: Article = {
      ...article,
      id: nextId,
      quantityInCart: article.quantityInCart ?? 0,
    };

    return of({ ok: true }).pipe(
      tap(() => this.articlesSubject.next([created, ...current])),
      delay(0)
    );
  }
}
