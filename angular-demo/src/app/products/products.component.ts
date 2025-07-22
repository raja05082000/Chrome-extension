import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { name: 'Smartphone', description: 'High-performance Android phone', price: 14999 },
    { name: 'Laptop', description: 'Lightweight laptop for professionals', price: 52999 },
    { name: 'Headphones', description: 'Wireless noise-cancelling headphones', price: 2999 },
    { name: 'Smartwatch', description: 'Fitness tracking with stylish design', price: 3999 },
  ];
}
