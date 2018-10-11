import { Injectable, OnInit } from "@angular/core";
import { Documents } from "../model/documents.model";
import { FileUpload } from "../model/fileUpload.model";
import { Subject } from "rxjs";
import * as $ from 'jquery';


@Injectable()
export class SystemDiagramServices {
    private systemDiagramFiles: Documents[] = [];
    private fileUploads: FileUpload[] = [];
    documentsChanged = new Subject<any>();

    constructor() { }

    getDocuments() {
        return this.systemDiagramFiles.slice();
    }

    getFile(fileId: number) {
        return $.grep(this.fileUploads, obj => { return obj.id === fileId })[0];
        // var file;
        // this.fileUploads.forEach(obj => {
        //     if (obj.id === fileId)
        //         return obj;
        // });
        // return file;
    }

    getDocbyFileId(fileId: number) {
        return $.grep(this.systemDiagramFiles, obj => { return obj.fileId === fileId })[0];

        // var doc:Documents;
        // console.log(fileId);
        // this.systemDiagramFiles.forEach((obj:Documents) => {
        //     console.log('object',obj);
        //     console.log('objFileId', typeof obj.fileId);
        //         console.log('fileId', typeof fileId);
        //     if (obj.fileId === fileId){
        //         doc = obj;
        //     }
        // });
        // console.log('last',doc);
        // return doc;
    }

    saveNewFile(doc: Documents, file: string) {
        let nextId = this.fileUploads.reduce((max, x) => {
            return (x.id > max) ? x.id : max + 1;
        }, 0);
        doc.fileId = nextId;
        this.fileUploads.push(new FileUpload(nextId, file));
        this.systemDiagramFiles.push(doc);
    }

    saveFile(fileId: number, file: string) {
        this.fileUploads.forEach(obj => {
            if (obj.id === fileId)
                obj.file = file;
        });
        this.systemDiagramFiles.forEach(obj => {
            if (obj.fileId === fileId)
                obj.lastModified = new Date().toLocaleString();
        });
    }

    deleteFile(fileId: number) {
        $.each(this.fileUploads, (index, obj) => {
            if (obj.id === fileId) { this.fileUploads.splice(index, 1); }
        });
        $.each(this.systemDiagramFiles, (index, obj) => {
            if (obj.fileId === fileId) { this.systemDiagramFiles.splice(index, 1); }
        });
    }
}


