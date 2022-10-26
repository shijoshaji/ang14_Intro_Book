import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Books } from '../../interfaces/book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input()
  eachBookItem: Books = {} as Books;

  @Output()
  emitBook = new EventEmitter<Books>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCartChild() {
    console.log('Add to cart FROM CHILD', this.eachBookItem);
    this.emitBook.emit(this.eachBookItem);

  }

}
