import { Injectable } from '@angular/core';
import { FunctionalDesc } from '../model/functionalDesc.model';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FunctionalDescService {
  private functionsList: FunctionalDesc[] = [
    new FunctionalDesc(1, 'Mobile number + password authentication / fingerprint authentication'),
    new FunctionalDesc(2, 'ID card, policy number, premium payment account (credit card number) - choose one of three'),
    new FunctionalDesc(3, 'Mobile,Pad,PC multi-screen synchronization'),
    new FunctionalDesc(4, 'Campaigns (Product / Event / Marketing )'),
    new FunctionalDesc(5, 'Strategic alliance'),
    new FunctionalDesc(6, 'One-click concierge phone customer service'),
    new FunctionalDesc(7, 'One-click concierge personal assistant (Redirect to Activity company，080 Dedicated line)'),
    new FunctionalDesc(8, 'Online CS Chabot'),
    new FunctionalDesc(9, 'Big data collection (all behaviours on the app, including personal assistant activity tracks)'),
    new FunctionalDesc(10, 'Behaviour analysis'),
    new FunctionalDesc(11, 'Behavioural characteristics'),
    new FunctionalDesc(12, 'Loss of customer forecast'),
  ];


  constructor() { }

  getFunctions() {
    return this.functionsList.slice();
  }

  saveFunction(newFunction: FunctionalDesc) {

  }
}
