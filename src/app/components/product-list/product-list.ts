import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../header/header';

interface Product{
  name: string;
  price: number;
  sold: string;
  discount: string;
  preferred: boolean;
  favorite: boolean;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
 products: Product[] = [
  {
    name: 'ILU New Style Milan Korean Sandals',
    price: 1,
    sold: '10k+ Sol',
    discount: '-99%',
    preferred: true,
    favorite: false,
  },
  {
    name: 'Classic High Cut Canvas Shoes for Women and Men',
    price: 188,
    sold: '10k+ Sold',
    discount: '-46%',
    preferred: false,
    favorite: true,
  },
  {
    name: 'Mens Solid Color Cotton Briefs HIgh Quality BENCH',
    price: 119,
    sold: '10+ sold',
    discount: '-50%',
    preferred: false,
    favorite: true,
  },

{
  name: '45pcs/set Tool Box Car Motorcycle Repair',
  price: 235,
  sold: '10k Sold',
  discount: '-58%',
  preferred: true,
  favorite: false,
},
{
  name: 'OTAKU T-shirt for Men with pockets Unisex',
  price: 179,
  sold: '4k Sold',
  discount: '-55%',
  preferred: true,
  favorite: false,
},
{
  name: 'Trolley Cart Oraganizer 2/3/4/5 Tier',
  price: 155,
  sold: '10k sold',
  discount:'-31%',
  preferred: true,
  favorite: false,
},
{
  name: 'JNK #FK101 Automatic Umbrella UPF',
  price: 160,
  sold: '10k sold',
  discount: '-68%',
  preferred: true,
  favorite: false,
},
{
  name: 'JNK #BH3100 Large Capacity Nylon',
  price: 180,
  sold: '4k sold',
  discount: '-15%',
  preferred: true,
  favorite: false,
  
},
{
  name: 'Cucumber Melon Perfume for Women 24H Lasting',
  price: 130,
  sold: '4k sold',
  discount: '-15%',
  preferred: true,
  favorite: false,
},

 ]
}
