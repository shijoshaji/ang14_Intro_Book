import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }


  getBooks(){
    return [
      {
        name: 'Do It Today',
        author: 'Darius Foroux',
        imgUrl: "https://m.media-amazon.com/images/I/71gfBC95RIL._AC_UY327_FMwebp_QL65_.jpg",
        amount: 259.00
      },
      {
        name: 'The Psychology of Money',
        author: 'Morgan Housel',
        imgUrl: "https://d2i0w0hu6hvxgc.cloudfront.net/B08FHZ5L47/648546d0/cover.jpeg",
        amount: 559.00
      },
      {
        name: 'Rich Dad Poor Dad',
        author: 'Robert T. Kiyosaki',
        imgUrl: "https://d2i0w0hu6hvxgc.cloudfront.net/B07C7M8SX9/4dc0769a/cover.jpeg",
        amount: 959.80
      }
    ];
  }
}
