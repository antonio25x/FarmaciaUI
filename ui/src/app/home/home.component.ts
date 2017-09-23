import { Component, OnInit } from '@angular/core';
import { Menu } from "../menu/menu.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuItems : Menu[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      new Menu("Usuarios", "users", "Manage Users"),
      new Menu("Sales", "sales", "Manage Sales"),
      new Menu("Clients", "clients", "Manage Sales"),
      new Menu("Medicines", "medicine", "Manage Sales"),
      new Menu("Reports", "reports", "Manage Sales"),
    ];
  }

}
