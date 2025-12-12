import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent {
  
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
    image: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    inStock: new FormControl(true)
  });

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value as any;
      
      this.productsService.addProduct(newProduct);
      
      this.router.navigate(['/items']);
    }
  }
}