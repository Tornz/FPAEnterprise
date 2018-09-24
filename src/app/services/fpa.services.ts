import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';


// import { Role } from '../_models/index';
// import { FunctionComponent } from 'app/_models/fncomponent';
import { environment } from '../../environments/environment';
@Injectable()
export class FpaServices {
    public userStory = [
        { id: 1, userStory: 'Project A', dateCreated: new Date() },
        { id: 2, userStory: 'Project A', dateCreated: new Date() },
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
                return true;
            }
        }
    }


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