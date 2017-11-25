import {Component, OnInit, Output} from '@angular/core';
import {WebServiceService} from '../web-service.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {

  title: string;
  author: string;
  URL: string;
  body: string;
  secretkey: string;


  constructor(private service: WebServiceService, private router: Router) {
    this.author = JSON.parse(sessionStorage.getItem("user")).author;
  }

  ngOnInit() {
  }

  clicked() {
    let data = {
      "title": this.title,
      "author": this.author,
      "URL": this.URL,
      "body": this.body,
      /* "secretKey" : JSON.parse(sessionStorage.getItem("user")).secretKey*/
    };
    console.log("from new blog:  " + data.author + " " + data.URL);
    this.service.create(data)
      .subscribe(() => {
        console.log("block created succesfully");
        this.router.navigate(['blog']);

      });
  }

}
