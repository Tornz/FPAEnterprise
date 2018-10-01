import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../../router.animations';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-costmodeldetails',
    templateUrl: './costmodeldetails.component.html',
    styleUrls: ['./costmodeldetails.component.scss'],
    animations: [routerTransition()]
})
export class CostModelDetailsComponent implements OnInit {
    projectName:string
    constructor(private route: ActivatedRoute) {
       
    }
    ngOnInit() {        
        this.route.queryParams
            .subscribe((params) => {               
                this.projectName = params.projectName;
            });
       
    }

  
   

    
}
