import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemDiagramComponent } from './systemdiagram.component';

const routes: Routes = [
    {
        path: '',
        component: SystemDiagramComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemDiagramRoutingModule {}
