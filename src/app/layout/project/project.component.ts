import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

import { routerTransition } from '../../router.animations';
import { ProjectServices } from '../../data-services/project.services';
import { Project } from '../../model/project.model';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    animations: [routerTransition()]
})
export class ProjectComponent implements OnInit {
    public tabler: any;
    display = 'none';
    proj: Project;
    project = [];
    projectForm: FormGroup;
    searchForm: FormGroup;
    modal: any;
    // phase = [];
    projectSubscription: Subscription;
   
    cols = [
        { header: 'Id', field: 'id' },
    { header: 'Project Name', field: 'projectName' },
    { header: 'Description', field: 'description' },
    { header: 'Phases' , field: 'phases'},
    { header: 'Project Duration', field: 'duration' },
    { header: 'Date Created' , field: 'dateCreated'},
    { header: 'Date Updated', field: 'dateUpdated' },
    { header: 'Status', field: 'status' },{ header: 'Action', field: 'action' }]
    transactions: {
        date: Date,
        label: string,
        amount: number
      }[];
    cars: Car[];
     
    method = [{id: 1, title:"Agile"},{id: 2, title:"Waterfall"},{id: 3, title:"Scrum"}]
    constructor(public projSrv: ProjectServices, private form: FormBuilder, private forms: FormBuilder) {
      
        this.projectForm = this.form.group({
            'project': new FormControl('', Validators.required),
            'description': new FormControl('', Validators.required),
            'phase': new FormArray([]),
            'duration': new FormControl('',[Validators.required])
            // 'technology': new FormControl('', Validators.required),
        })

        this.searchForm = this.forms.group({
            'search': new FormControl('', Validators.required)
        })
        this.proj = new Project;
    }

    ngOnInit() {
        localStorage.clear();
        this.loadData();
        this.projectSubscription = this.projSrv.projectChanged
            .subscribe((project: any) => {
                this.project = project;
            });
    }
    get phase(): FormArray { 
        return this.projectForm.get('phase') as FormArray; 
    }
    loadData(search?: any) {
        this.project = this.projSrv.getProjects();
        console.log("Projects", this.project)
    }

    filter(event: any) {
        let search;
        console.log("Filter", event)
        this.project = this.project.filter(function (proj) { return proj.projectName == event })
     
    }
    searchProject() {
        let searchData = this.searchForm.controls.search.value;
        let search;
        console.log("will search", searchData)
        if (searchData != null || searchData != "") {
            console.log("will search")
            search = this.project.filter(function (proj) { return proj.projectName == searchData });
            this.project = search;
        } else {
            console.log("No search")
            this.loadData();
        }
    }
    addProjQuest() {
        // this.proj = new Project;
        this.display = 'block';
        this.modal = 'addQuestion';
       
    }

    addProj() {
        this.proj = new Project;
        this.display = 'block';
        this.modal = 'add';
        this.projectForm.reset();
    }

    addQuestion(){
        this.display = 'none';
        // this.addProj()
        this.addProject();
    }

    addProject() {

        console.log("Project", this.phase.value);
        this.proj.id = 1;
        this.proj.dateCreated = new Date();
        this.proj.dateUpdated = new Date();
        this.proj.duration = this.projectForm.controls.duration.value;
        this.proj.projectName = this.projectForm.controls.project.value;
        // this.proj.technology =  this.projectForm.controls.technology.value;
        // this.proj.methodology = this.projectForm.controls.methodology.value;
        this.proj.phases = this.phase.value;
        this.proj.description = this.projectForm.controls.description.value;

       
        this.projSrv.addProject(this.proj);
        this.display = 'none';
        this.projectForm.reset();
        this.phase.reset();
       
    }

    createItem(): FormGroup{
        return this.form.group({
            phase: '',
            method:''
        })
    }
    addPhase(){
        console.log("Add new phase");
        this.phase.push(this.createItem());
        // let phaseData = 0
        // this.phase.push(phaseData)
    }

    deletePhase(index: any){
        this.phase.removeAt(index)
    }
    editProj(data: any) {
        this.proj = data;
        this.display = 'block';
        this.modal = 'edit';

    }

    editProject() {
        console.log("Edit")
        this.projSrv.editProject(this.proj.id, this.proj)
        this.display = 'none';
        //   this.projectForm.reset();
    }

    onCloseHandled() {
        this.display = 'none';
    }

    saveProj(projectData) {
        console.log('data', projectData);
    }
 
}
export interface Car {
    vin;
    year;
    brand;
    color;
}