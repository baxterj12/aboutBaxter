import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatIconModule, HttpClientModule, CommonModule],
  templateUrl: './app.skills.html',
  styleUrl: './app.skills.css',
})
export class SkillsComponent {
  title = 'Skills';
  data: any = [];  // Initialize an empty array to hold JSON data

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch data from JSON file using HttpClient
    this.http.get('assets/skillsdata.json').subscribe((response: any) => {
      this.data = response; // Assign the JSON data to the component variable
    });
  }
}
