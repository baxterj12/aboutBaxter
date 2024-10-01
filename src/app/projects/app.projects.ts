import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,MatIconModule,HttpClientModule, CommonModule],
  templateUrl: './app.projects.html',
  styleUrl: './app.projects.css',
})
export class ProjectComponent {
  title = 'Projects';
  data: any = [];  // Initialize an empty array to hold JSON data

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch data from JSON file using HttpClient
    this.http.get('assets/projectdata.json').subscribe((response: any) => {
      this.data = response; // Assign the JSON data to the component variable
    });
  }
}
