import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { UserStoreService } from '../shared/services/user-store.service';


type View = 'home' | 'articles' | 'new-template' | 'new-reactive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  constructor(
    private readonly userStore: UserStoreService,
    private readonly router: Router
  ) {}

  get isAuthenticated(): boolean {
    return this.userStore.isAuthenticated;
  }
  logout() {
    this.userStore.clear();
    this.router.navigateByUrl('/login');
  }
}
