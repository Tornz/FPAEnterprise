import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import { PageHeaderModule } from '../../shared';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';

//Services
import {ProjectServices} from '../../data-services/project.services'

@NgModule({
    imports: [CommonModule, Ng2Charts, ProjectRoutingModule, PageHeaderModule,ReactiveFormsModule, FormsModule, TableModule ],
    declarations: [ProjectComponent],
    providers: []
})
export class ProjectModule {}
