import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hor-nav-bar',
  templateUrl: './hor-nav-bar.component.html',
  styleUrls: ['./hor-nav-bar.component.css']
})
export class HorNavBarComponent implements OnInit {

  isCollapsed: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  toggleState() {
    let oldValue = this.isCollapsed;
    this.isCollapsed = oldValue === false ? true : false;
  }
}
