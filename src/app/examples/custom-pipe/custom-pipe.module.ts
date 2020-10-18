import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { CustomPipeComponent } from './components/customer-pipe/custom-pipe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ExponentialStrengthPipe, CustomPipeComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CustomPipeModule { }
