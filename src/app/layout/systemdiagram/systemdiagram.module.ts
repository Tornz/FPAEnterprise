import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../shared';
import { SystemDiagramComponent } from './systemdiagram.component';
import { SystemDiagramRoutingModule } from './systemdiagram-routing.module';
import { DiagramEditorComponent } from './diagramEditor/diagrameditor.component';
import { DiagramViewerComponent } from './diagramViewer/diagramViewer.component';

@NgModule({
    imports: [CommonModule, SystemDiagramRoutingModule, PageHeaderModule],
    declarations: [SystemDiagramComponent, DiagramEditorComponent, DiagramViewerComponent]
})
export class SystemDiagramModule {}
