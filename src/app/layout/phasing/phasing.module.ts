import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotTableModule } from '@handsontable/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Select2Module } from 'ng2-select2';
import { BacklogServices } from '../../data-services/backlog.services';
import { ComponentServices } from '../../data-services/component.services';
import { FunctionsServices } from '../../data-services/functions.services';
import { HardwareService } from '../../data-services/hardware.services';
import { MappingServices } from '../../data-services/mapping.services';
import { ModulesServices } from '../../data-services/modules.services';
import { TechComponentServices } from '../../data-services/techComponent.services';
import { UserStoryServices } from '../../data-services/userStory.services';
import { TableFilterPipe } from '../../shared/pipes/table-filter.pipe';
import { BackLogsComponent } from './fpa/backlogs/backlogs.component';
import { ComponentsComponent } from './fpa/components/components.component';
import { EstimationComponent } from './fpa/estimation/estimation.component';
import { FPAComponent } from './fpa/fpa.component';
import { FunctionsComponent } from './fpa/functions/functions.component';
import { HardwareComponent } from './fpa/hardware/hardware.component';
import { ImplementationComponent } from './fpa/implementation/implementation.component';
import { MappingComponent } from './fpa/mapping/mapping.component';
import { ModulesComponent } from './fpa/modules/modules.component';
import { PhysicalContainerComponent } from './fpa/physical-container/physical-container.component';
import { SoftwareCategoryComponent } from './fpa/software-component/software-component.component';
import { UserStoryComponent } from './fpa/user-story/user-story.component';
import { PhasingRoutingModule } from './phasing-routing.module';
import { PhasingComponent } from './phasing.component';

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
                PhysicalContainerComponent,
                TableFilterPipe,
                FunctionsComponent,
                SoftwareCategoryComponent,
                ModulesComponent,
                HardwareComponent
        ],
        providers: [
                BacklogServices,
                UserStoryServices,
                TechComponentServices,
                ComponentServices,
                FunctionsServices,
                MappingServices,
                ModulesServices,
                HardwareService
        ]
})
export class PhasingModule { }
