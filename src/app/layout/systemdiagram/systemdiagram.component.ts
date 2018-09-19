import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-systemdiagram',
    templateUrl: './systemdiagram.component.html',
    styleUrls: ['./systemdiagram.component.scss'],
    animations: [routerTransition()]
})
export class SystemDiagramComponent implements OnInit {
    display = 'none';
    projName: any;
    items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    constructor() {}

    ngOnInit() { }

    cardClick(name) {
        this.display = 'block';
        this.projName = name;
    }

    onCloseHandled() {
        this.display = 'none';
    }
}
