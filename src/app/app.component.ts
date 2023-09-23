import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadCityWeather($event: string) {
    throw new Error('Method not implemented.');
  }
  goToPage($event: number) {
    throw new Error('Method not implemented.');
  }
  title = 'weather-app';
}
