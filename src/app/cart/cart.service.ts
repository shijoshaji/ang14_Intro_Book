import { Injectable } from '@angular/core';
import { Books } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Books[] = [];

  constructor() { }

  add(value:Books){
    console.log('service to add to cart',value);
    this.cart.push(value)
    
  }

  get(){
    console.log('GET CART',this.cart);
    return this.cart
    
  }

  remove(value: Books){
    console.log('Remove element from cart');
    this.cart=this.cart.filter(b=> b!=value)
    
  }
}
