import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    selector: 'app-fpa',
    templateUrl: './fpa.component.html',
    styleUrls: ['./fpa.component.scss']

})
export class FPAComponent implements OnInit {
    activeTab: number=1;

    constructor(private router: Router) { }

    ngOnInit() { }

    onTab(index:number) {
        this.activeTab = index;
    }

}
