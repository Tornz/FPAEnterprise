export class Project{
    id: number;
    projectName: string;
    description: Text;
    phases = [];
    duration: number;
    // technology: string;
    // methodology: string;
    dateCreated: Date;
    dateUpdated: Date;

    constructor (id: number, projectName: string, description: Text, phases: any[], duration: number, dateCreated: Date, dateUpdated: date) {
        this.id = id;
        this.projectName = projectName;
        this.description = description;
        this.phases = phases;
        this.duration = duration;
        this.dateCreated = dateCreated;
        this.dateUpdated = dateUpdated;
    }
}