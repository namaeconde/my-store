import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BOOKS_API_URL = 'https://calm-meadow-25958.herokuapp.com/books';
  constructor(private httpClient: HttpClient) { }

  getBooks() {
    return this.httpClient.get(`${this.BOOKS_API_URL}`);
  }
}
