import { Injectable, EventEmitter } from '@angular/core';
import { FunctionalDesc } from '../model/functionalDesc.model';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FunctionalDescService {
  public functionListChanged = new EventEmitter<FunctionalDesc[]>();
  private functionsList: FunctionalDesc[] = [
    new FunctionalDesc(1,'MOB1', 'Mobile number + password authentication / fingerprint authentication'),
    new FunctionalDesc(2,'MOB2', 'ID card, policy number, premium payment account (credit card number) - choose one of three'),
    new FunctionalDesc(3,'MOB3', 'Mobile,Pad,PC multi-screen synchronization'),
    new FunctionalDesc(4,'MOB4', 'Campaigns (Product / Event / Marketing )'),
    new FunctionalDesc(5,'TS1', 'Strategic alliance'),
    new FunctionalDesc(6,'TS2', 'One-click concierge phone customer service'),
    new FunctionalDesc(7,'TS3', 'One-click concierge personal assistant (Redirect to Activity company，080 Dedicated line)'),
    new FunctionalDesc(8,'TS4', 'Online CS Chabot'),
    new FunctionalDesc(9,'WEB1', 'Big data collection (all behaviours on the app, including personal assistant activity tracks)'),
    new FunctionalDesc(10,'WEB2', 'Behaviour analysis'),
    new FunctionalDesc(11,'WEB3', 'Behavioural characteristics'),
    new FunctionalDesc(12,'WEB4', 'Loss of customer forecast'),
  ];


  constructor() { }

  getFunctions() {
    return this.functionsList.slice();
  }

  saveFunction(newFunction: FunctionalDesc) {
    this.functionsList.push(newFunction);
    this.functionListChanged.emit(this.functionsList);
  }

  editFunction(data: FunctionalDesc) {
    for (var i in this.functionsList) {
      if (this.functionsList[i].id == data.id) {
        this.functionsList[i].functionDesc = data.functionDesc;
        this.functionsList[i].code = data.code;
        return true;
      }
    }
    this.functionListChanged.emit(this.functionsList);
  }

  deleteFunction(selectedFunction: FunctionalDesc) {
    let deleteIndex = this.functionsList.indexOf(selectedFunction);
    if (deleteIndex > -1) {
        this.functionsList.splice(deleteIndex, 1);
    }
    this.functionListChanged.emit(this.functionsList);
}

  generateID() {
    return this.functionsList.length + 1;
  }
}
