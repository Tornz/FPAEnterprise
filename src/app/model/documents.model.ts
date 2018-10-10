import { Project } from "./project.model";
import { FileUpload } from "./fileUpload.model";

export class Documents {
    projectId: number;
    fileId: number;
    name: string;
    description: string;
    // path: string;
    lastModified: string;

    constructor(projectId: number, fileName: string, description: string,
        lastModified: string = new Date().toLocaleString(), fileId: number = 0) {

        this.projectId = projectId;
        this.fileId = fileId;
        this.name = fileName;
        this.description = description;
        this.lastModified = lastModified;
    }
}
