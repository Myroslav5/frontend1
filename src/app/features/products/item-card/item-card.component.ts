import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product.interface';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input() product!: Product;

  @Output() itemClicked = new EventEmitter<Product>();

  onItemClick() {
    this.itemClicked.emit(this.product);
  }
}