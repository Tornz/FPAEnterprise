import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-phasing',
    templateUrl: './phasing.component.html',
    styleUrls: ['./phasing.component.scss'],
    animations: [routerTransition()]
})
export class PhasingComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() { }
    onPhaseLoad() {
        this.router.navigate(['/phasing/fpa']);
    }
}
