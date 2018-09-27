import { Component, OnInit, Input } from '@angular/core';
import { UserStoryServices } from '../../../data-services/userStory.services'
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-fpa',
    templateUrl: './fpa.component.html',
    styleUrls: ['./fpa.component.scss']

})
export class FPAComponent implements OnInit {
    activeTab: number=1;
    @Input() data: any;
    thirdSubscription: Subscription;
    proj: any;
    constructor(private router: Router, private route: ActivatedRoute, public fpaSrv: UserStoryServices) { }

    ngOnInit() {
        // this.proj = JSON.parse(this.route.snapshot.queryParamMap.get('phase'))
        console.log("Data from phase",this.proj)
        
     }

    onTab(index:number, data?: any) {
        // console.log("Data from phase", this.thirdSubscription)
        // this.proj = this.thirdSubscription;
        this.activeTab = index;
        this.data = data;
    }

}
