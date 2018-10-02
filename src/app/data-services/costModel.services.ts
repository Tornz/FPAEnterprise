import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CostModel } from "../model/costmodel.model";



@Injectable()
export class CostModelServices {
    costmodelChanged = new Subject<CostModel[]>();
    private costmodelList: CostModel[] = [
        new CostModel(0,'Remote Support','Business Analyst','Huang, Amy WL', 'i9-PRC-T1',
        3900,[[10,4.5,4.5,4.5],[10,10,4.5,4.5,4.5,4.5,4.5,4.5,4.5],[10,4.5,4.5,4.5,4.5,4.5,4.5]]),
        new CostModel(0,'Remote Support','Project Director','Lorraine Lau', 'i10-HK',
        0,[[5,0.5,0.5,5],[5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,5],[5,0.5,0.5,0.5,0.5,0.5,5]]),
        new CostModel(0,'Remote Support','Application Architect','Wai, Anthony', 'i8-HK',
        3500,[[10,4.5,4.5,4.5],[10,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4.5],[10,4.5,4.5,4.5,4.5,4.5,10]]),
        new CostModel(0,'Remote Support','UI/UX Designer','Derrick Koon', 'i8-HK',
        3500,[[22,4.5,4.5,4.5],[22,22,4.5,4.5,4.5,4.5,4.5,4.5,4.5],[22,4.5,4.5,4.5,4.5,4.5,4.5]]),
        new CostModel(0,'Local TW','Project Manager','Rona Chen', 'i9-PRC-T2',
        3528,[[4.5,4.5,4.5,4.5],[4.5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4.5],[4.5,4.5,4.5,4.5,4.5,4.5,4.5]]),
        new CostModel(0,'Local TW','Technical Architect (Infra)','TBD', 'i8-PRC-T2',
        2478,[[16,16,16,16],[16,16,16,16,16,16,16,16,16],[16,16,16,16,16,16,16]]),
        new CostModel(0,'Local TW','System Analyst','TBD', 'i7-PRC-T2',
        2407,[[22,22,22,22],[22,22,22,22,22,22,22,22,22],[22,22,22,22,22,22,22]]),
        new CostModel(0,'Local TW','Analyst Programmer','TBD', 'i6-PRC-T2',
        1735,[[22,22,22,22],[44,44,44,44,44,44,44,44,44],[22,22,22,22,22,22,22]]),
        new CostModel(0,'Local TW','Programmer','TBD', 'i5-PRC-T2',
        1180,[[22,22,22,22],[66,66,66,66,66,66,66,66,66],[44,44,44,44,44,44,44]]),
        new CostModel(0,'Local TW','Quality Assurance','TBD', 'i4-PRC-T2',
        956,[[22,22,22,22],[22,22,22,22,22,22,22,22,22],[22,22,22,22,22,22,22]])
    ];
 
    getCostModel() {
        return this.costmodelList.slice();
    }


}


