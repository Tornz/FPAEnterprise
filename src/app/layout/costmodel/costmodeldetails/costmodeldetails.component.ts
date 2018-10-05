import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { CostModelServices } from '../../../data-services/costModel.services';
import { CostModel } from '../../../model/costmodel.model';
import { isNgTemplate } from '@angular/compiler';

@Component({
    selector: 'app-costmodeldetails',
    templateUrl: './costmodeldetails.component.html',
    styleUrls: ['./costmodeldetails.component.scss'],
    animations: [routerTransition()]
})
export class CostModelDetailsComponent implements OnInit {
    projectName: string
    costModels: CostModel[] = [];
    phases: any = [];
    ph1Rate: number[] = [];
    ph2Rate: number[] = [];
    ph3Rate: number[] = [];
    headCount: any = [];
    totalDev = [];
    totalMM = [];
    TotalCost = [];
    ADMCost = [];
    TotalUSD = [];

    constructor(private route: ActivatedRoute, private costService: CostModelServices) { }

    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.projectName = params.projectName;
        });

        this.costModels = this.costService.getCostModel();
        this.calculateRate();
    }

    calculateRate() {
        this.costModels.forEach((item, i1) => {
            var phaseRates = [];

            item.headcounts.forEach((phase, i2) => {
                var hc_sum = 0;

                phase.forEach((hc: number) => {
                    hc_sum += hc
                });
                phaseRates[i2] = hc_sum * item.rate;
            });

            this.phases[i1] = phaseRates.slice();
            this.TotalCost[i1] += phaseRates.slice();
        });

        let phase = {
            // 'phaseCost': [],
            // 'totalHC': [],
            // 'totalDev': number,
            // 'totalMM': number,
            // 'totalCost': number,
            // 'admCost': number,
            // 'totalCostUSD': number,
        }
    }
}
