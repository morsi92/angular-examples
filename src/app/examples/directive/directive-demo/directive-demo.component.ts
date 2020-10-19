import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styles: [
  ]
})
export class DirectiveDemoComponent implements OnInit {

  color : string = 'red';

  constructor() { }

  ngOnInit(): void {
  }

}
