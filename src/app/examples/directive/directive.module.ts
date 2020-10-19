import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [DirectiveDemoComponent, HighlightDirective],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
