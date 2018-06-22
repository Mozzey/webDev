import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputmessage',
  templateUrl: './inputmessage.component.html',
  styleUrls: ['./inputmessage.component.css']
})
export class InputmessageComponent implements OnInit {
  username = '';
  allowReset = false;

  constructor() {
   }

  ngOnInit() {
  }

  inputCheck(event: Event) {
    ((<HTMLInputElement>event.target).value !== '') ? this.allowReset = true : this.allowReset = false;
  }

  onResetClick() {
    this.username = '';
    this.allowReset = false;
  }
}