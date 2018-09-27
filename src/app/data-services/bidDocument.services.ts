import { Injectable, OnInit } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { Documents } from "../model/documents.model";
import { FileUpload } from "../model/fileUpload.model";
import * as $ from 'jquery';


@Injectable()
export class BidDocumentServices {
    private bidDocuments: Documents[] = [];
    bidDocsChanged = new Subject<Documents[]>();

    constructor() { }

    getDocuments() {
        return this.bidDocuments.slice();
    }

    saveFile(id: number, file: FileUpload) {
        var doc = $.grep(this.bidDocuments, obj => { return obj.projectId == id });
        if (doc.length > 0) {
            doc[0].files.push(file);
        } else {
            this.bidDocuments.push(new Documents(id, [file]));
        }
    }

    deleteFile(id: number, file: FileUpload) {
        var doc = $.grep(this.bidDocuments, obj => { return obj.projectId == id });
        if (doc.length > 0) {
            let f = $.grep(doc[0].files, obj => { return obj == file });
            if (f.length > 0) {
                let index = doc[0].files.indexOf(f[0], 0);
                doc[0].files.splice(index, 1);
            }
        }
    }
}


