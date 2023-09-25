import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent {

  @Input() searchHistory: { city: string, weatherData: any, forecastData: any }[] = [];
  @Output() citySelected = new EventEmitter<string>();

  city: string = '';
  weatherData: any;
  forecastData: any;

  constructor(public weatherService: WeatherService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchHistory']) {
      this.loadDataFromMostRecent();
    }
  }

  loadDataFromMostRecent() {
    const recentData = this.searchHistory[this.searchHistory.length - 1]; 
    if (recentData) {
      this.city = recentData.city;
      this.weatherData = recentData.weatherData;
      this.forecastData = recentData.forecastData;
    }
  }

  deleteHistory(index: number) {
    if (index > -1 && index < this.searchHistory.length) {
      this.searchHistory.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    localStorage.setItem('weatherSearchHistory', JSON.stringify(this.searchHistory));
  }
  
  
}

