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
