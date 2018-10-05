import { ContainerComponent } from './container-component.model';

export class SoftwareCategory {
    public id: number;
    public name: string;
    softwareList: ContainerComponent[];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public setSoftwareList(softwareList: ContainerComponent[]) {
        this.softwareList = softwareList;
    }

    public getSoftwareList() {
        return this.softwareList.slice();
    }
}

