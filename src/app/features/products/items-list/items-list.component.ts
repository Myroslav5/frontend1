import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from '../item-card/item-card.component';
import { Product } from '../../../core/models/product.interface';
import { ProductsService } from '../../../core/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent, FormsModule],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  products: Product[] = [];
  
  private subscription: Subscription = new Subscription();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    const sub = this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });

    this.subscription.add(sub);
  }

  onSearchChange(): void {
    this.productsService.filterProducts(this.searchQuery);
  }

  handleItemClick(product: Product) {
    console.log('Вибрано товар:', product.name, '| Ціна:', product.price);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}