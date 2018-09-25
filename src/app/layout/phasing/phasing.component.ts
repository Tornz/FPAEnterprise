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
    project: any;
    constructor(private router: Router) {}

    public tabler = [
        { header: 'ID', id: 1, projname: 'Project A', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', datecreated: '09/14/2018', edit: 'Edit' },
        { header: 'Project Name', id: 2, projname: 'Project B', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', datecreated: '09/14/2018', edit: 'Edit' },
        { header: 'Description', id: 3, projname: 'Project C', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', datecreated: '09/14/2018', edit: 'Edit' },
        { header: 'Date Created', id: 4, projname: 'Project D', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', datecreated: '09/14/2018', edit: 'Edit' },
        { header: 'Action', id: 4, projname: 'Project E', desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit', datecreated: '09/14/2018', edit: 'Edit' }
    ];

    ngOnInit() { }
    onPhaseLoad() {
        this.router.navigate(['/phasing/fpa']);

        // this.router.navigate(['/user-story']);
    }
}
