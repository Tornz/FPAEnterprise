import { Injectable, EventEmitter } from '@angular/core';
import { FunctionalDesc } from '../model/functionalDesc.model';
import { UserStoryServices } from './userStory.services';

@Injectable()
export class FunctionalDescService {
  public functionListChanged = new EventEmitter<FunctionalDesc[]>();
  // private functionsList: FunctionalDesc[] = [
  //   new FunctionalDesc(1,'MOB1', 'Mobile number + password authentication / fingerprint authentication', 1),
  //   new FunctionalDesc(2,'MOB2', 'ID card, policy number, premium payment account (credit card number) - choose one of three', 1),
  //   new FunctionalDesc(3,'MOB3', 'Mobile,Pad,PC multi-screen synchronization', 1),
  //   new FunctionalDesc(4,'MOB4', 'Campaigns (Product / Event / Marketing )', 1),
  //   new FunctionalDesc(5,'TS1', 'Strategic alliance', 1),
  //   new FunctionalDesc(6,'TS2', 'One-click concierge phone customer service', 1),
  //   new FunctionalDesc(7,'TS3', 'One-click concierge personal assistant (Redirect to Activity company，080 Dedicated line)', 1),
  //   new FunctionalDesc(8,'TS4', 'Online CS Chabot', 1),
  //   new FunctionalDesc(9,'WEB1', 'Big data collection (all behaviours on the app, including personal assistant activity tracks)', 1),
  //   new FunctionalDesc(10,'WEB2', 'Behaviour analysis', 1),
  //   new FunctionalDesc(11,'WEB3', 'Behavioural characteristics', 1),
  //   new FunctionalDesc(12,'WEB4', 'Loss of customer forecast', 1),
  // ];
  private functionsList: FunctionalDesc[];

  constructor(private userStoryService: UserStoryServices) {
    this.functionsList = userStoryService.getAllFunctions();
  }

  getFunctions() {
    // return this.functionsList.slice();
    return this.userStoryService.getAllFunctions();
  }

  saveFunction(newFunction: FunctionalDesc) {
    let parentUserStory = this.userStoryService.getUserStoryById(newFunction.userStoryId);
    parentUserStory.backlog.push(newFunction);
    this.functionListChanged.emit(this.getFunctions());
  }

  editFunction(selectedFunction: FunctionalDesc) {
    let parentUserStory = this.userStoryService.getUserStoryById(selectedFunction.userStoryId);
    let functionList = parentUserStory.backlog;
    let toBeUpdatedIndex = functionList.findIndex((functionItem) => functionItem.id === selectedFunction.id);
    functionList[toBeUpdatedIndex].functionDesc = selectedFunction.functionDesc;
    this.functionListChanged.emit(this.getFunctions());
  }

  deleteFunction(selectedFunction: FunctionalDesc) {
    let parentUserStory = this.userStoryService.getUserStoryById(selectedFunction.userStoryId);
    let functionList = parentUserStory.backlog;
    let deleteIndex = functionList.indexOf(selectedFunction);
    if (deleteIndex > -1) {
      functionList.splice(deleteIndex, 1);
    }
    this.functionListChanged.emit(this.getFunctions());
  }

  generateID() {
    return this.functionsList.length + 1;
  }
}
