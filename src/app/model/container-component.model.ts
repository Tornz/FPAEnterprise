import { KeyValue } from './keyvalue.model';

export class ContainerComponent {
    public id: number;
    public name: string;
    public softwareCategory: string;
    public categoryID: number;
    public recommendedVersion: string;
    public openSource: boolean;
    public license: string;
    public versions: KeyValue[];

    constructor(name: string, categoryID: number, softwareCategory: string, recommendedVersion: string, openSource: boolean, license: string, versions: KeyValue[]) {
        this.name = name;
        this.categoryID = categoryID;
        this.softwareCategory = softwareCategory;
        this.recommendedVersion = recommendedVersion;
        this.openSource = openSource;
        this.license = license;
        this.versions = versions;
    }
}