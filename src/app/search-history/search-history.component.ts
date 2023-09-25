import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent {

  @Input() searchHistory: { city: string, weatherData: any, forecastData: any }[] = [];
  @Output() citySelected = new EventEmitter<string>();

  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 5;  
  totalPages: number;
  city: string = '';
  weatherData: any;
  forecastData: any;

  constructor(public weatherService: WeatherService) {
    // Calculate total pages based on itemsPerPage
    this.totalPages = Math.ceil(this.searchHistory.length / this.itemsPerPage);
  }

  ngOnInit() {
    // Load data for the first page
    this.loadDataFromPage(0);
  }


  // Add methods to handle pagination

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadDataFromPage(this.currentPage - 1); // Arrays are 0-indexed
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadDataFromPage(this.currentPage - 1);
    }
  }


  loadDataFromPage(pageIndex: number) {
    const selectedData = this.searchHistory[pageIndex];
    if (selectedData) {
      this.city = selectedData.city;
      this.weatherData = selectedData.weatherData;
      this.forecastData = selectedData.forecastData;
    }
  }

}

