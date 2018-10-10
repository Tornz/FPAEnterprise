import { Injectable } from '@angular/core';


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
                backlog: [],
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
                backlog: [],
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
                backlog: [],
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
                backlog: [],
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
                backlog: [],
                component: []
            },
            {
                id: 6,
                title: "Mobile App /PC Web",
                backlogCode: "MOB",
                user: "IT Admin",
                description: "",
                userStory: "Premium Member Activity Recommendation",
                dateUpdated: new Date(),
                dateCreated: new Date(),
                importance: "01 - Mandatory",
                storyPoints: 4,
                conversation: "Phase 1 of the project will involve the uploading of excel sheets for grant calculation",
                integration: "Elements",
                epic: "Incentive",
                backlog: [],
                component: []
            },
            {
                id: 7,
                title: "Mobile App /PC Web",
                backlogCode: "MOB",
                user: "IT Admin",
                description: "",
                userStory: "Exclusive Financial Product Recommendation",
                dateUpdated: new Date(),
                dateCreated: new Date(),
                importance: "01 - Mandatory",
                storyPoints: 4,
                conversation: "Phase 1 of the project will involve the uploading of excel sheets for grant calculation",
                integration: "Elements",
                epic: "Incentive",
                backlog: [],
                component: []
            },
            {
                id:8,
                title: "Mobile App /PC Web",
                backlogCode: "MOB",
                user: "IT Admin",
                description: "",
                userStory: "Appointment of proprietary services",
                dateUpdated: new Date(),
                dateCreated: new Date(),
                importance: "01 - Mandatory",
                storyPoints: 4,
                conversation: "Phase 1 of the project will involve the uploading of excel sheets for grant calculation",
                integration: "Elements",
                epic: "Incentive",
                backlog: [],
                component: []
            },
            {
                id:9,
                title: "Mobile App /PC Web",
                backlogCode: "MOB",
                user: "IT Admin",
                description: "",
                userStory: "Trace code (Web analytics)",
                dateUpdated: new Date(),
                dateCreated: new Date(),
                importance: "01 - Mandatory",
                storyPoints: 4,
                conversation: "Phase 1 of the project will involve the uploading of excel sheets for grant calculation",
                integration: "Elements",
                epic: "Incentive",
                backlog: [],
                component: []
            },
            {
                id:10,
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
                backlog: [],
                component: []
            },
            {
                id:11,
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
                backlog: [],
                component: []
            },
            {
                id:12,
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
                backlog: [],
                component: []
            },
            {
                id:12,
                title: "Artificial Intelligence",
                backlogCode: "AI",
                user: "IT Admin",
                description: "",
                userStory: "  Customer behaviour forecast",
                dateUpdated: new Date(),
                dateCreated: new Date(),
                importance: "01 - Mandatory",
                storyPoints: 4,
                conversation: "Phase 1 of the project will involve the uploading of excel sheets for grant calculation",
                integration: "Elements",
                epic: "Incentive",
                backlog: [],
                component: []
            },
            {
                id:13,
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
                backlog: [],
                component: []
            },
            {
                id:13,
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
                backlog: [],
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