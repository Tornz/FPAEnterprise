import { Injectable } from '@angular/core';
import { SoftwareCategory } from '../model/software-category.model';
import { ContainerComponent } from '../model/container-component.model';
import { SoftwareComponent } from '../model/software-component.model';
import { Subject } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class SoftwareComponentService {
    private softwareList: ContainerComponent[] = [
        new ContainerComponent("Joomla", 1, "Content Management System", "Joomla - 3.8.11", true, "Apache"),
        new ContainerComponent("Wordpress", 1, "Content Management System", "v1.0.5", true, "Apache"),
        new ContainerComponent("Drupal", 1, "Content Management System", "v1.0.5", true, "Apache"),
        new ContainerComponent("Redhat", 2, "Operating System", "Red Hat Enterprise Linux 7.5", true, "Apache"),
        new ContainerComponent("Ubuntu", 2, "Operating System", "18.04.01 LTS", true, "Apache"),
        new ContainerComponent("Docker", 3, "Virtualization", "Docker Enterprise Advanced Edition 2.0", true, "Apache"),
        new ContainerComponent("WSO2 API Manager", 4, "API Manager", "WSO2 API Manager - 2.1.0  ", true, "GNU"),
        new ContainerComponent("NGINX", 5, "Web Server", "NGINX - 1.14.0", true, "GNU"),
        new ContainerComponent("Angular", 6, "UI", "Angular - 6.1.3", true, "Apache"),
        new ContainerComponent("Oracle", 7, "Database", "Oracle Database - 11g or above", true, "Apache"),
        new ContainerComponent("Elastic Search", 8, "ELK", "elasticSearch - 6.3", true, "Apache"),
        new ContainerComponent("Kibana", 8, "ELK", "Kibana - 6.3.0", true, "Apache"),
        new ContainerComponent("SAP CRM", 1, "Application Module", "v1", false, ""),
    ];
    private softwareCategoryList: SoftwareCategory[] = [
        /*new SoftwareCategory(1, "Content Management System"),
        new SoftwareCategory(2, "Operating System"),
        new SoftwareCategory(3, "Virtualization"),
        new SoftwareCategory(4, "API Manager"),
        new SoftwareCategory(5, "Web Server"),
        new SoftwareCategory(6, "UI"),
        new SoftwareCategory(7, "Database"),
        new SoftwareCategory(8, "ELK")*/
        new SoftwareCategory(1, "Application Module"),
        new SoftwareCategory(2, "Third Party Microservices"),
        new SoftwareCategory(3, "Supporting Components"),
        new SoftwareCategory(4, "Data Storage"),
        new SoftwareCategory(5, "Supporting Components")
    ];
    private softwareComponents: SoftwareComponent[] = [
        /*new SoftwareComponent(1, 7, "Docker", "Docker 1"),
        new SoftwareComponent(2, 5, "NGINX", "Web Server 1"),
        new SoftwareComponent(3, 2, "Redhat", "OS 1")*/
        new SoftwareComponent(1, 1, "Joomla", "Content Management System"),
        new SoftwareComponent(2, 1, "SAP CRM", "Customer Relationship Management"),
        new SoftwareComponent(3, 1, "", "Advanced Analytics Presentation"),
        new SoftwareComponent(4, 2, "", "Enterprise Integrator"),
        new SoftwareComponent(5, 2, "", "SKL/CTI Agents/Call Managers"),
        new SoftwareComponent(6, 2, "", "SKB/CTI Agents/Call Managers"),
        new SoftwareComponent(7, 2, "", "SKL Analytics Results"),
        new SoftwareComponent(8, 2, "", "SKB Analytics Results"),
        new SoftwareComponent(9, 2, "", "Other .Net Modules"),
        new SoftwareComponent(10, 2, "", "Chatbot"),
        new SoftwareComponent(11, 3, "", "Visual exploration and real-time analysis"),
        new SoftwareComponent(12, 3, "", "Log Manager"),
        new SoftwareComponent(13, 3, "Elastic Search", "Search Engine"),
        new SoftwareComponent(14, 3, "", "Source Code Repository"),
        new SoftwareComponent(15, 3, "", "Configuration Management"),
        new SoftwareComponent(16, 3, "Docker", "Dockers Orchestration")
    ];

    constructor() { }
    getSoftwareList() {
        return this.softwareList.slice();
    }

    getSoftwareListForCategory(categoryID: number) {
        return this.softwareList.filter(el => el.categoryID == categoryID);
    }

    getSoftwareCategoryList() {
        return this.softwareCategoryList.slice();
    }

    getSoftwareComponentList() {
        return this.softwareComponents.slice();
    }

    saveNewComponent(newComponent: SoftwareComponent) {
        this.softwareComponents.push(newComponent);
    }

    editFunction(data: SoftwareComponent) {
        for (var i in this.softwareComponents) {
            if (this.softwareComponents[i].id == data.id) {
                this.softwareComponents[i].softwareCategoryID = data.softwareCategoryID;
                this.softwareComponents[i].softwareName = data.softwareName;
                this.softwareComponents[i].name = data.name;
                return true;
            }
        }
    }

    generateID() {
        return this.softwareComponents.length + 1;
    }

    deleteSoftwareComponent(id: number) {
        this.softwareComponents = this.softwareComponents.filter(s => s.id != id);
        return true;
    }
}