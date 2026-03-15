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
  isMenuOpen = false;
   activeLink = '';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

setActive(section: string) {
    this.activeLink = section;
    this.isMenuOpen = false; 
}
}
