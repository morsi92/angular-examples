import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { StockChangeEvent } from '../../models/stockChangeEvent';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: []
})
export class StockComponent implements OnInit {

  products : Product[];
  title : string = 'Products';

  constructor() { }

  ngOnInit(): void {
    this.products = this.getProducts();
  }

   getProducts() : Product[]  {
     return [
       new Product('1', 'Screw driver', 400, 11),
       new Product('2', 'Nut volt', 200, 5)
     ];
  }

  handleUpdateStockEvent(event: StockChangeEvent) {
      var product= this.products.find(p => p.id === event.productId);
      product.stock = product.stock + event.updatedStock;
  }

}
