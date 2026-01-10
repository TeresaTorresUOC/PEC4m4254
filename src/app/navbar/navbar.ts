import { Component, EventEmitter, Output } from '@angular/core';

type View = 'home' | 'articles' | 'new-template' | 'new-reactive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {

  @Output() sectionChange = new EventEmitter<View>();

  select(view: View) {
    this.sectionChange.emit(view);
  }

}
