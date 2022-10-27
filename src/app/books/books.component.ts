import { Component, OnInit } from '@angular/core';
import { Books } from '../interfaces/book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  name: string = 'Sample Book';
  author: string = 'Shijo';
  imgUrl: string = "https://m.media-amazon.com/images/I/71gfBC95RIL._AC_UY327_FMwebp_QL65_.jpg";

  // creating BookList
  bookList: Books[] = [];

  cart: Books[] = [];

  isDisplayed: boolean = false;
  btnName: string = 'Show Books';
  myName: string = '';

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {

    this.bookList = this.bookService.getBooks();
  }

  // NOTE: Books component is parent, Book component is child

  toggleDisplay() {
    this.isDisplayed = !this.isDisplayed;
    if (this.isDisplayed) {
      this.btnName = 'Hide Books';
    } else {
      this.btnName = 'Show Books';
    }

  }
  addToCartParent(eachBookItem: Books) {
    console.log('data From child to parent', eachBookItem);

  }
}
