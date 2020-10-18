import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitterExampleModule } from './event-emitter-example/event-emitter-example.module';
import { ExamplesComponent } from './examples/examples.component';
import { RouterModule, Routes } from '@angular/router';
import { EventEmitterExampleComponent } from './event-emitter-example/event-emitter-example/event-emitter-example.component';
import { CustomPipeModule } from './custom-pipe/custom-pipe.module';
import { CustomPipeComponent } from './custom-pipe/components/customer-pipe/custom-pipe.component';

const EXAMPLES_ROUTES : Routes = [
  {
    path: 'examples/event-emitter',
    pathMatch: 'full',
    component: EventEmitterExampleComponent
  },
  {
    path: 'examples/customer-pipe',
    pathMatch: 'full',
    component: CustomPipeComponent
  }
]

@NgModule({
  declarations: [ExamplesComponent],
  imports: [
    CommonModule,
    EventEmitterExampleModule,
    RouterModule.forChild(EXAMPLES_ROUTES),
    CustomPipeModule
  ]
})
export class ExamplesModule { }
