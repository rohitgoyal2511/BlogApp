import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-complete-blog',
  templateUrl: './complete-blog.component.html',
  styleUrls: ['./complete-blog.component.css']
})
export class CompleteBlogComponent implements OnInit {

  URL: string;
  author: string;
  body: string;
  title: string;

  constructor() {
    this.URL = JSON.parse(sessionStorage.getItem("completeBlog")).URL;
    this.author = JSON.parse(sessionStorage.getItem("completeBlog")).author;
    this.body = JSON.parse(sessionStorage.getItem("completeBlog")).body;
    this.title = JSON.parse(sessionStorage.getItem("completeBlog")).title;
    console.log(this.URL);
  }

  ngOnInit() {
  }

}
