import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.sass']
})
export class SearchHistoryComponent {

  @Input() searchHistory: string[] = [];
  @Output() citySelected = new EventEmitter<string>();

  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 10;  // or whatever makes sense for your UI
  totalPages: number;

  constructor() {
    // Calculate total pages based on itemsPerPage
    this.totalPages = Math.ceil(this.searchHistory.length / this.itemsPerPage);
  }

  loadCityWeather(city: string) {
    this.citySelected.emit(city);
  }

  // Add methods to handle pagination
  // ...

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // This function returns the items to be displayed on the current page
  paginatedHistory(): string[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.searchHistory.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // ...

}

