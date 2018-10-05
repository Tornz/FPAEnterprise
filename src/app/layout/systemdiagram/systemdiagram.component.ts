import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SystemDiagramServices } from '../../data-services/systemDiagram.services';
import * as $ from 'jquery';
import { ProjectServices } from '../../data-services/project.services';

@Component({
    selector: 'app-systemdiagram',
    templateUrl: './systemdiagram.component.html',
    styleUrls: ['./systemdiagram.component.scss'],
    animations: [routerTransition()]
})
export class SystemDiagramComponent {
}
