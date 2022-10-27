import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Books } from '../../interfaces/book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  eachBookItem: Books = {} as Books;

  isInCart: boolean = false;

  // @Output()
  // emitBook = new EventEmitter<Books>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCartChild() {
    // console.log('Add to cart FROM CHILD', this.eachBookItem);
    // this.emitBook.emit(this.eachBookItem);
    this.cartService.add(this.eachBookItem);
    this.isInCart = true;

  }


  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.eachBookItem);
  }

}
