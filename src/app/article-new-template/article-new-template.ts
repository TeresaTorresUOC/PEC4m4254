import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './article-new-template.html',
  styleUrls: ['./article-new-template.css']
})
export class ArticleNewTemplate {

  article = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]+)?$/)]),
    imageUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(https?:\/\/)[\w\.-]+\.[a-zA-Z]{2,3}\/?.*$/)
    ]),
    isOnSale: new FormControl(false)
  });

  submitted = false;

  onSubmit() {
    this.submitted = true;

    if (this.article.valid) {
      console.log("Datos del artículo (template form): ", this.article.value);
    } else {
      console.warn("FORMULARIO NO VÁLIDO");
    }
  }

}

