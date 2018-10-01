import { Injectable, OnInit } from "@angular/core";
import { Documents } from "../model/documents.model";
import { FileUpload } from "../model/fileUpload.model";
import { Subject } from "../../../node_modules/rxjs";
import * as $ from 'jquery';


@Injectable()
export class BidDocumentServices {
    private bidDocuments: Documents[] = [];
    private fileUploads: FileUpload[] = [];
    documentsChanged = new Subject<any>();

    constructor() { }

    getDocuments() {
        return this.bidDocuments.slice();
    }

    getFile(fileId: number) {
        return $.grep(this.fileUploads, obj => { return obj.id === fileId })[0];
    }

    saveFile(doc: Documents, file: string) {
        let nextId = this.fileUploads.reduce((max, x) => {
            return (x.id > max) ? x.id : max + 1;
        }, 0);
        doc.fileId = nextId;
        this.fileUploads.push(new FileUpload(nextId, file));
        this.bidDocuments.push(doc);
    }

    deleteFile(fileId: number) {
        $.each(this.bidDocuments, (index, obj) => {
            if (obj.fileId === fileId) { this.bidDocuments.splice(index, 1); }
        });

        $.each(this.fileUploads, (index, obj) => {
            if (obj.id === fileId) { this.fileUploads.splice(index, 1); }
        });
    }
}


