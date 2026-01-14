import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.html',
})
export class RegisterComponent {
  msg = '';
  error = '';

  readonly form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required], // aunque backend use SECRET, el enunciado pide 2 inputs
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  submit() {
    this.msg = '';
    this.error = '';
    if (this.form.invalid) return;

    this.userService.register(this.form.getRawValue()).subscribe({
      next: () => {
        this.msg = 'Usuario creado, por favor haz login';
        this.router.navigateByUrl('/login');
      },
      error: () => (this.error = 'No se pudo registrar (username repetido)'),
    });
  }
}
