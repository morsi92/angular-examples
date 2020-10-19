import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ReactiveFormExampleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormModule { }
