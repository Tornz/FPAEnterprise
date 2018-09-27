import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhasingComponent } from './phasing.component';
import { FPAComponent } from './fpa/fpa.component';
import { BackLogsComponent } from './fpa/backlogs/backlogs.component';

const routes: Routes = [
    {
        path: '',
        component: PhasingComponent,
    },
    { path: 'fpa', component: FPAComponent }    
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PhasingRoutingModule {}
