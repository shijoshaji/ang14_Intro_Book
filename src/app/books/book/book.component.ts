import { Component, Input, OnInit } from '@angular/core';
import { Books } from '../../interfaces/book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() eachBookItem: Books = {} as Books;

  constructor() { }

  ngOnInit(): void {
  }

}
