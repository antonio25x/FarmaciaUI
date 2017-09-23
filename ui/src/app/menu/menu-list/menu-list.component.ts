import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Menu } from "../menu.model";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  @Input("menu") menu : Menu;
  time : Date;

  constructor(private router : Router) {
  }

  ngOnInit() {
    this.time = new Date();
  }

  navigateTo ( menu : Menu ) {
    this.router.navigate(["/" + menu.url.toLowerCase()]);
  }
}
