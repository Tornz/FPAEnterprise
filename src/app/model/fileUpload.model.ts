export class FileUpload {
    public description: string;
    public file: string;
    public uploadDate: string;


    constructor(description: string, file: string, uploadDate: string) {
        this.description = description;
        this.file = file;
        this.uploadDate = uploadDate;
    }
}
