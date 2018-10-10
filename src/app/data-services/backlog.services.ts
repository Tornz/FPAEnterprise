import { Injectable } from "@angular/core";

import { Backlog } from "../model/backlog.model";
import { TechnologyItem } from "../model/TechnolonogyItem.model";
import { Subject } from "rxjs";



@Injectable()
export class BacklogServices{
    backlogChanged = new Subject<Backlog[]>();
    private backloglist : Backlog[] = [
        new Backlog(1,'Registration', 'User Access Validation by Mobile + Password', 3, 5, 'Redis', 3, 5, 'JSON', 3, 4, 'Ionic/Angular', 3, 3, 'WSO2', 3, 3, 'Ionic/Angular', '30', 9.45, false),
        new Backlog(2,'Registration', 'User Access Validation by Fingerprint', 3, 5, 'Redis', 3, 5, 'JSON', 3, 4, 'Ionic/Angular', 3, 3, 'WSO2', 3, 3, 'Ionic/Angular', '30', 9.45, false),
        new Backlog(3,'Registration', 'User Access Validation by Other Identification', 3, 5, 'Redis', 3, 5, 'JSON', 3, 4, 'Ionic/Angular', 3, 3, 'WSO2', 3, 3, 'Ionic/Angular', '30', 9.45, false),
        new Backlog(4,'Scanning', 'Validation by QR Code', 2, 2, 'Redis', 2, 2, 'JSON', 2, 2, 'Ionic/Angular', 2, 2, 'Ionic/Angular', 2, 2, 'Ionic/Angular', '30', 6.75, false),
        new Backlog(3,'Landing', 'Campaigns - Products', 3, 6, 'Redis', 3, 6, 'JSON', 0, 0, '', 3, 6, 'Joomla', 3, 6, 'Ionic/Angular', '30', 6.75, false),
        new Backlog(3,'Landing', 'Campaigns - Events', 3, 6, 'Redis', 3, 6, 'JSON', 0, 0, '', 3, 6, 'Joomla', 3, 6, 'Ionic/Angular', '30', 6.75, false),
        new Backlog(3,'Landing', 'Campaigns - Marketing', 3, 6, 'Redis', 3, 6, 'JSON', 0, 0, '', 3, 6, 'Joomla', 3, 6, 'Ionic/Angular', '30', 6.75, false),
        new Backlog(3,'Landing', 'Strategic Alliance', 3, 6, 'Redis', 3, 6, 'JSON', 0, 0, '', 3, 6, 'Joomla', 3, 6, 'Ionic/Angular', '30', 6.75, false),
        new Backlog(4,'CustomerSPA', 'Get Customer Information', 1, 3, 'Redis', 1, 3, 'JSON', 0, 0, '', 1, 6, 'Ionic/Angular', 1, 6, 'Ionic/Angular', '30', 9.45, false),
        new Backlog(5,'PMARecommendation', 'Member Registration', 1, 4, 'Redis', 1, 4, 'JSON', 1, 5, 'Ionic/Angular', 1, 6, 'Ionic/Angular', 3, 10, 'Ionic/Angular', '30', 9.45, false),
        new Backlog(6,'Target Marketing', 'Warehouse API', 0, 0, '', 0, 0, '', 3, 30, 'Ionic/Angular', 3, 30, 'WSO2', 3, 30, 'Ionic/Angular', '30', 5.4, false),
        new Backlog(6,'Background Management System', 'View Product', 0, 0, '', 0, 0, '', 0, 0, '', 1, 6, 'Joomla', 1, 6, 'Ionic/Angular', '30', 5.4, false),
        new Backlog(6,'Background Management System', 'View Event', 0, 0, '', 0, 0, '', 0, 0, '', 1, 6, 'Joomla', 1, 6, 'Ionic/Angular', '30', 5.4, false),
        new Backlog(6,'Background Management System', 'View Message', 0, 0, '', 0, 0, '', 0, 0, '', 1, 6, 'Joomla', 1, 6, 'Ionic/Angular', '30', 5.4, false),
    ];

    private frontend: TechnologyItem[] = [new TechnologyItem(1, "Angular/Ionic"),
        new TechnologyItem(2, "WSO2"), new TechnologyItem(3, "Joomla"), new TechnologyItem(4, "Kibana"), 
        new TechnologyItem(5, "Html5"), new TechnologyItem(6, "Jquery"), new TechnologyItem(7, "ExtJS"), 
        new TechnologyItem(8, "ReactJS"), new TechnologyItem(9, "VueJS"), new TechnologyItem(10, "Android"),
        new TechnologyItem(11, "JSON"), new TechnologyItem(12, "XML"), , new TechnologyItem(13, "Redis")
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


