import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemCardComponent } from '../item-card/item-card.component';
import { Product } from '../../../core/models/product.interface';
import { ProductsService } from '../../../core/services/products.service';

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
    this.products$ = this.productsService.filterProducts(this.searchQuery);
  }

  handleItemClick(product: Product): void {
    console.log(product.name);
  }
}