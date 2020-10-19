import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitterExampleModule } from './event-emitter-example/event-emitter-example.module';
import { ExamplesComponent } from './examples/examples.component';
import { RouterModule, Routes } from '@angular/router';
import { EventEmitterExampleComponent } from './event-emitter-example/event-emitter-example/event-emitter-example.component';
import { CustomPipeModule } from './custom-pipe/custom-pipe.module';
import { CustomPipeComponent } from './custom-pipe/components/customer-pipe/custom-pipe.component';
import { HttpCallModule } from './http-call/http-call.module';
import { HttpCallExampleComponent } from './http-call/http-call-example/http-call-example.component';
import { DirectiveModule } from './directive/directive.module';
import { DirectiveDemoComponent } from './directive/directive-demo/directive-demo.component';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { ReactiveFormExampleComponent } from './reactive-form/reactive-form-example/reactive-form-example.component';

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
  },
  {
    path: 'examples/http-call',
    pathMatch: 'full',
    component: HttpCallExampleComponent
  },
  {
    path: 'examples/directive',
    pathMatch: 'full',
    component: DirectiveDemoComponent
  },
  {
    path: 'examples/reactive-form',
    pathMatch: 'full',
    component: ReactiveFormExampleComponent
  }
]

@NgModule({
  declarations: [ExamplesComponent],
  imports: [
    CommonModule,
    EventEmitterExampleModule,
    RouterModule.forChild(EXAMPLES_ROUTES),
    CustomPipeModule,
    HttpCallModule,
    DirectiveModule,
    ReactiveFormModule
  ]
})
export class ExamplesModule { }
