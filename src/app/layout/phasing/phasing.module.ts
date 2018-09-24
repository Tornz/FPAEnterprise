import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Select2Module } from 'ng2-select2';

import { PhasingRoutingModule } from './phasing-routing.module';
import { PhasingComponent } from './phasing.component';
import { FPAComponent } from './fpa/fpa.component';
import { BackLogsComponent } from './fpa/backlogs/backlogs.component';
import { EstimationComponent } from './fpa/estimation/estimation.component';
import { ImplementationComponent } from './fpa/implementation/implementation.component';
import { HotTableModule } from '@handsontable/angular';
import { UserStoryComponent } from './fpa/user-story/user-story.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FpaServices} from '../../services/fpa.services'
import { BacklogServices } from '../../data-services/backlog.services';



@NgModule({
    imports: [CommonModule, PhasingRoutingModule, HotTableModule, FormsModule, ReactiveFormsModule, Select2Module],
    declarations: [PhasingComponent,
        FPAComponent,
        BackLogsComponent,
        EstimationComponent,
        ImplementationComponent,
        UserStoryComponent],
        providers: [BacklogServices]
})
export class PhasingModule {}
