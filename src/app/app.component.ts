import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dev-assign';
  constructor(private router: Router) { }

  toMainPage() {
    this.router.navigate(['/main-page']); // Navigates to the 'other' route
  }
}
