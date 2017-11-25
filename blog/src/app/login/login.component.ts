import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WebServiceService} from '../web-service.service';
import {Router} from "@angular/router"
import {Blog} from '../../../BlogModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title : string = 'Angular Blog App';
  username: string;
  password: string;

  constructor(private service: WebServiceService, private router: Router) {

  }

  ngOnInit() {
  }

  disc(blog){
    sessionStorage.setItem("completeBlog" , JSON.stringify(blog));
    this.router.navigate(['completeBlog']);
  }

  submit() {
    this.service.login(this.username, this.password)
      .subscribe((result) => {
          sessionStorage.setItem("user", JSON.stringify(result));
          // result = JSON.stringify(result);
          if (result) {
            this.router.navigate(['blog']);
            console.log(result);

          }
          else {
            console.log(result);
          }
        }
      )
  }
}
