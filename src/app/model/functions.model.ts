export class Functions {
    public id: number;
    public description: string;
    public dateCreated: string;
    public dateCompleted: string;
    public createdBy: string;
    public completedBy: string;
    public edited: boolean;
    public deleted: boolean;
    
    constructor(id: number, description: string, dateCreated: string, dateCompleted: string, createdBy: string, 
            completedBy: string, edited: boolean, deleted: boolean) {

        this.id = id;
        this.description = description;
        this.dateCreated = dateCreated;
        this.dateCompleted = dateCompleted;
        this.createdBy = createdBy;
        this.completedBy = completedBy;
        this.edited = edited;
        this.deleted = deleted;
    }



}
