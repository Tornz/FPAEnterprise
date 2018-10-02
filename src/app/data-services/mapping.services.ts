import { Injectable } from '@angular/core';
// import { Subject } from "rxjs";

import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Subject } from "rxjs";

import { Mapping } from '../model/mapping.model';
// import { FunctionComponent } from 'app/_models/fncomponent';
import { environment } from '../../environments/environment';
@Injectable()
export class MappingServices {

    private mapping = [
        {
            id: 1,
            businessReq: "Mobile App Registration",
            function: [{func:"Mobile number + password authentication / fingerprint authentication"},{func:"ID card, policy number, premium payment account (credit card number) - choose one of three"}],
            components: [{item:"WSO2 Identity and Access Management"}],
            
        },
        {
            id: 2,
            businessReq: "PC web login requires mobile phone scanning code (2D QRCode)",
            function: [],
            components: [{item:"Yes"}],
            
        },
        {
            id: 3,
            businessReq: "Multi-screen synchronization",
            function: [{func:"Mobile,Pad,PC multi-screen synchronization"}],
            components: [{item:"N/A"}],
            
            
        },
        {
            id: 4,
            businessReq: "Landing/Welcome screen",
            function: [{func:"Campaigns (Product / Event / Marketing)"}],
            components: [{item:"WSO2 Identity and Access Management"}],
            
        },
        {
            id: 5,
            businessReq: "Customer Service & Personal Assistant",
            function: [
            {func:"One-click concierge phone customer service", desc:"Enquiry (Services/Products/Operations)"},
            {func:"One-click concierge personal assistant", desc:" - e.g.: Restaurant / ticket reservations"},
            {func:"Online CS Chabot", desc:"Text & voice support"}],
            components: [
                {item:"P2-Mobile Apps IP Call to API to Microservices then SIP"},
                {item: "P2-Mobile Apps IP Call to API to Microservices then SIP"},
                {item:"SKL / SKB AI integration"}],
        }
    ];
    
    mappingChanged = new Subject<any>();
    constructor(
        private http: HttpClient) {
    }

    getMapping() {
        //NOTE:
        //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
        // return this.http.get<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
        // .toPromise();
        console.log(this.mapping.slice());
        return this.mapping.slice();
    }

    // addProject(data) {
    //     //NOTE:
    //     //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
    //     // environment.REST_API_URL FOR API URL
    //     // FunctionComponent for model of data
    //     // return this.http.post<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
    //     // .toPromise();
    //     this.project.push(data);        
    //     this.projectChanged.next(this.project.slice());
    // }

    // editProject(id: any, data: any) {
    //     //NOTE:
    //     //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
    //     // environment.REST_API_URL FOR API URL
    //     // FunctionComponent for model of data
    //     // return this.http.post<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
    //     // .toPromise();

    //     for(var i in this.project){
    //         if(this.project[i].id == id){
    //             this.project[i].projectName = data.projectName
    //             this.project[i].description = data.description
    //             this.project[i].phases = data.phaseNumber
    //             this.project[i].technology = data.technology
    //             this.project[i].methodology = data.methodology
    //             this.project[i].dateUpdated = new Date();
    //             return true;
    //         }
    //     }
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
