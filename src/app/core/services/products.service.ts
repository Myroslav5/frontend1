import { Injectable } from '@angular/core';
import { Product } from '../../core/models/product.interface';
<<<<<<< HEAD
=======
import { BehaviorSubject, Observable } from 'rxjs';
>>>>>>> pr-06-rxjs-observables

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
<<<<<<< HEAD
  private products: Product[] = [
 {
=======
  
  private allProducts: Product[] = [
    {
>>>>>>> pr-06-rxjs-observables
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

<<<<<<< HEAD
  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
=======
  private productsSubject = new BehaviorSubject<Product[]>(this.allProducts);

  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  filterProducts(searchQuery: string): void {
    const lowerQuery = searchQuery.toLowerCase();
    
    const filtered = this.allProducts.filter(product => 
      product.name.toLowerCase().includes(lowerQuery)
    );

    this.productsSubject.next(filtered);
  }
}
>>>>>>> pr-06-rxjs-observables
