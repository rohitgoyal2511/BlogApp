import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {WebServiceService} from '../web-service.service';
import {Blog} from '../../../BlogModel';
import {FilterPipe} from "../filter.pipe"

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {

  blogs: Blog [];
  likeBlogs: any [];
  id: string;
  author: string;
  del_id: string;
  term: string;

  constructor(private router: Router, private service: WebServiceService) {
    if (!sessionStorage.getItem("user")) {
      router.navigate(['']);
    }
    else {
      service.getBlogs()
        .subscribe((blogs) => {
          this.blogs = blogs;
          this.likeBlogs = JSON.parse(sessionStorage.getItem("user")).likeBlog;
          this.author = JSON.parse(sessionStorage.getItem("user")).author;
        });
    }
  }

  ngOnInit() {
  }

  disc(blog) {
    sessionStorage.setItem("completeBlog", JSON.stringify(blog));
    this.router.navigate(['completeBlog']);
  }

  like(id) {
    console.log(id + "  " + JSON.parse(sessionStorage.getItem("user")).secretKey);
    this.service.like(id, JSON.parse(sessionStorage.getItem("user")).secretKey)
      .subscribe((res) => {
        console.log(res);
        sessionStorage.setItem("user", JSON.stringify(res));
        this.likeBlogs = res['likeBlog'];
      });
  }

  dislike(id) {
    this.service.dislike(id, JSON.parse(sessionStorage.getItem("user")).secretKey)
      .subscribe((res) => {
        console.log(res);
        sessionStorage.setItem("user", JSON.stringify(res));
        this.likeBlogs = res['likeBlog'];
      });
  }

  update(row) {
    sessionStorage.setItem("update", JSON.stringify(row));
    this.router.navigate(['update']);
  }

  trash(id) {
    this.del_id = id;
    // console.log()
    document.getElementById("trash").click();
  }

  delete() {
    console.log(this.del_id);
    let data = {
      "_id": this.del_id
    };
    this.service.delete(data)
      .subscribe((blogs) => {
        this.blogs = blogs;
        console.log(blogs);
      })
  }

}
