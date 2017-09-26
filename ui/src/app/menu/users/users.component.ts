import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: string[];
  showLoading: boolean = false;

  constructor(private http: Http) { }

  ngOnInit() {

    this.showLoading = true;

    this.http.get('https://pi-spring-boot-pi-test-sb.1d35.starter-us-east-1.openshiftapps.com/users')
      .subscribe(
        res => {
          this.users = res.json();
          this.showLoading = false;
        },
        error => {
          this.showLoading = false;
        }
      );
  }

}
