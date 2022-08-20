import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass']
})
export class BookListComponent implements OnInit {
  books: Array<any> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks() {
    this.apiService.getBooks().subscribe((data: any) => {
      this.books = data;
    });
  }

}
