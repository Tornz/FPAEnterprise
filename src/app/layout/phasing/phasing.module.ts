import { HardwareComponent } from './fpa/hardware/hardware.component';
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
import { LogicalContainerComponent } from './fpa/logicalContainer/logicalContainer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsComponent } from './fpa/components/components.component';
import { UserStoryComponent } from './fpa/user-story/user-story.component';
import { UserStoryServices } from '../../data-services/userStory.services'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BacklogServices } from '../../data-services/backlog.services';
import { TechComponentServices } from '../../data-services/techComponent.services';
import { LogicalContainerServices } from '../../data-services/logicalContainer.services';
import { FunctionsServices } from '../../data-services/functions.services';
import { PhysicalContainerComponent } from './fpa/physical-container/physical-container.component';
import { TableFilterPipe } from '../../shared/pipes/table-filter.pipe';
import { ComponentServices } from '../../data-services/component.services';
import { MappingComponent } from './fpa/mapping/mapping.component'
import { MappingServices} from '../../data-services/mapping.services';
import { FunctionsComponent } from './fpa/functions/functions.component';
import { SoftwareCategoryComponent } from './fpa/software-component/software-component.component'
import { HardwareService } from '../../data-services/hardware.services';

@NgModule({
        imports: [
                CommonModule,
                PhasingRoutingModule,
                HotTableModule,
                FormsModule,
                ReactiveFormsModule,
                Select2Module,
                NgbModule.forRoot(),
        ],
        declarations: [
                PhasingComponent,
                FPAComponent,
                MappingComponent,
                BackLogsComponent,
                EstimationComponent,
                ImplementationComponent,
                ComponentsComponent,
                UserStoryComponent,
                LogicalContainerComponent,
                PhysicalContainerComponent,
                TableFilterPipe,
                FunctionsComponent,
                SoftwareCategoryComponent,
                HardwareComponent
        ],
        providers: [
                BacklogServices,
                UserStoryServices,
                TechComponentServices,
                LogicalContainerServices,
                ComponentServices,
                FunctionsServices,
                MappingServices,
                HardwareService
        ]
})
export class PhasingModule { }
