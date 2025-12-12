import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../item-card/item-card.component';
import { Product } from '../../../core/models/product.interface';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: 45000,
      image: 'https://content2.rozetka.com.ua/goods/images/big/592111676.jpg',
      inStock: true,
      discount: 10
    },
    {
      id: 2,
      name: 'MacBook Air M2',
      price: 52000,
      image: 'https://content.rozetka.com.ua/goods/images/big/486195990.jpg',
      inStock: true
    },
    {
      id: 3,
      name: 'AirPods Pro 2',
      price: 11000,
      image: 'https://content.rozetka.com.ua/goods/images/big/594443650.jpg',
      inStock: false
    },
    {
      id: 4,
      name: 'Sony PlayStation 5',
      price: 24000,
      image: 'https://content2.rozetka.com.ua/goods/images/big/529294298.jpg',
      inStock: true,
      discount: 5
    }
  ];
}