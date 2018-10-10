import { EventEmitter, Inject, Injectable } from '@angular/core';

import { BusinessModules } from '../model/modules.model';

@Injectable()
export class ModulesServices {
    public componentListChanged = new EventEmitter<BusinessModules[]>();
    private componentIdCount: number = 1;
    private components: BusinessModules[] = [];

    constructor() {
        this.createComponent(new BusinessModules("MOB", "Mobile App"));
        this.createComponent(new BusinessModules("WEB", "PC Web"));
        this.createComponent(new BusinessModules("TM", "Target Marketing"));
        this.createComponent(new BusinessModules("AI", "Artificial Intelligence"));
        this.createComponent(new BusinessModules("CS", "Concierge Services"));
        this.createComponent(new BusinessModules("INT", "Integration (Finance, Credit Card, Insurance) Honor Service Analysis Management System"));
        this.createComponent(new BusinessModules("BMS", "Background Management System"));
        this.createComponent(new BusinessModules("OTHERS", "Others"));
    }

    createComponent(BusinessModules: BusinessModules) {
        BusinessModules.id = this.componentIdCount++;
        this.components.push(BusinessModules);
        this.componentListChanged.emit(this.components);
    }

    saveComponent(updatedComponent: BusinessModules) {
        let tobeUpdatedComponent = this.components.find((componentItem) => componentItem.id === updatedComponent.id);
        
        tobeUpdatedComponent.code = updatedComponent.code;
        tobeUpdatedComponent.description = updatedComponent.description;

        this.componentListChanged.emit(this.components);
    }

    deleteComponent(selectedComponent: BusinessModules) {
        let deleteIndex = this.components.indexOf(selectedComponent);
        if (deleteIndex > -1) {
            this.components.splice(deleteIndex, 1);
        }
        this.componentListChanged.emit(this.components);
    }

    getComponents() {
        return this.components.slice();
    }
}