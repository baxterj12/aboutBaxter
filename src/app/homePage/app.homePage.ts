import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.homePage.html',
  styleUrl: './app.homePage.css',
})
export class HomeComponent {
  title = 'Baxter';
}
