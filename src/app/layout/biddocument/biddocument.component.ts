import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BidDocumentServices } from '../../data-services/bidDocument.services';
import { FileUpload } from '../../model/fileUpload.model';
import { Documents } from '../../model/documents.model';
import * as $ from 'jquery';

@Component({
    selector: 'app-biddocument',
    templateUrl: './biddocument.component.html',
    styleUrls: ['./biddocument.component.scss'],
    animations: [routerTransition()]
})
export class BidDocumentComponent implements OnInit {
    bidDocuments: Documents[];

    display = 'none';
    projName: any;
    fileUploads: FileUpload[];

    constructor(private bidDocsServices: BidDocumentServices) { }

    ngOnInit() {
        this.bidDocuments = this.bidDocsServices.getDocuments();
    }

    cardClick(id: number) {
        this.bidDocuments.forEach(element => {
            if (element.projectId === id) {
                this.projName = element.projectName;
                this.fileUploads = element.files.slice();
                this.display = 'block';
            }
        });
    }

    onCloseHandled() {
        this.display = 'none';
    }
}
