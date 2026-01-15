import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app';
import { ArticleAppInterceptor } from './app/shared/interceptors/article-app.interceptor'
import { routes } from './app/app-routing-module';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: ArticleAppInterceptor, multi: true },
  ],
}).catch(err => console.error(err));
