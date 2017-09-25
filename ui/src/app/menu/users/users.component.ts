import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: string[];

  constructor(private http: Http) { }

  ngOnInit() {
    //TODO: Implement a method to let the user know we are waiting for info to come from server
    //loading feature
    this.http.get('http://pi-spring-boot-pi-test-sb.1d35.starter-us-east-1.openshiftapps.com/users')
      .subscribe(res => this.users = res.json() ) ;
  }

}
