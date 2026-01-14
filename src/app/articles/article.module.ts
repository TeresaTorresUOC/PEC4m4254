import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  imports: [ReactiveFormsModule, ArticleRoutingModule],
})
export class ArticleModule {}