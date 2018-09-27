import { Project } from "./project.model";
import { FileUpload } from "./fileUpload.model";

export class Documents {
    // public project: Project;
    projectId: number;
    public files: FileUpload[];


    constructor(projectId: number, files: FileUpload[]) {
        this.projectId = projectId;
        this.files = files.slice();
    }
}
