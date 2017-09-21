import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-hor-nav-bar',
  templateUrl: './hor-nav-bar.component.html',
  styleUrls: ['./hor-nav-bar.component.css']
})
export class HorNavBarComponent implements OnInit {

  isCollapsed: boolean = false;
  
  constructor(private router : Router) { }

  ngOnInit() {
  }

  toggleState() {
    let oldValue = this.isCollapsed;
    this.isCollapsed = oldValue === false ? true : false;
  }

  goSearch (term : string) : boolean {
    this.router.navigate(['/search', term]);

    //the return false prevent the page from reloading... weird...
    return false;
  }

}
