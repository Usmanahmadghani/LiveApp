import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path:'chil',component:ChildComponent
  },
  {
    path:'dummy',component:DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
