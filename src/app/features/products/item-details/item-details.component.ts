import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../../core/models/product.interface';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    if (id) {
      this.product = this.productsService.getProductById(id);
    }
  }
}