import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserStoreService } from '../../shared/services/user-store.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.html',
})
export class LoginComponent {
  error = '';

  readonly form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService,
    private readonly userStore: UserStoreService,
    private readonly router: Router
  ) {
  
    if (this.userStore.isAuthenticated) {
      this.router.navigateByUrl('/article/list');
    }
  }

  submit() {
    this.error = '';
    if (this.form.invalid) return;

    this.userService.login(this.form.getRawValue()).subscribe({
      next: (res) => {
        this.userStore.setToken(res.token);
        this.router.navigateByUrl('/article/list');
      },
      error: () => (this.error = 'Login incorrecto'),
    });
  }
}
