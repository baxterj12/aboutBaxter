import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.homePage.html',
  styleUrl: './app.homePage.css',
})
export class AppComponent {
  title = 'Baxter';
}
