import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';


import { Project } from '../model/project.model';
// import { FunctionComponent } from 'app/_models/fncomponent';
import { environment } from '../../environments/environment';
@Injectable()
export class ProjectServices {

    private project = [
        {
            id: 1,
            projectName: "Project A",
            description: "Description",
            phaseNumber: ["Phase 1 : Web Application", "Phase 2: Mobile Application"],
            technology: "",
            methodology: "Agile",
            dateUpdated: new Date()
        },
        {
            id: 2,
            projectName: "Project B",
            description: "Description",
            phaseNumber: ["Phase 1 : Web Application", "Phase 2: Mobile Application"],
            technology: "",
            methodology: "Agile",
            dateUpdated: new Date()
        },
        {
            id: 3,
            projectName: "Project C",
            description: "Description",
            phaseNumber: ["Phase 1 : Web Application", "Phase 2: Mobile Application"],
            technology: "",
            methodology: "Agile",
            dateUpdated: new Date()
        },
        {
            id: 4,
            projectName: "Project D",
            description: "Description",
            phaseNumber: ["Web Application", "Mobile Application"],
            technology: "",
            methodology: "Agile",
            dateUpdated: new Date()
        },
        {
            id: 5,
            projectName: "Project E",
            description: "Description",
            phaseNumber: ["Phase 1 : Web Application", "Phase 2: Mobile Application"],
            technology: "",
            methodology: "Agile",
            dateUpdated: new Date()
        }
    ];
    
    projectChanged = new Subject<any>();
    constructor(
        private http: HttpClient) {
    }

    getProjects() {
        //NOTE:
        //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
        // return this.http.get<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
        // .toPromise();
        console.log(this.project.slice());
        return this.project.slice();
    }

    addProject(data) {
        //NOTE:
        //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
        // environment.REST_API_URL FOR API URL
        // FunctionComponent for model of data
        // return this.http.post<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
        // .toPromise();
        this.project.push(data);        
        this.projectChanged.next(this.project.slice());
    }

    editProject(id: any, data: any) {
        //NOTE:
        //CHANGE TO PROMISE OR ASYNC AWAIT FUNCTION CALL TO THE DB/ API CALL
        // environment.REST_API_URL FOR API URL
        // FunctionComponent for model of data
        // return this.http.post<Array<FunctionComponent>>(environment.REST_API_URL + 'coms')
        // .toPromise();

        for(var i in this.project){
            if(this.project[i].id == id){
                this.project[i].projectName = data.projectName
                this.project[i].description = data.description
                this.project[i].phaseNumber = data.phaseNumber
                this.project[i].technology = data.technology
                this.project[i].methodology = data.methodology
                this.project[i].dateUpdated = new Date();
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
