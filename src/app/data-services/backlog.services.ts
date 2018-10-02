import { Injectable } from "@angular/core";

import { Backlog } from "../model/backlog.model";
import { TechnologyItem } from "../model/TechnolonogyItem.model";
import { Subject } from "rxjs";



@Injectable()
export class BacklogServices{
    backlogChanged = new Subject<Backlog[]>();
    private backloglist : Backlog[] = [
        new Backlog(1,'Registration', 'Registration System', 3, 5, 'Redis', 3, 5, 'JSON', 0, 0, '', 0, 0, '', 0, 0, '', '30', 9.45, false),
        new Backlog(2,'Scanning', 'Scanning System', 2, 2, 'Redis', 2, 2, 'JSON', 0, 0, '', 0, 0, '', 0, 0, '', '30', 6.75, false),
        new Backlog(3,'Landing', 'Landing', 3, 6, 'Redis', 3, 6, 'JSON', 0, 0, '', 0, 0, '', 0, 0, '', '30', 6.75, false),
        new Backlog(4,'CustomerSPA', 'Customer SPA', 1, 3, 'Redis', 1, 3, 'JSON', 0, 0, '', 0, 0, '', 0, 0, '', '30', 9.45, false),
        new Backlog(5,'PMARecommendation', 'PMA Recommendation', 1, 4, 'Redis', 1, 4, 'JSON', 0, 0, '', 0, 0, '', 0, 0, '', '30', 9.45, false),
        new Backlog(6,'User Access Validation by Mobile + Password', 'User Access Validation by Mobile + Password', 0, 0, '', 0, 0, '', 3, 3, 'Ionic/Angular', 3, 3, 'WSO2', 3, 3, 'Ionic/Angular', '30', 6.75, false),
        new Backlog(7,'User Access Validation by Fingerprint', 'User Access Validation by Fingerprint', 0, 0, '', 0, 0, '', 3, 3, 'Ionic/Angular', 3, 3, 'WSO2', 3, 3, 'Ionic/Angular', '30', 4.05, false),
        new Backlog(8,'User Access Validation by Other Identification', 'User Access Validation by Other Identification', 0, 0, '', 0, 0, '', 3, 3, 'Ionic/Angular', 3, 3, 'WSO2', 3, 3, 'Ionic/Angular', '30', 4.05, false),
        new Backlog(9,'Validation by QR Code', 'Validation by QR Code', 0, 0, '', 0, 0, '', 2, 2, 'Ionic/Angular', 2, 2, 'Ionic/Angular', 2, 2, 'Ionic/Angular', '30', 4.05, false),
        new Backlog(10,'Member Registration', 'Member Registration', 0, 0, '', 0, 0, '', 1, 5, 'Ionic/Angular', 0, 0, '', 0, 0, '', '30', 4.05, false),
        new Backlog(11,'API Input', 'API Input', 0, 0, '', 0, 0, '', 3, 30, 'Ionic/Angular', 0, 0, '', 0, 0, '', '30', 5.40, false),
        new Backlog(12,'Campaigns - Products', 'Campaigns - Products', 0, 0, '', 0, 0, '', 0, 0, '', 3, 6, 'Joomla', 3, 6, 'Ionic/Angular', '30', 5.40, false),
        new Backlog(13,'Campaigns - Events', 'Campaigns - Events', 0, 0, '', 0, 0, '', 0, 0, '', 3, 6, 'Joomla', 3, 6, 'Ionic/Angular', '30', 5.40, false),
        new Backlog(14,'Campaigns - Marketing', 'Campaigns - Marketing', 0, 0, '', 0, 0, '', 0, 0, '', 3, 6, 'Joomla', 3, 6, 'Ionic/Angular', '30', 5.40, false),
        new Backlog(15,'Strategic Alliance', 'Strategic Alliance', 0, 0, '', 0, 0, '', 0, 0, '', 3, 6, 'Joomla', 3, 6, 'Ionic/Angular', '30', 5.40, false),
        new Backlog(16,'Get Customer Information', 'Get Customer Information', 0, 0, '', 0, 0, '', 0, 0, '', 1, 6, 'Ionic/Angular', 3, 6, 'Ionic/Angular', '30', 5.40, false),
        new Backlog(17,'Get Reservation Details', 'Get Reservation Details', 0, 0, '', 0, 0, '', 0, 0, '', 3, 10, 'Ionic/Angular', 3, 10, 'Ionic/Angular', '30', 5.40, false),
        new Backlog(18,'Warehouse API Response', 'Warehouse API Response', 0, 0, '', 0, 0, '', 0, 0, '', 3, 30, 'WSO2', 3, 30, 'Ionic/Angular', '30', 5.40, false),
        new Backlog(19,'View Product', 'View Product', 0, 0, '', 0, 0, '', 0, 0, '', 1, 6, 'Joomla', 1, 6, 'Ionic/Angular', '30', 5.40, false),
        new Backlog(20,'View Event', 'View Event', 0, 0, '', 0, 0, '', 0, 0, '', 1, 6, 'Joomla', 1, 6, 'Ionic/Angular', '30', 5.40, false),
        new Backlog(21,'View Message', 'View Message', 0, 0, '', 0, 0, '', 0, 0, '', 1, 6, 'Joomla', 1, 6, 'Ionic/Angular', '30', 5.40, false),
        /*new Backlog(2, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(3, 'CustomerSPA', 'SPA', 1, 3, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(4,'Scanning', 'Scanning', 2, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(5, 'Landing', 'Landing', 3, 6, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(6, 'PMARecommendation', 'PMARecommendation', 1, 4, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(7,'User Access Validation by Mobile + Password', 'Access', 3, 3, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(8, 'User Access Validation by Fingerprint', 'Access', 3, 3, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(9, 'User Access Validation by Other Identification', 'Access', 3, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(10,'Validation by QR Code', 'Acess', 2, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(11, 'Member Registration', 'Registration', 1, 5, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(12, 'API Input', 'Inout', 3, 30, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(13,'Registration', 'Registration System', 3, 5, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(14, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(15, 'CustomerSPA', 'SPA', 1, 3, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(16,'Scanning', 'Scanning', 2, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(17, 'Landing', 'Landing', 3, 6, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(18, 'PMARecommendation', 'PMARecommendation', 1, 4, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(19,'User Access Validation by Mobile + Password', 'Access', 3, 3, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(20, 'User Access Validation by Fingerprint', 'Access', 3, 3, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(21, 'User Access Validation by Other Identification', 'Access', 3, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(22,'Validation by QR Code', 'Acess', 2, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(23, 'Member Registration', 'Registration', 1, 5, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(24, 'API Input', 'Inout', 3, 30, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(25,'Registration', 'Registration System', 3, 5, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(26, 'Synchonization', 'Synchonization System', 1, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(27, 'CustomerSPA', 'SPA', 1, 3, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(28,'Scanning', 'Scanning', 2, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(29, 'Landing', 'Landing', 3, 6, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(30, 'PMARecommendation', 'PMARecommendation', 1, 4, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(31,'User Access Validation by Mobile + Password', 'Access', 3, 3, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(32, 'User Access Validation by Fingerprint', 'Access', 3, 3, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(33, 'User Access Validation by Other Identification', 'Access', 3, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(34,'Validation by QR Code', 'Acess', 2, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(35, 'Member Registration', 'Registration', 1, 5, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(36, 'API Input', 'Inout', 3, 30, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(37,'Validation by QR Code', 'Acess', 2, 2, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(38, 'Member Registration', 'Registration', 1, 5, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false),
        new Backlog(39, 'API Input', 'Inout', 3, 30, 'Angular/Ionic', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', '30', 100, false)*/
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


