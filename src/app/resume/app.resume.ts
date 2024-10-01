import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; 
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatIconModule,HttpClientModule],
  templateUrl: './app.resume.html',
  styleUrl: './app.resume.css',
})
export class ResumeComponent {
  title = 'Resume';
}