import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitterExampleComponent } from './event-emitter-example/event-emitter-example.component';
import { StockComponent } from './components/stock/stock.component';
import { StockStatusComponent } from './components/stock-status/stock-status.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EventEmitterExampleComponent, StockComponent, StockStatusComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EventEmitterExampleModule { }
