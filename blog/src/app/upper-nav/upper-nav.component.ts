import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upper-nav',
  templateUrl: './upper-nav.component.html',
  styleUrls: ['./upper-nav.component.css']
})
export class UpperNavComponent implements OnInit {
  title: string = 'Angular Blog App';
  user: any [];

  constructor(private router: Router) {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.user);
  }

  ngOnInit() {
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
