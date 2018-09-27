export class LogicalContainer{
    id: number;
    description: string;
    dateCreated: Date;
    dateUpdated: Date;
    createdBy: string;
    updatedBy: string;
    type: string;
    appServer: string;
    dbServer: string;
    msServer: string;

    constructor(id: number, description: string, dateCreated: Date, dateUpdated: Date, createdBy: string, 
        updatedBy: string, type: string, appServer: string, dbServer: string, msServer: string) {
    
    this.id = id;
    this.description = description;
    this.dateCreated = dateCreated;
    this.dateUpdated = dateUpdated;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
    this.type = type;
    this.appServer = appServer;
    this.dbServer = dbServer;
    this.msServer = msServer;
    }
}