import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ProjectServices } from '../../data-services/project.services';
import { Project } from '../../model/project.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
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
    public cols = [{ header: 'Id' },
    { header: 'Project Name' },
    { header: 'Description' },
    { header: 'Phase Number' },
    { header: 'Methodology' },
    { header: 'Date Created' },
    { header: 'Date Updated' },
    { header: 'Action' }]
    constructor(public projSrv: ProjectServices, private form: FormBuilder, private forms: FormBuilder) {

        this.projectForm = this.form.group({
            'project': new FormControl('', Validators.required),
            'description': new FormControl('', Validators.required),
            'phaseNo': new FormControl('', Validators.required),
            // 'technology': new FormControl('', Validators.required),
            'methodology': new FormControl('', Validators.required)
        })

        this.searchForm = this.forms.group({
            'search': new FormControl('', Validators.required)
        })
        this.proj = new Project;
    }

    ngOnInit() {

        console.log("Project Name", this.proj.projectName);
        this.loadData();
    }

    loadData(search?: any) {
        this.project = this.projSrv.getProjects();
        console.log("Project data", this.project)
        // if(search != null){
        //     console.log("Searchs", search)
        //     // this.project = this.projSrv.getProjects();
        //     let filterProj = this.projSrv.getProjects();
        //     filterProj.forEach(i =>{
        //         console.log("Search", i)
        //         if(i.projectName === search){
        //             this.project = i;
        //         }
        //     })
        // }else{

        // }

    }

    filter(event: any) {
        let search;
        console.log("Filter", event)
        this.project = this.project.filter(function (proj) { return proj.projectName == event })
        // .distinctUntilChanged().
        // .filter(item => item.Type === 5)
        // search =  this.project.filter();
        // this.project = search;

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

    addProj() {
        this.proj = new Project;
        this.display = 'block';
        this.modal = 'add';
        this.projectForm.reset();
    }

    addProject() {

        console.log("Add Project", this.projectForm.controls.project.value)
        this.proj.id = 1;
        this.proj.dateCreated = new Date();
        this.proj.dateUpdated = new Date();
        this.proj.projectName = this.projectForm.controls.project.value;
        // this.proj.technology =  this.projectForm.controls.technology.value;
        this.proj.methodology = this.projectForm.controls.methodology.value;
        this.proj.phaseNumber = this.projectForm.controls.phaseNo.value;
        this.proj.description = this.projectForm.controls.description.value;
        this.projSrv.addProject(this.proj)
        this.display = 'none';
        this.projectForm.reset();
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
