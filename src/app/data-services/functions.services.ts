import { Component, Injectable } from "@angular/core";

import { Functions } from "../model/functions.model";
import { TechnologyItem } from "../model/TechnolonogyItem.model";
import { Subject } from "rxjs";
import { forEach } from "@angular/router/src/utils/collection";

@Injectable()
export class FunctionsServices {
    functionsChanged = new Subject<Functions[]>();
        
    private functionsList: Functions[] = [
        new Functions(1, 'Registration', '01/01/2018', '01/01/2018', 'User 1', 'User 1', false, false),
        new Functions(2, 'Synchonization', '01/01/2018', '01/01/2018', 'User 2', 'User 2', false, false),
        new Functions(3, 'CustomerSPA', '01/01/2018', '01/01/2018', 'User 3', 'User 3', false, false)
    ];

    private frontend: TechnologyItem[] = [new TechnologyItem(1, "Angular/Ionic"),
    new TechnologyItem(2, "Html5"), new TechnologyItem(3, "Jquery"),
    new TechnologyItem(4, "ExtJS"), new TechnologyItem(5, "ReactJS"),
    new TechnologyItem(6, "VueJS"), new TechnologyItem(7, "Android"),
    ];
    private backend: TechnologyItem[] = [];
    private storage: TechnologyItem[] = [];
    private reporting: TechnologyItem[] = [];

    getFunctions() {
        return this.functionsList.slice();
    }
    getFrontend() {
        return this.frontend.slice();
    }
    getBackend() {
        return this.backend.slice();
    }
    getStorage() {
        return this.storage.slice();
    }
    getReporting() {
        return this.reporting.slice();
    }

    deleteFunctions(index: number) {
        this.functionsList.splice(index, 1);
        //  this.backlogChanged.next(this.functionsList.slice());

    }

    saveFunctions(item: Functions[]) {
        item.forEach(element => {
            this.functionsList.push(element);
        });
    }

    saveEditFunctions(item: Functions[]) {
        item.forEach(element => {
            var index = this.functionsList.findIndex(x => x.id == element.id);
            this.functionsList[index] = element;
        });
    }
}


