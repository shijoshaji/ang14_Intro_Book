import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  name: string = 'Sample Book';
  author: string = 'Shijo';
  imgUrl: string = "https://m.media-amazon.com/images/I/71gfBC95RIL._AC_UY327_FMwebp_QL65_.jpg";
  isDisabled: boolean = false;
  btnName: string = 'Toggler';
  myName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay() {
    this.isDisabled = true;
  }
}
