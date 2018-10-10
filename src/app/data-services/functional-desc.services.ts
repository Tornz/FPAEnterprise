import { Injectable } from '@angular/core';
import { FunctionalDesc } from '../model/functionalDesc.model';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FunctionalDescService {
  private functionsList: FunctionalDesc[] = [
    new FunctionalDesc(1,'MOB01', 'Mobile number + password authentication / fingerprint authentication'),
    new FunctionalDesc(2,'MOB02', 'ID card, policy number, premium payment account (credit card number) - choose one of three'),
    new FunctionalDesc(3,'MOB03', 'Mobile,Pad,PC multi-screen synchronization'),
    new FunctionalDesc(4,'MOB04', 'Campaigns (Product / Event / Marketing )'),
    new FunctionalDesc(5,'TS01', 'Strategic alliance'),
    new FunctionalDesc(6,'TS02', 'One-click concierge phone customer service'),
    new FunctionalDesc(7,'TS03', 'One-click concierge personal assistant (Redirect to Activity company，080 Dedicated line)'),
    new FunctionalDesc(8,'TS04', 'Online CS Chabot'),
    new FunctionalDesc(9,'WEB01', 'Big data collection (all behaviours on the app, including personal assistant activity tracks)'),
    new FunctionalDesc(10,'WEB02', 'Behaviour analysis'),
    new FunctionalDesc(11,'WEB03', 'Behavioural characteristics'),
    new FunctionalDesc(12,'WEB04', 'Loss of customer forecast'),
  ];


  constructor() { }

  getFunctions() {
    return this.functionsList.slice();
  }

  saveFunction(newFunction: FunctionalDesc) {
    this.functionsList.push(newFunction);
  }

  editFunction(data: FunctionalDesc) {
    for (var i in this.functionsList) {
      if (this.functionsList[i].id == data.id) {
        this.functionsList[i].functionDesc = data.functionDesc;
        this.functionsList[i].code = data.code;
        return true;
      }
    }
  }

  generateID() {
    return this.functionsList.length + 1;
  }
}
