import { ContainerComponent } from './container-component.model';
import { SoftwareCategory } from './software-category.model';

export class SoftwareComponent {
    public id: number;
    public softwareCategoryID: number;
    public softwareName: string;
    public name: string;

    constructor(id: number, softwareCategoryID: number, softwareName: string, name: string) {
        this.id = id;
        this.softwareCategoryID = softwareCategoryID;
        this.softwareName = softwareName;
        this.name = name;
    }
}