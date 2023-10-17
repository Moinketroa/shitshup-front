import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamelotWheelRoutingModule } from './camelot-wheel-routing.module';
import { CamelotWheelComponent } from './camelot-wheel.component';
import { CamelotWheelSvgComponent } from './camelot-wheel-svg/camelot-wheel-svg.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    declarations: [
        CamelotWheelComponent,
        CamelotWheelSvgComponent,
    ],
    imports: [
        CommonModule,
        CamelotWheelRoutingModule,

        MatCardModule,
    ],
})
export class CamelotWheelModule {
}
