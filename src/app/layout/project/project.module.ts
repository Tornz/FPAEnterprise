import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';


import { PageHeaderModule } from '../../shared';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';

@NgModule({
    imports: [CommonModule, Ng2Charts, ProjectRoutingModule, PageHeaderModule],
    declarations: [ProjectComponent]
})
export class ProjectModule {}
