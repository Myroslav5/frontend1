import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from '../item-card/item-card.component';
import { Product } from '../../../core/models/product.interface';
import { ProductsService } from '../../../core/services/products.service';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, FormsModule, RouterModule],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent implements OnInit {
  searchQuery: string = '';
  
  products$!: Observable<Product[]>; 

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  onSearchChange(): void {
    this.productsService.filterProducts(this.searchQuery);
  }

  handleItemClick(product: Product) {
    console.log('Клік:', product.name);
  }
}