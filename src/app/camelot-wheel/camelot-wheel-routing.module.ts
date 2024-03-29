import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamelotWheelComponent } from './camelot-wheel.component';

const routes: Routes = [
    {
        path: '',
        component: CamelotWheelComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamelotWheelRoutingModule { }
