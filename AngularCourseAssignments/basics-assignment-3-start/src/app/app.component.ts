import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideSecret = true;
  counter = 0;
  clicks = [];

  addItem() {
    this.counter++;
    this.clicks.push(this.counter);
    this.hideSecret = false;
  }

  // onClickValue(event: Event) {
  //   console.log(event);
  // }
}
