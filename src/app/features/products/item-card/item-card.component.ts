<<<<<<< HEAD
import { Component, Input } from '@angular/core';
=======
import { Component, Input, Output, EventEmitter } from '@angular/core';
>>>>>>> pr-04-component-interaction
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
<<<<<<< HEAD
=======

  @Output() itemClicked = new EventEmitter<Product>();

  onItemClick() {
    this.itemClicked.emit(this.product);
  }
>>>>>>> pr-04-component-interaction
}