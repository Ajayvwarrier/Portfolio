import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
setActive(arg0: string) {
throw new Error('Method not implemented.');
}
  isMenuOpen = false;
   activeLink = '';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
    scrollTo(section: string) {
  const el = document.getElementById(section);

  if (el) {
    (el as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  this.activeLink = section;
  this.isMenuOpen = false;
}
}
