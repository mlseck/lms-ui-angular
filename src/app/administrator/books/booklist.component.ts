import {Component, OnInit} from '@angular/core';
import { Http } from "@angular/http";
import { Book } from "../../shared/models/book.model"
import { BookService } from "../../shared/services/book.service"

@Component({
  selector: 'list-books',
  templateUrl:'./booklist.component.html'
})

export class BookListComponent implements OnInit{
  public title = "Books";
  public books: Book[] = [];

  constructor(private bookService: BookService){}

  ngOnInit(){
    this.bookService
    .getAll()
    .subscribe(b => this.books = b, error => console.log(error));
  }
}
