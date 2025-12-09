import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from '../item-card/item-card.component';
import { Product } from '../../../core/models/product.interface';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, FormsModule],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent implements OnInit {
  searchQuery: string = '';
  
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  get filteredProducts() {
    return this.products.filter(product => 
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  handleItemClick(product: Product) {
    console.log('Вибрано товар:', product.name, '| Ціна:', product.price);
  }
}