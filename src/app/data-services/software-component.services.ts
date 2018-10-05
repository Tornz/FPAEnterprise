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
    ];

    private softwareCategoryList: SoftwareCategory[] = [
        new SoftwareCategory(1, "Content Management System"),
        new SoftwareCategory(2, "Operating System"),
        new SoftwareCategory(3, "Virtualization"),
        new SoftwareCategory(4, "API Manager"),
        new SoftwareCategory(5, "Web Server"),
        new SoftwareCategory(6, "UI"),
        new SoftwareCategory(7, "Database"),
        new SoftwareCategory(8, "ELK")
    ];

    private softwareComponents: SoftwareComponent[] = [];

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
}
