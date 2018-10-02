import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ProjectServices } from '../../data-services/project.services';
import { Router } from '@angular/router';
import { CostModelServices } from '../../data-services/costModel.services';

@Component({
    selector: 'app-costmodel',
    templateUrl: './costmodel.component.html',
    styleUrls: ['./costmodel.component.scss'],
    animations: [routerTransition()]
})
export class CostModelComponent implements OnInit {
    project: any;
    constructor(private router: Router, private projService: ProjectServices) { }

    public tabler = [
    ];

    ngOnInit() {
        this.loadData();

    }

    loadData() {
        this.project = this.projService.getProjects();
        console.log("Project", this.project)
    }

    gotoCostModelDetails(proj) {
        this.router.navigate(['/cmodel/costmodeldetails'], { queryParams: proj });
    }



}
