import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages!: number;
  @Output() pageChanged = new EventEmitter<number>();

  goToPage(page: number) {
    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
  }
}
