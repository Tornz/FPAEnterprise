import { EventEmitter, Inject, Injectable } from '@angular/core';

import { ContainerComponent } from '../model/container-component.model';

@Injectable()
export class ComponentServices {
    public componentListChanged = new EventEmitter<ContainerComponent[]>();
    private componentIdCount: number = 1;
    private components: ContainerComponent[] = [];

    constructor() {
        this.createComponent("CRM");
        this.createComponent("No SQL Database");
        this.createComponent("Java");
        this.createComponent("Elastic");
        this.createComponent("Kibana");
        this.createComponent("Logstash");
        this.createComponent("Node JS");
    }

    createComponent(name: string) {
        let ProjectComponent: ContainerComponent = new ContainerComponent(name);
        ProjectComponent.id = this.componentIdCount++
        this.components.push(ProjectComponent);
        this.componentListChanged.emit(this.components);
    }

    saveComponent(ProjectComponent: ContainerComponent) {
        this.components.find((componentItem) => componentItem.id === ProjectComponent.id).name = ProjectComponent.name;
        this.componentListChanged.emit(this.components);
    }

    deleteComponent(ProjectComponent: ContainerComponent) {
        let deleteIndex = this.components.indexOf(ProjectComponent);
        if (deleteIndex > -1) {
            this.components.splice(deleteIndex, 1);
        }
        this.componentListChanged.emit(this.components);
    }

    getComponents() {
        return this.components.slice();
    }
}