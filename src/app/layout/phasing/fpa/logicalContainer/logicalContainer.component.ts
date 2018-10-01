import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LogicalContainerServices } from '../../../../data-services/logicalContainer.services';
import { LogicalContainer } from '../../../../model/logicalContainer.model';
import { FPAComponent } from '../fpa.component';
import { ComponentServices } from '../../../../data-services/component.services';

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
    searchString: string;
    columnFilter: string = 'server';

    constructor(private router: Router, private form: FormBuilder, private fpaSrv: LogicalContainerServices, private fpa: FPAComponent, private componentService: ComponentServices) {

        this.logicalContainerForm = this.form.group({
            // 'id': new FormControl('', Validators.required),
            'server': new FormControl('', Validators.required),
            'vCpu': new FormControl('', Validators.required),
            'ram': new FormControl('', Validators.required),
            'dataStorage': new FormControl('', Validators.required),
            'prodQuantity': new FormControl('', Validators.required),
            'drQuantity': new FormControl('', Validators.required),
            'uatQuantity': new FormControl('', Validators.required),
            'sitDevQuantity': new FormControl('', Validators.required),
            'components': new FormControl('', Validators.required)
        })
    }

    public typeList = [{id: 1, item:"PROD"},{id: 2, item:"UAT"}]

    public cols = [{ header: 'ID' }, { header: 'Server' }, { header: 'vCPU (Core)' }, 
        { header: 'RAM (GB)' }, { header: 'Data Storage (GB)' }, { header: 'PRD (Quantity)' }, 
        { header: 'DR (Quantity)' }, { header: 'UAT (Quantity)' }, { header: 'SIT/DEV (Quantity)' }, { header: 'Total Quantity' },
        { header: 'Action' } ]
    public logicalContainers = [];
    public componentOptions: any[];

    ngOnInit() {
        console.log("Data from services", this.fpaSrv.getLogicalContainers())
        this.loadData();
        this.componentOptions = this.componentService.getComponents();
        this.searchString = '';
    }

    loadData(){
        this.logicalContainers = this.fpaSrv.getLogicalContainers();
    }

    addProj() {
        console.log("Modal")
        this.modal = 'add';
        this.display = 'block';
        this.logicalContainerForm.reset();
    }

    onSubmitAdd() {
        let i = this.fpaSrv.logicCount;
        let newServer = this.logicalContainerForm.controls.server.value;
        let newVCpu = this.logicalContainerForm.controls.vCpu.value;
        let newRam = this.logicalContainerForm.controls.ram.value;
        let newDataStorage = this.logicalContainerForm.controls.dataStorage.value;
        let newProdQuantity = this.logicalContainerForm.controls.prodQuantity.value;
        let newDRQuantity = this.logicalContainerForm.controls.drQuantity.value;
        let newUATQuantity = this.logicalContainerForm.controls.uatQuantity.value;
        let newSITDevQuantity = this.logicalContainerForm.controls.sitDevQuantity.value;
        let newComponents = this.logicalContainerForm.controls.components.value;

        let newTotalQuantity = newProdQuantity + newDRQuantity + newUATQuantity + newSITDevQuantity;
        
        console.log("Description", newServer);
        console.log("Created By", newVCpu);
        //console.log("Updated By", newVCpu);
        // if (this.userForm.valid) {
        let newLogicCon = { id: i, server: newServer, vCpu: newVCpu, ram: newRam,
            dataStorage: newDataStorage, prodQuantity: newProdQuantity, drQuantity: newDRQuantity, uatQuantity: newUATQuantity, sitDevQuantity: newSITDevQuantity, totalQuantity: newTotalQuantity, components: newComponents }
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
        console.log("Edit Modal logicCon", this.logicCon);
    }

    onEditLogicalContainer(data: any) {
        this.logicCon.server = this.logicalContainerForm.controls.server.value;
        this.logicCon.vCpu = this.logicalContainerForm.controls.vCpu.value;
        this.logicCon.ram = this.logicalContainerForm.controls.ram.value;
        this.logicCon.dataStorage = this.logicalContainerForm.controls.dataStorage.value;
        this.logicCon.prodQuantity = this.logicalContainerForm.controls.prodQuantity.value;
        this.logicCon.drQuantity = this.logicalContainerForm.controls.drQuantity.value;
        this.logicCon.uatQuantity = this.logicalContainerForm.controls.uatQuantity.value;
        this.logicCon.sitDevQuantity = this.logicalContainerForm.controls.sitDevQuantity.value;
        this.logicCon.components = this.logicalContainerForm.controls.components.value;

        this.logicCon.totalQuantity = this.logicCon.prodQuantity + this.logicCon.drQuantity + this.logicCon.uatQuantity + this.logicCon.sitDevQuantity;
        
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