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
        title:"Mobile App /PC Web",
        userStory:"Mobile App Registration", 
        dateUpdated: new Date(), 
        dateCreated: new Date(), 
        importance:"02 - Optional",
        storyPoints: 6,
        conversation: "This feature could potentially be on TP instead - to discuss with vendor on best solution",
        integration:"Elements",
        epic:"Incentive",
        backlog: []
        },
        {
        id: 2, 
        title:"Mobile App /PC Web",
        user: "System Admin",
        userStory:"PC web login requires mobile phone scanning code", 
        dateUpdated: new Date(), 
        dateCreated: new Date(), 
        importance:"02 - Optional",
        storyPoints: 8,
        conversation: "Could be applied to Finance and Cluster officers and escalated to relevant parties based on duration outstanding",
        integration:"Elements",
        epic:"Incentive",
        backlog: []
        },
        {
        id: 3, 
        title:"Mobile App /PC Web",
        user: "IT Admin",
        userStory:"Landing/Welcome screen",
        dateUpdated: new Date(), 
        dateCreated:  new Date(),
        importance:"01 - Mandatory",
        storyPoints: 4,
        conversation: "Phase 1 of the project will involve the uploading of excel sheets for grant calculation",
        integration:"Elements",
        epic:"Incentive",
        backlog: []
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

    addBacklogperUser(id: any, data: any){
        console.log("Data from backlogs", data)
        for(var i in this.userStory){
            if(this.userStory[i].id == id){
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

        for(var i in this.userStory){
            if(this.userStory[i].id == id){
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