import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-biddocument',
    templateUrl: './biddocument.component.html',
    styleUrls: ['./biddocument.component.scss'],
    animations: [routerTransition()]
})
export class BidDocumentComponent implements OnInit {
    display = 'none';
    projName: any;
    items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    constructor() { }

    ngOnInit() { }

    cardClick(name) {
        this.display = 'block';
        this.projName = name;
    }

    onCloseHandled() {
        this.display = 'none';
    }
}
