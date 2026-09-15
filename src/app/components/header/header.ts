import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  shopName: string = 'Shopee';

  searchText: string = '';

  cartCount: number = 0;

  @Output() search = new EventEmitter<string>();

  searchProducts(): void {
    this.search.emit(this.searchText);
  }
}
