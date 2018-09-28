export class FileUpload {
    public name: string;
    public description: string;
    // public path: string;
    public file: string; //temporary only
    public uploadDate: string;


    constructor(fileName: string, description: string, file: string, uploadDate: string) {
        this.name = fileName;
        this.description = description;
        this.file = file;
        this.uploadDate = uploadDate;
    }
}
