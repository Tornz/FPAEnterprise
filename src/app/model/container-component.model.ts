export class ContainerComponent {
    public id: number;
    public name: string;
    public softwareCategory: string;
    public recommendedVersion: string;
    public openSource: boolean;
    public license: string;

    constructor(name: string, softwareCategory: string, recommendedVersion: string, openSource: boolean, license: string) {
        this.name = name;
        this.softwareCategory = softwareCategory;
        this.recommendedVersion = recommendedVersion;
        this.openSource = openSource;
        this.license = license;
    }
}