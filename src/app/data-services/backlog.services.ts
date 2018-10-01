import { Injectable } from "@angular/core";

import { Backlog } from "../model/backlog.model";
import { TechnologyItem } from "../model/TechnolonogyItem.model";
import { Subject } from "rxjs";



@Injectable()
export class BacklogServices{
    backlogChanged = new Subject<Backlog[]>();
    private backloglist : Backlog[] = [
        new Backlog(1,'Registration', 'Registration System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(2, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(3, 'CustomerSPA', 'SPA', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(4,'Registration', 'Registration System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(5, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(6, 'CustomerSPA', 'SPA', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(7,'Registration', 'Registration System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(8, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(9, 'CustomerSPA', 'SPA', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(10,'Registration', 'Registration System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(11, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(12, 'CustomerSPA', 'SPA', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(13,'Registration', 'Registration System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(14, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(15, 'CustomerSPA', 'SPA', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(16,'Registration', 'Registration System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(17, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(18, 'CustomerSPA', 'SPA', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(19,'Registration', 'Registration System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(20, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(21, 'CustomerSPA', 'SPA', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(22,'Registration', 'Registration System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(23, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(24, 'CustomerSPA', 'SPA', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(25,'Registration', 'Registration System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(26, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(27, 'CustomerSPA', 'SPA', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(28,'Registration', 'Registration System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(29, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(30, 'CustomerSPA', 'SPA', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(31,'Registration', 'Registration System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(32, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(33, 'CustomerSPA', 'SPA', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(34,'Registration', 'Registration System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(35, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(36, 'CustomerSPA', 'SPA', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(37,'Registration', 'Registration System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(38, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false),
        new Backlog(39, 'CustomerSPA', 'SPA', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', false)
    ];

    private frontend: TechnologyItem[] = [new TechnologyItem(1, "Angular/Ionic"),
        new TechnologyItem(2, "Html5"), new TechnologyItem(3, "Jquery"),
        new TechnologyItem(4, "ExtJS"), new TechnologyItem(5, "ReactJS"),
        new TechnologyItem(6, "VueJS"), new TechnologyItem(7, "Android"),
    ];
    private backend: TechnologyItem[] = [];
    private storage: TechnologyItem[] = [];
    private reporting: TechnologyItem[] = [];

    getBacklog() {
        return this.backloglist.slice();
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

    deleteBacklog(index: number) {    
        this.backloglist.splice(index, 1);       
      //  this.backlogChanged.next(this.backloglist.slice());
        
    }

    saveBacklog(item: Backlog[]) {
        item.forEach(element => {
            this.backloglist.push(element);
        });
    }

    saveEditBacklog(item: Backlog[]) {
        item.forEach(element => {
            var index = this.backloglist.findIndex(x => x.id == element.id);
            this.backloglist[index] = element;
        });
    }
}


