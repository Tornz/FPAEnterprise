import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { CostModelServices } from '../../../data-services/costModel.services';
import { CostModel } from '../../../model/costmodel.model';
import { isNgTemplate } from '../../../../../node_modules/@angular/compiler';

@Component({
    selector: 'app-costmodeldetails',
    templateUrl: './costmodeldetails.component.html',
    styleUrls: ['./costmodeldetails.component.scss'],
    animations: [routerTransition()]
})
export class CostModelDetailsComponent implements OnInit {
    projectName: string
    costModels: CostModel[] = [];
    ph1Rate: number[] = [];
    ph2Rate: number[] = [];
    ph3Rate: number[] = [];
    ph1TotalRate = 0;
    ph2TotalRate = 0;
    ph3TotalRate = 0;

    constructor(private route: ActivatedRoute, private costService: CostModelServices) { }

    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.projectName = params.projectName;
        });

        this.costModels = this.costService.getCostModel();
        this.calculateRate();
        this.calculateHC();
    }

    calculateRate() {
        this.costModels.forEach((item, i) => {
            var ph1_sum = 0;
            var ph2_sum = 0;
            var ph3_sum = 0;

            item.headcounts[0].forEach((hc: number) => { ph1_sum += hc });
            item.headcounts[1].forEach((hc: number) => { ph2_sum += hc });
            item.headcounts[2].forEach((hc: number) => { ph3_sum += hc });

            this.ph1Rate[i] = ph1_sum * item.rate;
            this.ph2Rate[i] = ph2_sum * item.rate;
            this.ph3Rate[i] = ph3_sum * item.rate;

            this.ph1TotalRate += this.ph1Rate[i];
            this.ph2TotalRate += this.ph2Rate[i];
            this.ph3TotalRate += this.ph3Rate[i];
        });
    }

    calculateHC(){

    }
}
