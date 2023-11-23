import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
@Injectable({
  providedIn: 'root',
})
export class ServicesComponent {
  isDarkMode: boolean = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private applyTheme(): void {
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
