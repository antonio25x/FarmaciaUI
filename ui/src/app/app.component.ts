import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Farmacia UI';
  isIn : boolean = false;

  toggleState() {
    let oldValue = this.isIn;
    this.isIn = oldValue === false ? true : false;
  }
}
