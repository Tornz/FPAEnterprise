import { Component, OnInit } from '@angular/core';
import { BacklogServices } from '../../../../data-services/backlog.services';
import { TechnologyItem } from '../../../../model/TechnolonogyItem.model';
import { Backlog } from '../../../../model/backlog.model';
import { Functions } from '../../../../model/functions.model';
import { FunctionsServices } from '../../../../data-services/functions.services';
import { Select2OptionData } from 'ng2-select2';
import {  Subscription } from 'rxjs';

@Component({
    selector: 'app-functions',
    templateUrl: './functions.component.html',
    styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent implements OnInit {
    activeTab = [];
    functions: Functions[] = [];
    editRowID: any='';
    display = 'none';
    modalLabel = "";
    frontendOption: Array<Select2OptionData>;
    backendOption: Array<Select2OptionData>;
    reportingOption: Array<Select2OptionData>;
    storageOption: Array<Select2OptionData>;
    selectOptions = {};
    functionsSubscription: Subscription;

    constructor(private functionsServices: FunctionsServices) { }

    ngOnInit() {
        this.functions = this.functionsServices.getFunctions();
        this.frontendOption = this.assignOptionValue(this.functionsServices.getFrontend()); 
        this.selectOptions = {
            placeholder: { id: '', text: 'Select Record' },
            width: "100px",
            name: 'empPosition'
        }
        //this.EditRow(0);
    }

    assignOptionValue(item: TechnologyItem[]) {
        const tempData = [];
        var data = {
            'id': '',
            'text': ''
        }
        tempData.push(data);
        item.forEach(element => {
            var data = {
                'id': element.technologyItemId,
                'text': element.description
            }
            tempData.push(data);
        });
        return tempData;
    }

    EditRow(val) {
        this.editRowID = val;
        this.functions[val].edited = true;
    }

    addFunction() {
        var count = this.functions.length;
        //const newitem = new Functions(0, '', '', 0, 0, '', 0, 0, '', 0, 0, '', 0, 0, '', 0, 0, '', '<a (click)="onFunction()">Function</a>', false);
        const newitem = new Functions(0, '', '', '', '', '', false, false);
        this.functions.push(newitem);
        this.editRowID = count;
    }

    onDelete(item:Backlog,index: number) {        
        this.functionsServices.deleteFunctions(index);        
        this.functions.splice(index, 1);
    }

    onSave() {        
        const saveFunctions = this.functions.filter(x => x.id == 0);
        const editFunctions = this.functions.filter(x => x.edited == true);        
        this.functionsServices.saveFunctions(saveFunctions);
        this.functionsServices.saveEditFunctions(editFunctions);
        if (saveFunctions.length > 0 || editFunctions.length > 0) {
    
            this.display = 'block';
            this.modalLabel = "Record Saved!!";
        }  
    }

    onCloseHandled() {
        this.display = 'none';
    }

    saveProj(projectData) {
        console.log('data', projectData);
    }
}