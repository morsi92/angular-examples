import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './examples/examples/examples.component';

const routes : Routes = [
  {
    path: '', 
    redirectTo: '/examples', 
    pathMatch:'full'
  },
  {
    path: 'examples',
    pathMatch: 'full',
    component: ExamplesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
