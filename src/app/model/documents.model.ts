import { Project } from "./project.model";
import { FileUpload } from "./fileUpload.model";

export class Documents {
    public projectId: number;
    public projectName: string;
    public files: FileUpload[];


    constructor(projectId: number, projectName: string, files: FileUpload[]) {
        this.projectId = projectId;
        this.projectName = projectName;
        this.files = files.slice();
    }
}
