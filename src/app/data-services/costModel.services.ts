import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CostModel } from "../model/costmodel.model";



@Injectable()
export class CostModelServices {
    costmodelChanged = new Subject<CostModel[]>();
    private costmodelList: CostModel[] = [];
 
    getCostModel() {
        return this.costmodelList.slice();
    }


}


