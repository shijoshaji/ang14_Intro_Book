import { Component, OnInit } from '@angular/core';


interface Books {
  name: string,
  author: string,
  imgUrl: string;
}


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
  bookList: Books[] = [
    {
      name: 'Do It Today',
      author: 'Darius Foroux',
      imgUrl: "https://m.media-amazon.com/images/I/71gfBC95RIL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      name: 'The Psychology of Money',
      author: 'Morgan Housel',
      imgUrl: "https://d2i0w0hu6hvxgc.cloudfront.net/B08FHZ5L47/648546d0/cover.jpeg",
    },
    {
      name: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
      imgUrl: "https://d2i0w0hu6hvxgc.cloudfront.net/B07C7M8SX9/4dc0769a/cover.jpeg",
    }
  ];
  isDisplayed: boolean = false;
  btnName: string = 'Show Books';
  myName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay() {
    this.isDisplayed = !this.isDisplayed;
    if (this.isDisplayed) {
      this.btnName = 'Hide Books';
    } else {
      this.btnName = 'Show Books';
    }

  }
}
