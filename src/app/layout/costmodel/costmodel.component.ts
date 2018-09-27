import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ProjectServices } from '../../data-services/project.services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-costmodel',
    templateUrl: './costmodel.component.html',
    styleUrls: ['./costmodel.component.scss'],
    animations: [routerTransition()]
})
export class CostModelComponent implements OnInit {
    project: any;
    constructor(private router: Router, private proj: ProjectServices) {

    }

    public tabler = [
    ];

    ngOnInit() {
        this.loadData();

    }

    loadData() {
        this.project = this.proj.getProjects();
        console.log("Project", this.project)
    }

    gotoCostModelDetails() {
        this.router.navigate(['/cmodel/costmodeldetails']);
    }
   

    
}
