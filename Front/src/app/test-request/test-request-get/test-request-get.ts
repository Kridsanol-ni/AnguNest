import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Book } from './test-get';

@Component({
  selector: 'app-test-request-get',
  standalone: false,
  templateUrl: './test-request-get.html',
  styleUrl: './test-request-get.scss'
})
export class TestRequestGet implements OnInit{

  bookList: Book[] = [];
  constructor(private http: HttpClient){}


  ngOnInit(): void {

  }

  searchBookList(name:string){
      this.http.get<Book[]>('https://www.anapioficeandfire.com/api/books?name='+name).subscribe(response=>{
        this.bookList = response;
      })
  }
}
