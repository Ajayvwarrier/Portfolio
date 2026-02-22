import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',   // ✅ better naming convention
  styleUrls: ['./home.css']     // ✅ better naming convention
})
export class HomeComponent {
  title: string = 'Welcome to My Portfolio';   // ✅ proper type
}