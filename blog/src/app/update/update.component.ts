import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {WebServiceService} from '../web-service.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  title: string;
  body: string;
  URL: string;
  author: string;
  _id: string;

  constructor(private router: Router, private service: WebServiceService) {
    this.title = JSON.parse(sessionStorage.getItem("update")).title;
    this.body = JSON.parse(sessionStorage.getItem("update")).body;
    this.URL = JSON.parse(sessionStorage.getItem("update")).URL;
    this.author = JSON.parse(sessionStorage.getItem("update")).author;
    this._id = JSON.parse(sessionStorage.getItem("update"))._id;
  }

  ngOnInit() {
  }

  clicked() {
    let data = {
      "title": this.title,
      "author": this.author,
      "URL": this.URL,
      "body": this.body,
      "_id": this._id
      /* "secretKey" : JSON.parse(sessionStorage.getItem("user")).secretKey*/
    };
    console.log("from new blog:  " + data.author + " " + data.URL);
    this.service.update(data)
      .subscribe(() => {
        console.log("block updated succesfully");
        this.router.navigate(['blog']);
      });
  }

}
