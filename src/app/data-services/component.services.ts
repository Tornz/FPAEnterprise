import { EventEmitter, Inject, Injectable } from '@angular/core';

import { ContainerComponent } from '../model/container-component.model';

@Injectable()
export class ComponentServices {
    public componentListChanged = new EventEmitter<ContainerComponent[]>();
    private componentIdCount: number = 1;
    private components: ContainerComponent[] = [];

    constructor() {
        this.createComponent(new ContainerComponent("OS", null, 'Linux', 'Red Hat Enterprise Linux 7.5', false, 'Yes'));
        this.createComponent(new ContainerComponent("Docker", null,  'Virtualization', 'Docker Enterprise Advanced Edition 2.0', false, 'Yes'));
        this.createComponent(new ContainerComponent("WSO2 API Manager", null,  'API Manager', 'WSO2 API Manager - 2.1.0', true, 'No'));
        this.createComponent(new ContainerComponent("WSO2 Identity Server", null,  'Identity Server', 'WSO2 Identity & Access Management - 5.5.0', true, 'No'));
        this.createComponent(new ContainerComponent("NGINX", null, 'Web Server', 'NGINX-1.15.4', true, 'No'));
        this.createComponent(new ContainerComponent("Angular", null,  'UI', 'Angular - 6.1.3', true, 'No'));
        this.createComponent(new ContainerComponent("Qlik Sense", null,  '', 'Qlik Sense - 3.2', false, '1 - PU 6 - AU'));
        this.createComponent(new ContainerComponent("Joomla", null,  'CMS', 'Joomla 3.8', true, 'Templates'));
        this.createComponent(new ContainerComponent("Spring-Boot", null,  'Java Framework', 'Spring-Boot 2', true, 'No'));
        this.createComponent(new ContainerComponent("EKL", null,  'Kibana', 'Kibana - 6.3.0', true, 'No'));
        this.createComponent(new ContainerComponent("EKL", null,  'Elastic Search', 'Elastic Search - 6.3', true, 'No'));
        this.createComponent(new ContainerComponent("EKL", null,  'Logstash', 'Logstash - 6.3', true, 'No'));
        this.createComponent(new ContainerComponent("NexusOSS Sonatype Artifacts Repository", null,  'NexusOSS Sonatype', '', true, 'No'));
        this.createComponent(new ContainerComponent("Oracle for Linux", null,  'DB', 'Oracle Database - 11g or above', false, 'Yes'));
        this.createComponent(new ContainerComponent("Redis", null, 'Virtualization', '', true, 'No'));
        this.createComponent(new ContainerComponent("Private Registry", null,  'Private Registry', '', true, 'No'));
        this.createComponent(new ContainerComponent("Build and Packing", null,  'Build and Packing', 'Jerkins', true, 'No'));
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