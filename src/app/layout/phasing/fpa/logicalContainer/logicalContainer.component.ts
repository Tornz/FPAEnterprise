import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LogicalContainerServices } from '../../../../data-services/logicalContainer.services';
import { LogicalContainer } from '../../../../model/logicalContainer.model';
import { FPAComponent } from '../fpa.component';

@Component({
    selector: 'app-logicalContainer',
    templateUrl: './logicalContainer.component.html',
    styleUrls: ['./logicalContainer.component.scss'],
    animations: [routerTransition()]
})
export class LogicalContainerComponent implements OnInit {
    // project: any;
    // myVARS
    display = 'none';
    logicalContainerForm: FormGroup;
    logicCon : LogicalContainer;
    modal: any;
    error: boolean = false;
    @Input() data: any;
    constructor(private router: Router, private form: FormBuilder, private fpaSrv: LogicalContainerServices, private fpa: FPAComponent) {

        this.logicalContainerForm = this.form.group({
            // 'id': new FormControl('', Validators.required),
            'description': new FormControl('', Validators.required),
            'createdBy': new FormControl('', Validators.required),
            'updatedBy': new FormControl('', Validators.required),
            'dateUpdated': new FormControl('', Validators.required),
            'type': new FormControl('', Validators.required),
            'appServer': new FormControl('', Validators.required),
            'dbServer': new FormControl('', Validators.required),
            'msServer': new FormControl('', Validators.required)
        })
    }

    public typeList = [{id: 1, item:"PROD"},{id: 2, item:"UAT"}]

    public cols = [{ header: 'Id' }, { header: 'Description' }, { header: 'Date Created' }, 
        { header: 'Date Updated' }, { header: 'Created By' }, { header: 'Updated By' }, 
        { header: 'Type' }, { header: 'App Server' }, { header: 'DB Server' }, { header: 'MS Server' },
        { header: 'Action' } ]
    public logicalContainer = [];

    ngOnInit() {
        console.log("Data from services", this.fpaSrv.getLogicalContainer())
        this.loadData();
    }

    loadData(){
        this.logicalContainer = this.fpaSrv.getLogicalContainer();
    }

    addProj() {
        console.log("Modal")
        this.modal = 'add';
        this.display = 'block';
    }

    onSubmitAdd() {
        let i = this.fpaSrv.logicCount;
        let newDesc = this.logicalContainerForm.controls.description.value;
        let newCreatedBy = this.logicalContainerForm.controls.createdBy.value;
        let newType = this.logicalContainerForm.controls.type.value;
        let newAppServer = this.logicalContainerForm.controls.appServer.value;
        let newDbServer = this.logicalContainerForm.controls.dbServer.value;
        let newMsServer = this.logicalContainerForm.controls.msServer.value;
        console.log("Description", newDesc);
        console.log("Created By", newCreatedBy);
        //console.log("Updated By", newCreatedBy);
        // if (this.userForm.valid) {
            let newLogicCon = { id: i, description: newDesc, dateCreated: new Date(), createdBy: newCreatedBy,
                type: newType, appServer: newAppServer, dbServer: newDbServer, msServer: newMsServer }
            this.fpaSrv.addLogicalContainer(newLogicCon);
            this.display = 'none';
            this.loadData();
            this.logicalContainerForm.reset();
            this.fpaSrv.logicCount = this.fpaSrv.logicCount+1;
    }

    onCloseHandled() {
        this.display = 'none';
    }

    editLogicalContainer(data: any) {
        console.log("Edit Modal", data)
        this.logicCon = data
        this.modal = 'edit';
        this.display = 'block';
    }

    onEditLogicalContainer(data: any) {
        this.logicCon.description = this.logicalContainerForm.controls.description.value;
        this.logicCon.updatedBy = this.logicalContainerForm.controls.createdBy.value;
        this.logicCon.type = this.logicalContainerForm.controls.type.value;
        this.logicCon.appServer = this.logicalContainerForm.controls.appServer.value;
        this.logicCon.dbServer = this.logicalContainerForm.controls.dbServer.value;
        this.logicCon.msServer = this.logicalContainerForm.controls.msServer.value;
        console.log("Edit updated by: ", this.logicCon.updatedBy)
        this.logicCon.dateUpdated = this.logicalContainerForm.controls.dateUpdated.value;
        console.log("Edit date updated: ", this.logicCon.dateUpdated)
        // if (this.logicalContainerForm.valid) {
            console.log("Edit Logical Container", data)
            this.fpaSrv.editLogicalContainer(this.logicCon.id, this.logicCon);
            console.log("EDIT id: " + this.logicCon.id);
            console.log("EDIT logicCon: " + this.logicCon);
            this.display = 'none';
            this.loadData();
        // } else {
        //     console.log("Error user")
        //     this.display = "error";
        //     this.error = true;
        // }
    }

    onDelete(data: any) {        
        console.log("DELETE");
        this.fpaSrv.deleteLogicalContainer(data.id, data);
    }
}