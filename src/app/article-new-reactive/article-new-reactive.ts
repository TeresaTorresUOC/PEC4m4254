import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NameArticleValidator } from '../validators/name-article.validator';
import { ArticleService } from '../services/article-service';

@Component({
  selector: 'app-article-new-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './article-new-reactive.html',
  styleUrls: ['./article-new-reactive.css']
})
export class ArticleNewReactive {

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService
  ) {}

  articleForm = this.fb.group({
    name: ['', [Validators.required, NameArticleValidator]],
    price: [null, [Validators.required, Validators.min(0.1)]],
    imageUrl: ['', [
      Validators.required,
      Validators.pattern(/^(https?:\/\/)[\w\.-]+\.[a-zA-Z]{2,3}\/?.*$/)
    ]],
    isOnSale: [false]
  });

  get f() {
    return this.articleForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.articleForm.invalid) {
      console.warn('FORMULARIO REACTIVO NO VÁLIDO');
      return;
    }

  
    this.articleService.create({
      id: 0, 
      name: this.articleForm.value.name!,
      price: this.articleForm.value.price!,
      imageUrl: this.articleForm.value.imageUrl!,
      quantityInCart: 0,
      isOnSale: this.articleForm.value.isOnSale ?? false
    }).subscribe(() => {
      this.articleForm.reset();
      this.submitted = false;
    });
  }
}
