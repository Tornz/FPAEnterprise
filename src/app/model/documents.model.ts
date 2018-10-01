import { Project } from "./project.model";
import { FileUpload } from "./fileUpload.model";

export class Documents {
    projectId: number;
    fileId: number;
    name: string;
    description: string;
    // path: string;
    uploadDate: string;

    constructor(projectId: number, fileName: string, description: string, uploadDate: string, fileId: number = 0) {
        this.projectId = projectId;
        this.fileId = fileId;
        this.name = fileName;
        this.description = description;
        this.uploadDate = uploadDate;
    }
}
