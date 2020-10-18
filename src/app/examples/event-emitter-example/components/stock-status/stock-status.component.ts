import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { StockChangeEvent } from '../../models/stockChangeEvent';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html'
})
export class StockStatusComponent implements OnChanges {

  @Input() 
  productId : string;

  @Input()
  stock : number;

  @Output()
  stockValueChangeEvent = new EventEmitter();

  updatedStockValue: number;
  buttonClass : string = 'btn btn-primary';

  stockValueChanged() {
    this.stockValueChangeEvent.emit(new StockChangeEvent(this.productId, this.updatedStockValue));
  }


  constructor() { }

  ngOnChanges(): void {
    console.log('product : ' + this.productId + ' stock : ' + this.stock);
    if (this.stock > 10) {
      this.buttonClass = 'btn btn-success';
    } else {
      this.buttonClass = 'btn btn-danger';
    }
  }

}
