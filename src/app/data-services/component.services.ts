import { EventEmitter, Inject, Injectable } from '@angular/core';

import { ContainerComponent } from '../model/container-component.model';

@Injectable()
export class ComponentServices {
    public componentListChanged = new EventEmitter<ContainerComponent[]>();
    private componentIdCount: number = 1;
    private components: ContainerComponent[] = [];

    constructor() {
        this.createComponent(new ContainerComponent("OS", 'OS', 'Redhat 7.5', true, ''));
        this.createComponent(new ContainerComponent("Docker", 'Virtualization', 'Docker', false, ''));
        this.createComponent(new ContainerComponent("WSO2 API Manager", 'API Manager', 'WSO2', true, ''));
        this.createComponent(new ContainerComponent("WSO2 Identity Server", '', '', false, ''));
        this.createComponent(new ContainerComponent("NGINX", 'Web Server', 'nginx-1.15.4', true, ''));
        this.createComponent(new ContainerComponent("Qlik Sense", '', '', false, '1 - PU 6 - AU'));
        this.createComponent(new ContainerComponent("Joomla", 'CMS', 'Joomla 3.8', true, 'Templates'));
        this.createComponent(new ContainerComponent("Spring-Boot", 'Java Framework', 'Spring-Boot 2', true, ''));
        this.createComponent(new ContainerComponent("Kibana", '', '', true, ''));
        this.createComponent(new ContainerComponent("Elastic Search", '', '', true, ''));
        this.createComponent(new ContainerComponent("Logstash", '', '', true, ''));
        this.createComponent(new ContainerComponent("NexusOSS", '', '', true, ''));
        this.createComponent(new ContainerComponent("Sonatype Artifacts", '', '', true, ''));
        this.createComponent(new ContainerComponent("SuiteCRM", '', '', true, ''));
        this.createComponent(new ContainerComponent("Oracle", '', '', false, ''));
        this.createComponent(new ContainerComponent("Redis", '', '', false, ''));
    }

    createComponent(containerComponent: ContainerComponent) {
        containerComponent.id = this.componentIdCount++;
        this.components.push(containerComponent);
        this.componentListChanged.emit(this.components);
    }

    saveComponent(updatedComponent: ContainerComponent) {
        let tobeUpdatedComponent = this.components.find((componentItem) => componentItem.id === updatedComponent.id);
        
        tobeUpdatedComponent.name = updatedComponent.name;
        tobeUpdatedComponent.softwareCategory = updatedComponent.softwareCategory;
        tobeUpdatedComponent.recommendedVersion = updatedComponent.recommendedVersion;
        tobeUpdatedComponent.openSource = updatedComponent.openSource;
        tobeUpdatedComponent.license = updatedComponent.license;

        this.componentListChanged.emit(this.components);
    }

    deleteComponent(selectedComponent: ContainerComponent) {
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