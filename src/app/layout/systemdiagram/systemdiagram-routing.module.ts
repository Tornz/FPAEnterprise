import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemDiagramComponent } from './systemdiagram.component';
import { DiagramEditorComponent } from './diagramEditor/diagrameditor.component';
import { DiagramViewerComponent } from './diagramViewer/diagramViewer.component'

const routes: Routes = [
    { path: '', component: SystemDiagramComponent },
    { path: 'editor', component: DiagramEditorComponent },
    { path: 'viewer', component: DiagramViewerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemDiagramRoutingModule { }
