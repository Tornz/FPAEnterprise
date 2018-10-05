import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { ProjectServices } from '../../data-services/project.services'
// import { LocalStorageService } from '@angular/local'


@Component({
    selector: 'app-phasing',
    templateUrl: './phasing.component.html',
    styleUrls: ['./phasing.component.scss'],
    animations: [routerTransition()]
})
export class PhasingComponent implements OnInit {
    project: any;
    localProject: any;
    phaseNo: any;
    constructor(private router: Router, private proj: ProjectServices) {

    }

    public tabler = [];

    ngOnInit() {
        localStorage.clear();
        this.loadData();
    }

    loadData() {
        this.project = this.proj.getProjects();
        console.log("Project", this.project)
    }
    onPhaseLoad(project: any, phaseNo: any) {
        
        this.localProject = localStorage.setItem('project',JSON.stringify(project));
        this.phaseNo = localStorage.setItem('phase',phaseNo);
        this.router.navigate(['/phasing/fpa']);
        
    }
}
