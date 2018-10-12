import { FunctionalDesc } from './../model/functionalDesc.model';
import { Injectable, EventEmitter } from '@angular/core';


import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';


import { User } from '../model/user.model';
// import { FunctionComponent } from 'app/_models/fncomponent';
import { environment } from '../../environments/environment';
@Injectable()
export class UserStoryServices {
    public userStory =
        [
            {
                id: 1,
                user: "Customer",
                description: "",
                title: "Mobile App /PC Web",
                backlogCode: "MOB",
                userStory: "Mobile App Registration",
                dateUpdated: new Date(),
                dateCreated: new Date(),
                importance: "02 - Optional",
                storyPoints: 6,
                conversation: "This feature could potentially be on TP instead - to discuss with vendor on best solution",
                integration: "Elements",
                epic: "Incentive",
                backlog: [
                    new FunctionalDesc(1, 'MOB1', 'Mobile number + password authentication / fingerprint authentication', 1)
                ],
                component: []
            },
            {
                id: 2,
                title: "Mobile App /PC Web",
                backlogCode: "MOB",
                user: "System Admin",
                description: "",
                userStory: "PC web login requires mobile phone scanning code",
                dateUpdated: new Date(),
                dateCreated: new Date(),
                importance: "02 - Optional",
                storyPoints: 8,
                conversation: "Could be applied to Finance and Cluster officers and escalated to relevant parties based on duration outstanding",
                integration: "Elements",
                epic: "Incentive",
                backlog: [
                    new FunctionalDesc(2, 'MOB2', 'ID card, policy number, premium payment account (credit card number) - choose one of three', 2),
                    new FunctionalDesc(3, 'MOB2', 'Campaigns (Product / Event / Marketing )', 2)
                ],
                component: []
            },
            {
                id: 3,
                title: "Mobile App /PC Web",
                backlogCode: "MOB",
                user: "IT Admin",
                description: "",
                userStory: "Landing/Welcome screen",
                dateUpdated: new Date(),
                dateCreated: new Date(),
                importance: "01 - Mandatory",
                storyPoints: 4,
                conversation: "Phase 1 of the project will involve the uploading of excel sheets for grant calculation",
                integration: "Elements",
                epic: "Incentive",
                backlog: [
                    new FunctionalDesc(4, 'MOB3', 'ID card, policy number, premium payment account (credit card number) - choose one of three', 3),
                    new FunctionalDesc(5, 'MOB3', 'Campaigns (Product / Event / Marketing )', 3)
                ],
                component: []
            },
            {
                id: 4,
                title: "Mobile App /PC Web",
                backlogCode: "MOB",
                user: "IT Admin",
                description: "",
                userStory: "Multi-screen synchronization",
                dateUpdated: new Date(),
                dateCreated: new Date(),
                importance: "01 - Mandatory",
                storyPoints: 4,
                conversation: "Phase 1 of the project will involve the uploading of excel sheets for grant calculation",
                integration: "Elements",
                epic: "Incentive",
                backlog: [
                    new FunctionalDesc(6,'MOB4', 'Mobile,Pad,PC multi-screen synchronization', 6)
                ],
                component: []
            },
            {
                id: 5,
                title: "Mobile App /PC Web",
                backlogCode: "MOB",
                user: "IT Admin",
                description: "",
                userStory: "Customer Service & Personal Assistant",
                dateUpdated: new Date(),
                dateCreated: new Date(),
                importance: "01 - Mandatory",
                storyPoints: 4,
                conversation: "Phase 1 of the project will involve the uploading of excel sheets for grant calculation",
                integration: "Elements",
                epic: "Incentive",
                backlog: 
                    [new FunctionalDesc(7,'MOB5', 'Mobile,Pad,PC multi-screen synchronization', 7),
                    new FunctionalDesc(8,'MOB5', 'Fingerprint authentication', 7)
                ],
                component: []
            },
            {
                id: 6,
                title: "Target Marketing",
                backlogCode: "TM",
                user: "User",
                description: "",
                userStory: "Precision Marketing Platform",
                dateUpdated: new Date(),
                dateCreated: new Date(),
                importance: "01 - Mandatory",
                storyPoints: 4,
                conversation: "Phase 1 of the project will involve the uploading of excel sheets for grant calculation",
                integration: "Elements",
                epic: "Incentive",
                backlog: [
                    new FunctionalDesc(9, 'TM6', 'Strategic alliance', 10),
                    new FunctionalDesc(10, 'TM6', 'One-click concierge phone customer service', 10)
                ],
                component: []
            },
            {
                id: 7,
                title: "Target Marketing",
                backlogCode: "TM",
                user: "User",
                description: "",
                userStory: " Connect internal data warehousing and data marts",
                dateUpdated: new Date(),
                dateCreated: new Date(),
                importance: "01 - Mandatory",
                storyPoints: 4,
                conversation: "Phase 1 of the project will involve the uploading of excel sheets for grant calculation",
                integration: "Elements",
                epic: "Incentive",
                backlog: [
                    new FunctionalDesc(11,'TM7', 'Online CS Chabot', 7)
                ],
                component: []
            },
            {
                id: 8,
                title: "Artificial Intelligence",
                backlogCode: "AI",
                user: "IT Admin",
                description: "",
                userStory: " Customer Indicator Analysis",
                dateUpdated: new Date(),
                dateCreated: new Date(),
                importance: "01 - Mandatory",
                storyPoints: 4,
                conversation: "Phase 1 of the project will involve the uploading of excel sheets for grant calculation",
                integration: "Elements",
                epic: "Incentive",
                backlog: [
                    new FunctionalDesc(12,'AI8', 'Behaviour analysis', 8),
                    new FunctionalDesc(13,'AI8', 'Loss of customer forecast', 8),
                    new FunctionalDesc(14,'AI8', 'Behavioural characteristics', 8)
                ],
                component: []
            },
            {
                id: 9,
                title: "Artificial Intelligence",
                backlogCode: "AI",
                user: "IT Admin",
                description: "",
                userStory: "Analysis of social activities and overall economic trends",
                dateUpdated: new Date(),
                dateCreated: new Date(),
                importance: "01 - Mandatory",
                storyPoints: 4,
                conversation: "Phase 1 of the project will involve the uploading of excel sheets for grant calculation",
                integration: "Elements",
                epic: "Incentive",
                backlog: [
                    new FunctionalDesc(15,'AI9', 'Big data collection (all behaviours on the app, including personal assistant activity tracks)', 9)
                ],
                component: []
            },
            {
                id: 10,
                title: "Concierge Services",
                backlogCode: "CI",
                user: "Admin",
                description: "",
                userStory: "SKB serial unlimited card exclusive service line",
                dateUpdated: new Date(),
                dateCreated: new Date(),
                importance: "01 - Mandatory",
                storyPoints: 4,
                conversation: "Phase 1 of the project will involve the uploading of excel sheets for grant calculation",
                integration: "Elements",
                epic: "Incentive",
                backlog: [
                    new FunctionalDesc(15,'CI10', 'Loss of customer forecast', 10),
                    new FunctionalDesc(16,'CI10', 'Strategic alliance', 10)
                ],
                component: []
            }
        ];
    constructor(
        private http: HttpClient) {
    }

    getUserStory() {
        //NOTE:
        //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
        // return this.http.get<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
        // .toPromise();
        return this.userStory;
    }

    getUserStoryById(backlogId: number) {
        let toBeUpdatedIndex = this.userStory.findIndex((userStoryItem) => userStoryItem.id === backlogId);
        return this.userStory[toBeUpdatedIndex];
    }

    getAllFunctions() {
        let functionList: FunctionalDesc[] = [];
        this.userStory.forEach(
            (userStoryItem) => {
                functionList.push(...userStoryItem.backlog);
            }
        )
        return functionList;
    }

    getFunctionListCodeString(functionList: any[]) {
        let functionCodeString: string = "";
        let separator = "";
        if (functionList !== null) {
            functionList.forEach(
                (functionItem) => {
                    functionCodeString = functionCodeString + separator + functionItem.functionDesc;
                    separator = ","
                }
            );
        }
        return functionCodeString
    }

    addBacklogperUser(id: any, data: any) {
        console.log("Data from backlogs", data)
        for (var i in this.userStory) {
            if (this.userStory[i].id == id) {
                this.userStory[i].backlog = data
                // this.userStory[i].dateUpdated =09/10/2018;
                return true;
            }
        }
    }

    addUserStory(data) {
        //NOTE:
        //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
        // environment.REST_API_URL FOR API URL
        // FunctionComponent for model of data
        // return this.http.post<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
        // .toPromise();

        this.userStory.push(data);
    }

    editUserStory(id: any, data: any) {
        //NOTE:
        //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
        // environment.REST_API_URL FOR API URL
        // FunctionComponent for model of data
        // return this.http.post<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
        // .toPromise();

        for (var i in this.userStory) {
            if (this.userStory[i].id == id) {
                this.userStory[i].userStory = data.userStory
                // this.userStory[i].dateUpdated = 09/10/2018;
                return true;
            }
        }
    }

    // updateTab(data: any){
    //     console.log("Data tab",data)
    // }


    // getComponents(): Promise<Array<FunctionComponent>>  {
    //     return this.http.get<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
    //       .toPromise();
    // }

    // updateComponent(id: number, role: FunctionComponent): Promise<void>  {

    //     return this.http.put<void>(environment.REST_API_URL + 'coms/' + id, role)
    //       .toPromise();
    // }

    // createComponent(role: FunctionComponent): Promise<void>  {
    //     return this.http.post<void>(environment.REST_API_URL + 'coms', role)
    //       .toPromise();
    // }
}