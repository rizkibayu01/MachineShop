import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Pelumas',
      expanded: true,
      products: [
        { id: 0, name: 'Yamalube', price: '80000' },
        { id: 1, name: 'Kastrol', price: '50000' },
        { id: 2, name: 'Motul', price: '90000' },
        { id: 3, name: 'Federal', price: '70000' }
      ]
    },
    {
      category: 'SparePart',
      products: [
        { id: 4, name: 'Spion', price: '30000' },
        { id: 5, name: 'Mesin', price: '2000000' }
      ]
    },
    {
      category: 'Ban',
      products: [
        { id: 6, name: 'Pirelli', price: '800000' },
        { id: 7, name: 'IRC', price: '500000' },
        { id: 8, name: 'Michelin', price: '900000' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}