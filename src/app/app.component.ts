import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPage: number = 1;
  totalPages!: number;
  goToPage($event: number) {
    throw new Error('Method not implemented.');
  }
  title = 'weather-app';
}
