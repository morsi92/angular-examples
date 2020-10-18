import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html'
})
export class CustomPipeComponent implements OnInit {

  numberToTransform: number;
  exponent: number

  constructor() { }

  ngOnInit(): void {
  }

}
