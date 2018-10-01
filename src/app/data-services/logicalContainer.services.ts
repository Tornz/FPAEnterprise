import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';


import { LogicalContainer } from '../model/logicalContainer.model';
// import { FunctionComponent } from 'app/_models/fncomponent';
import { environment } from '../../environments/environment';
@Injectable()
export class LogicalContainerServices {
    public logicalContainer = [];
    logicCount = 1;
    constructor(
        private http: HttpClient) {
    }

    getLogicalContainer() {
        //NOTE:
        //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
        // return this.http.get<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
        // .toPromise();
        return this.logicalContainer;
    }

    // addBacklogperUser(id: any, data: any){
    //     console.log("Data from logicalContainer", data)
    //     for(var i in this.logicalContainer){
    //         if(this.logicalContainer[i].id == id){
    //             this.logicalContainer[i].description = data;
    //             this.logicalContainer[i].dateCreated = new Date();
    //             this.logicalContainer[i].dateUpdated = new Date();
    //             this.logicalContainer[i].createdBy = data;
    //             this.logicalContainer[i].updatedBy = data;
    //             return true;
    //         }
    //     }
    // }

    addLogicalContainer(data) {
        //NOTE:
        //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
        // environment.REST_API_URL FOR API URL
        // FunctionComponent for model of data
        // return this.http.post<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
        // .toPromise();

        this.logicalContainer.push(data);
    }

    editLogicalContainer(id: any, data: any) {
        //NOTE:
        //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
        // environment.REST_API_URL FOR API URL
        // FunctionComponent for model of data
        // return this.http.post<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
        // .toPromise();

        for(var i in this.logicalContainer){
            if(this.logicalContainer[i].id == id){
                this.logicalContainer[i].description = data.description;
                this.logicalContainer[i].dateUpdated = new Date();
                this.logicalContainer[i].createdBy = data.createdBy;
                this.logicalContainer[i].updatedBy = data.updatedBy;
                this.logicalContainer[i].type = data.type;
                this.logicalContainer[i].appServer = data.appServer;
                this.logicalContainer[i].dbServer = data.dbServer;
                this.logicalContainer[i].msServer = data.msServer;
                return true;
            }
        }
    }

    updateTab(data: any){
        console.log("Data tab",data)
    }

    deleteLogicalContainer(id: any, data: any) {    
        //for(var i in this.logicalContainer) {
        let index = this.logicalContainer.indexOf(data, 0);
        if (index > -1) {
           this.logicalContainer.splice(index, 1);           
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