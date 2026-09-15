import { Component } from '@angular/core';
import { ProductList } from './components/product-list/product-list';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}