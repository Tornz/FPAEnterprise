import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


;
import { PageHeaderModule } from '../../shared';
import { CostModelComponent } from './costmodel.component';
import { CostModelRoutingModule } from './costmodel-routing.module';
import { CostModelDetailsComponent } from './costmodeldetails/costmodeldetails.component';
import { CostModelServices } from '../../data-services/costModel.services';


@NgModule({
    imports: [CommonModule, CostModelRoutingModule, PageHeaderModule],
    declarations: [CostModelComponent,CostModelDetailsComponent],
    providers:[CostModelServices]
})
export class CostModelModule {}
