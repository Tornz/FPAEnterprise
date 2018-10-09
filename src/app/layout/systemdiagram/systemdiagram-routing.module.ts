import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemDiagramComponent } from './systemdiagram.component';
import { DiagramEditorComponent } from './diagramEditor/diagrameditor.component';

const routes: Routes = [
    { path: '', component: SystemDiagramComponent },
    { path: 'editor/:projId/:sysdiagId', component: DiagramEditorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemDiagramRoutingModule { }
