import { Injectable } from "@angular/core";

import { Backlog } from "../model/backlog.model";
import { TechnologyItem } from "../model/TechnolonogyItem.model";
import { Subject } from "rxjs";



@Injectable()
export class BacklogServices{
    backlogChanged = new Subject<Backlog[]>();
    private backloglist : Backlog[] = [
        new Backlog(1,'Registration', 'Registration System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '',false),
        new Backlog(2, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '',false),
        new Backlog(3, 'CustomerSPA', 'SPA', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '',false)
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


