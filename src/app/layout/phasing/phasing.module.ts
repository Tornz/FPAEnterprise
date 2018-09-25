import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhasingRoutingModule } from './phasing-routing.module';
import { PhasingComponent } from './phasing.component';
import { FPAComponent } from './fpa/fpa.component';
import { BackLogsComponent } from './fpa/backlogs/backlogs.component';
import { EstimationComponent } from './fpa/estimation/estimation.component';
import { ImplementationComponent } from './fpa/implementation/implementation.component';
import { HotTableModule } from '@handsontable/angular';
import { ComponentsComponent } from './fpa/components/components.component';

@NgModule({
    imports: [CommonModule, PhasingRoutingModule, HotTableModule],
    declarations: [PhasingComponent,
        FPAComponent,
        BackLogsComponent,
        EstimationComponent,
        ImplementationComponent,
        ComponentsComponent]
})
export class PhasingModule {}
