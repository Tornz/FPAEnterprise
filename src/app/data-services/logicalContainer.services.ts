import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';


import { LogicalContainer } from '../model/logicalContainer.model';
// import { FunctionComponent } from 'app/_models/fncomponent';
import { environment } from '../../environments/environment';
@Injectable()
export class LogicalContainerServices {
    public logicalContainers = [
        {id: 1, server:"API Management Proxy", vCpu: 4, ram: 4, dataStorage: 300, prodQuantity: 2, drQuantity: 1, uatQuantity: 1, sitDevQuantity: 1, totalQuantity: 5},
        {id: 2, server:"Web Server", vCpu: 2, ram: 4, dataStorage: 100, prodQuantity: 2, drQuantity: 1, uatQuantity: 1, sitDevQuantity: 1, totalQuantity: 5},
        {id: 3, server:"Application Server 1", vCpu: 4, ram: 16, dataStorage: 1000, prodQuantity: 1, drQuantity: 1, uatQuantity: 1, sitDevQuantity: 1, totalQuantity: 4},
        {id: 4, server:"Application Server 2", vCpu: 2, ram: 8, dataStorage: 500, prodQuantity: 1, drQuantity: 1, uatQuantity: 1, sitDevQuantity: 1, totalQuantity: 4},
        {id: 5, server:"Application Server 3", vCpu: 2, ram: 4, dataStorage: 500, prodQuantity: 1, drQuantity: 1, uatQuantity: 1, sitDevQuantity: 1, totalQuantity: 4},
        {id: 6, server:"Micoservices Server", vCpu: 8, ram: 64, dataStorage: 2000, prodQuantity: 1, drQuantity: 1, uatQuantity: 1, sitDevQuantity: 1, totalQuantity: 4},
        {id: 7, server:"Database Server", vCpu: 8, ram: 64, dataStorage: 2000, prodQuantity: 1, drQuantity: 1, uatQuantity: 1, sitDevQuantity: 1, totalQuantity: 4},
        {id: 8, server:"App & Platform Monitoring", vCpu: 4, ram: 16, dataStorage: 1000, prodQuantity: 1, drQuantity: 1, uatQuantity: 1, sitDevQuantity: 1, totalQuantity: 4},
        {id: 9, server:"Docker", vCpu: 4, ram: 4, dataStorage: 1000, prodQuantity: 1, drQuantity: 1, uatQuantity: 1, sitDevQuantity: 1, totalQuantity: 4},
    ];
    logicCount = this.logicalContainers.length + 1;
    constructor(
        private http: HttpClient) {
    }

    getLogicalContainers() {
        //NOTE:
        //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
        // return this.http.get<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
        // .toPromise();
        return this.logicalContainers;
    }

    // addBacklogperUser(id: any, data: any){
    //     console.log("Data from logicalContainers", data)
    //     for(var i in this.logicalContainers){
    //         if(this.logicalContainers[i].id == id){
    //             this.logicalContainers[i].description = data;
    //             this.logicalContainers[i].dateCreated = new Date();
    //             this.logicalContainers[i].dateUpdated = new Date();
    //             this.logicalContainers[i].createdBy = data;
    //             this.logicalContainers[i].updatedBy = data;
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

        this.logicalContainers.push(data);
    }

    editLogicalContainer(id: any, data: any) {
        //NOTE:
        //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
        // environment.REST_API_URL FOR API URL
        // FunctionComponent for model of data
        // return this.http.post<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
        // .toPromise();

        for(var i in this.logicalContainers){
            if(this.logicalContainers[i].id == id){
                this.logicalContainers[i].server = data.server;
                this.logicalContainers[i].vCpu = data.vCpu;
                this.logicalContainers[i].ram = data.ram;
                this.logicalContainers[i].dataStorage = data.dataStorage;
                this.logicalContainers[i].prodQuantity = data.prodQuantity;
                this.logicalContainers[i].drQuantity = data.drQuantity;
                this.logicalContainers[i].uatQuantity = data.uatQuantity;
                this.logicalContainers[i].sitDevQuantity = data.sitDevQuantity;
                this.logicalContainers[i].totalQuantity = data.totalQuantity;
                return true;
            }
        }
    }

    updateTab(data: any){
        console.log("Data tab",data)
    }

    deleteLogicalContainer(id: any, data: any) {    
        //for(var i in this.logicalContainers) {
        let index = this.logicalContainers.indexOf(data, 0);
        if (index > -1) {
           this.logicalContainers.splice(index, 1);           
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