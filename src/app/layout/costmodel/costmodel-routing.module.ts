import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CostModelComponent } from './costmodel.component';
import { CostModelDetailsComponent } from './costmodeldetails/costmodeldetails.component';

const routes: Routes = [
    {
        path: '',
        component: CostModelComponent
    },
    { path: 'costmodeldetails', component: CostModelDetailsComponent }    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CostModelRoutingModule {}
