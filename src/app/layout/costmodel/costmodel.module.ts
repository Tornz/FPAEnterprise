import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


;
import { PageHeaderModule } from './../../shared';
import { CostModelComponent } from './costmodel.component';
import { CostModelRoutingModule } from './costmodel-routing.module';
import { CostModelDetailsComponent } from './costmodeldetails/costmodeldetails.component';


@NgModule({
    imports: [CommonModule, CostModelRoutingModule, PageHeaderModule],
    declarations: [CostModelComponent,CostModelDetailsComponent]
})
export class CostModelModule {}
