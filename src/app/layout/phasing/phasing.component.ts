import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { ProjectServices } from '../../data-services/project.services'

@Component({
    selector: 'app-phasing',
    templateUrl: './phasing.component.html',
    styleUrls: ['./phasing.component.scss'],
    animations: [routerTransition()]
})
export class PhasingComponent implements OnInit {
    project: any;
    constructor(private router: Router, private proj: ProjectServices) {
     
    }

    public tabler = [
        ];

    ngOnInit() { 
        this.loadData();
      
    }

    loadData(){
        this.project = this.proj.getProjects();
        //console.log("Project", this.project.length)
    }
    onPhaseLoad() {
        this.router.navigate(['/phasing/fpa']);

        // this.router.navigate(['/user-story']);
    }
}
