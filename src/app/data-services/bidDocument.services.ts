import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Documents } from "../model/documents.model";
import { FileUpload } from "../model/fileUpload.model";


@Injectable()
export class BidDocumentServices {
    bidDocsChanged = new Subject<Documents[]>();

    private bidDocuments: Documents[] = [
        new Documents(1, "Project A", []), new Documents(2, "Project B", []),
        new Documents(3, "Project C", []), new Documents(4, "Project D", [])
    ];

    getDocuments() {
        return this.bidDocuments.slice();
    }

    // saveComponents(item: TechComponents) {
    //     this.technologies.frontend = item.frontend.slice();
    //     this.technologies.backend = item.backend.slice();
    //     this.technologies.report = item.report.slice();
    //     this.technologies.storage = item.storage.slice();
    // }
}


