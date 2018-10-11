import { EventEmitter, Inject, Injectable } from '@angular/core';

import { ContainerComponent } from '../model/container-component.model';
import { KeyValue } from '../model/keyvalue.model';

@Injectable()
export class ComponentServices {
    public componentListChanged = new EventEmitter<ContainerComponent[]>();
    private componentIdCount: number = 1;
    private components: ContainerComponent[] = [];

    constructor() {
        this.createComponent(new ContainerComponent("Redhat", 3, 'Operating System', 'RHEL 7.5', false, 'Yes',
        [new KeyValue(1,'RHEL 7.5'),new KeyValue(2,'RHEL 7.4'),new KeyValue(2,'RHEL 7.3'),new KeyValue(3,'RHEL 7.2')]));
        this.createComponent(new ContainerComponent("Docker", 3,  'Virtualization', 'Docker 18.03.1-ee-3', false, 'Yes',
        [new KeyValue(1,'Docker 18.03.1-ee-3'),new KeyValue(2,'Docker 18.03.1-ee-2'),new KeyValue(3,'Docker 18.03.1-ee-1'),new KeyValue(4,'Docker 17.06.2-ee-16')]));
        this.createComponent(new ContainerComponent("WSO2 API Manager", 1,  'API Manager', 'WSO2 API Manager 2.6.0', true, 'No',
        [new KeyValue(1,'WSO2 API Manager 2.6.0'),new KeyValue(2,'WSO2 API Manager 2.6.0'),new KeyValue(3,'WSO2 API Manager 2.5.0'),new KeyValue(1,'WSO2 API Manager 2.2.0')]));
        this.createComponent(new ContainerComponent("WSO2 Identity Server", 1,  'Identity Server', 'WSO2 Identity Server 5.7.0', true, 'No',
        [new KeyValue(1,'WSO2 Identity Server 5.7.0'),new KeyValue(2,'WSO2 Identity Server 5.6.0'),new KeyValue(3,'WSO2 Identity Server 5.5.0')]));
        this.createComponent(new ContainerComponent("NGINX", 3, 'Web Server', 'NGINX-1.15.5', true, 'No',
        [new KeyValue(1,'NGINX-1.15.5'),new KeyValue(2,'NGINX-1.15.4'),new KeyValue(3,'NGINX-1.15.3')]));
        this.createComponent(new ContainerComponent("Angular", 1,  'UI', 'Angular - 6.1.3', true, 'No',
        [new KeyValue(1,'Angular - 6.1.3'),new KeyValue(2,'Angular - 5.2.9'),new KeyValue(3,'Angular - 6.1.10')]));
        this.createComponent(new ContainerComponent("Qlik Sense", 2,  '', 'Qlik Sense - 3.2', false, '1 - PU 6 - AU',
        [new KeyValue(1,'Qlik Sense - 3.2'),new KeyValue(2,'Qlik Sense - 3.1'),new KeyValue(3,'Qlik Sense - 3.0')]));
        this.createComponent(new ContainerComponent("Joomla", 1,  'CMS', 'Joomla 3.8', true, 'Templates',
        [new KeyValue(1,'Joomla 3.8'),new KeyValue(2,'Joomla 3.9'),new KeyValue(3,'Joomla 3.10')]));
        this.createComponent(new ContainerComponent("Spring-Boot", 1,  'Java Framework', 'Spring-Boot 2.1.0M4', true, 'No',
        [new KeyValue(1,'Spring-Boot 2.1.0M4'),new KeyValue(2,'Spring-Boot 2.1.0M3'),new KeyValue(3,'Spring-Boot 2.0.5')]));
        this.createComponent(new ContainerComponent("Kibana", 3,  'ELK', 'Kibana - 6.4.0', true, 'No',
        [new KeyValue(1,'Kibana - 6.4.0'),new KeyValue(2,'Kibana - 6.3.0'),new KeyValue(3,'Kibana - 6.2.4')]));
        this.createComponent(new ContainerComponent("Elastic Search", 3,  'ELK', 'Elastic Search - 6.4.2', true, 'No',
        [new KeyValue(1,'Elastic Search - 6.4.2'),new KeyValue(2,'Elastic Search - 5.6.12'),new KeyValue(3,'Elastic Search - 6.3.2')]));
        this.createComponent(new ContainerComponent("Logstash", 3,  'ELK', 'Logstash - 6.4.2', true, 'No',
        [new KeyValue(1,'Logstash - 6.4.2'),new KeyValue(2,'Logstash - 5.6.12'),new KeyValue(3,'Logstash - 6.3.2')]));
        this.createComponent(new ContainerComponent("NexusOSS Sonatype", 4,  'NexusOSS Sonatype Artifacts Repository', 'NexusOSS Sonatype 3', true, 'No',
        [new KeyValue(1,'NexusOSS Sonatype 3'),new KeyValue(2,'NexusOSS Sonatype 2'),new KeyValue(3,'NexusOSS Sonatype 1')]));
        this.createComponent(new ContainerComponent("Oracle for Linux", 4,  'DB', 'Oracle Database - 12c', false, 'Yes',
        [new KeyValue(1,'Oracle Database - 12c'),new KeyValue(2,'Oracle Database - 11g'),new KeyValue(3,'Oracle Database - 10g')]));
        this.createComponent(new ContainerComponent("Redis", 2, 'Virtualization', 'Redis 4.0.11', true, 'No',
        [new KeyValue(1,'Redis 4.0.11'),new KeyValue(2,'Redis 4.0.10'),new KeyValue(3,'Redis 4.0.9')]));
        this.createComponent(new ContainerComponent("Private Registry", 2,  'Private Registry', '', true, 'No',
        [new KeyValue(1,''),new KeyValue(2,''),new KeyValue(3,'')]));
        this.createComponent(new ContainerComponent("Jenkins", 3,  'Build and Packing', 'Jenkins 2.146', true, 'No',
        [new KeyValue(1,'Jenkins 2.146'),new KeyValue(2,'Jenkins 2.145'),new KeyValue(3,'Jenkins 2.144')]));
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