export class Phases {
    public id: number;
    public projectId: number;
    public description: string;
}

export class CostModel {
    public id: number;
    public onsite: string;
    public role: string;
    public grade: number;
    public month: number;
    public headcount: string;
    public phases:Phases[];

    constructor(id: number, onsite: string, role: string, grade: number, month: number, headcount: string,
        phases:Phases[]) {

        this.id = id;
        this.onsite = onsite;
        this.role = role;
        this.grade = grade;    
        this.month = month;
        this.headcount = headcount;
        this.phases = phases;
        
    }



}
