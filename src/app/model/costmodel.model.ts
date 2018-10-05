export class Phases {
    public id: number;
    public projectId: number;
    public description: string;
}

export class CostModel {
    public id: number;
    public site: string;
    public role: string;
    public staffName: string;
    public grade: string;
    public rate: number;
    public headcounts: any;
    public phases:Phases[];

    constructor(id: number, site: string, role: string, staffName: string,
        grade: string, rate: number, headcounts: Object[]) {
        this.id = id;
        this.site = site;
        this.role = role;
        this.staffName = staffName;    
        this.grade = grade;
        this.rate = rate;
        this.headcounts = headcounts.slice();
    }
}
