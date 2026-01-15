import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../../shared/models/article.model';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly baseUrl = `${environment.apiUrl}/api/articles`;

  constructor(private readonly http: HttpClient) {}

  getArticles(q?: string): Observable<Article[]> {
    let params = new HttpParams();
    if (q && q.trim()) {
      params = params.set('q', q.trim());
    }
    return this.http.get<Article[]>(this.baseUrl, { params });
  }
  getArticleById(id: number): Observable<Article | undefined> { 
    return this.getArticles().pipe( map(list => list.find(a => a.id === id)) ); }

    changeQuantity(articleID: number, changeInQuantity: number): Observable<Article> {
    return this.http.patch<Article>(`${this.baseUrl}/${articleID}`, {
      changeInQuantity,
    });
  }

  create(article: Article): Observable<any> {
    return this.http.post<any>(this.baseUrl, article);
  }
}
