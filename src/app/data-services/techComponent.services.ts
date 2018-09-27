import { Injectable } from "@angular/core";
import { TechComponents } from "../model/techComponents.model";
import { TechnologyItem } from "../model/TechnolonogyItem.model";
import { Subject } from "rxjs";


@Injectable()
export class TechComponentServices {
    componentsChanged = new Subject<TechComponents>();
    private technologies: TechComponents = new TechComponents(
        [
            new TechnologyItem(1, "Angular/Ionic"), new TechnologyItem(2, "Html5"),
            new TechnologyItem(3, "Jquery"), new TechnologyItem(7, "Android")
        ],
        [
            new TechnologyItem(1, "ASP.Net"), new TechnologyItem(2, "C/C++"),
            new TechnologyItem(3, "J2EE/Java")
        ],
        [
            new TechnologyItem(1, "OBIEE"), new TechnologyItem(2, "Qilk"),
            new TechnologyItem(3, "Cognos")
        ],
        [
            new TechnologyItem(1, "RDBMS"), new TechnologyItem(2, "Postgres"),
            new TechnologyItem(3, "DB2")
        ]
    );

    private frontend: TechnologyItem[] = [
        new TechnologyItem(1, "Angular/Ionic"), new TechnologyItem(2, "Html5"),
        new TechnologyItem(3, "Jquery"), new TechnologyItem(4, "ExtJS"),
        new TechnologyItem(5, "ReactJS"), new TechnologyItem(6, "VueJS"),
        new TechnologyItem(7, "Android")
    ];
    private backend: TechnologyItem[] = [
        new TechnologyItem(1, "ASP.Net"), new TechnologyItem(2, "C/C++"),
        new TechnologyItem(3, "J2EE/Java"), new TechnologyItem(4, "NodeJS"),
        new TechnologyItem(5, "Phyton"), new TechnologyItem(6, "PowerBuilder"),
        new TechnologyItem(7, "Unix Script")
    ];
    private reporting: TechnologyItem[] = [
        new TechnologyItem(1, "OBIEE"), new TechnologyItem(2, "Qilk"),
        new TechnologyItem(3, "Cognos"), new TechnologyItem(4, "SAS"),
        new TechnologyItem(5, "Crystal Report"), new TechnologyItem(6, "Oracle Report"),
        new TechnologyItem(7, "Jasper Report"), new TechnologyItem(8, "RPG"),
        new TechnologyItem(9, "SQL Server Reporting Service")
    ];
    private storage: TechnologyItem[] = [
        new TechnologyItem(1, "RDBMS"), new TechnologyItem(2, "Postgres"),
        new TechnologyItem(3, "DB2"), new TechnologyItem(4, "MSSQL"),
        new TechnologyItem(5, "MongoDB"), new TechnologyItem(6, "Redis Cache"),
        new TechnologyItem(7, "NoSQL DB"), new TechnologyItem(8, "Ruby on Rails"),
        new TechnologyItem(9, "SQL Server Integration Service")
    ];

    getComponents() {
        return this.technologies;
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

    saveComponents(item: TechComponents) {
        this.technologies.frontend = item.frontend.slice();
        this.technologies.backend = item.backend.slice();
        this.technologies.report = item.report.slice();
        this.technologies.storage = item.storage.slice();
    }
}


