import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';

import { AppRoutingModule } from './app-routing-module';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    AppRoutingModule,
    RouterOutlet,
  
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  

}
