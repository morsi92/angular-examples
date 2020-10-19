import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpCallExampleComponent } from './http-call-example/http-call-example.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HttpCallExampleComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class HttpCallModule { }
