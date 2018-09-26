import { Component, OnInit, Input } from '@angular/core';
import { UserStoryServices } from '../../../data-services/userStory.services'
import { Router } from '@angular/router';

@Component({
    selector: 'app-fpa',
    templateUrl: './fpa.component.html',
    styleUrls: ['./fpa.component.scss']

})
export class FPAComponent implements OnInit {
    activeTab: number=1;
    @Input() data: any;
    constructor(private router: Router, public fpaSrv: UserStoryServices) { }

    ngOnInit() { }

    onTab(index:number, data?: any) {
        this.activeTab = index;
        this.data = data;
    }

}
