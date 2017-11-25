import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Response} from "@angular/http"
import {Blog} from '../../BlogModel';
import {login} from '../../loginResponse'

// middleware Rest Service URL
const BASE_URL = 'http://localhost:4000/';
const header = {headers: new Headers({'content-type': 'application/json'})};

@Injectable()
export class WebServiceService {

  constructor(private http: Http) { }

  // login is called when user wants to login with its secretKey
  login(username , password): Observable<login> {

    const jsonData = {
        'username': username,
         'password': password
    };
    const extension = BASE_URL + 'user/login';

    return this.http.post(extension, jsonData, header)
      .map((res: Response) => {
        console.log(res);
        return res.json()
      })
  }

  create(data) : Observable<Response> {
    console.log(data.author + " " + data.URL);
    const extension = BASE_URL + 'blog/create';
     return this.http.post(extension, data , header);
  }

  update(data) : Observable<Response> {
    console.log(data.author + " " + data.URL);
    const extension = BASE_URL + 'blog/update';
    return this.http.post(extension, data , header);
  }

  getBlogs() : Observable<Blog []>{
    const extension = BASE_URL + 'blog/';
    return this.http.get(extension, header)
      .map((res : Response) =>{
      return res.json();
      });
  }

  like(id , secretKey) : Observable<login> {
    const data = {
      "_id" : id,
      "secretKey" : secretKey
    };
    console.log("enter into like blog angular" + id +  "  " + secretKey );
    const extension = BASE_URL + 'user/like';
    return this.http.post(extension, data, header)
       .map((res: Response) => {
         console.log(res);
        return res.json()
      });
  }

  dislike(id , secretKey) : Observable<login> {
    const data = {
      "_id" : id,
      "secretKey" : secretKey
    };
    console.log("enter into dislike blog angular" + id +  "  " + secretKey );
    const extension = BASE_URL + 'user/dislike';
    return this.http.post(extension, data, header)
      .map((res: Response) => {
        console.log(res);
        return res.json()
      });
  }

  delete(data) : Observable<Blog []> {
    console.log("data._id");
    const extension = BASE_URL + 'blog/delete';
    return this.http.post(extension , data ,header)
      .map((res: Response) => {
      return res.json();
      })
  }
}
