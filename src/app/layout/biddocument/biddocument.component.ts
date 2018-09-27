import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { BidDocumentServices } from '../../data-services/bidDocument.services';
import { FileUpload } from '../../model/fileUpload.model';
import { Documents } from '../../model/documents.model';
import * as $ from 'jquery';
import { ProjectServices } from '../../data-services/project.services';
import { Project } from '../../model/project.model';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
    selector: 'app-biddocument',
    templateUrl: './biddocument.component.html',
    styleUrls: ['./biddocument.component.scss'],
    animations: [routerTransition()]
})
export class BidDocumentComponent implements OnInit {
    projects = {};
    bidDocuments = [];
    projSubscription: Subscription;
    docSubscription: Subscription;

    /* For Modal */
    display = 'none';
    proj: Project = new Project();
    $fileDesc: any;
    $fileInput: any;
    $fileName: any;
    fileUploads: FileUpload[] = [];

    constructor(private projService: ProjectServices, private bidDocService: BidDocumentServices) { }

    ngOnInit() {
        this.loadData();
        this.$fileDesc = $('input#fileDesc'); //input #fileDesc
        this.$fileInput = $('input#fileUpload'); // file input #fileUpload
        this.$fileName = $('input#fileName'); // input #fileName

        this.projSubscription = this.projService.projectChanged
            .subscribe((project: Project[]) => {
                this.projects = project;
            });
        this.docSubscription = this.bidDocService.bidDocsChanged
            .subscribe((bidDocuments: Documents[]) => {
                this.bidDocuments = bidDocuments;
            });

        // Change event listener for file selector
        this.$fileInput.change((e: any) => {
            //gets name of selected file
            this.$fileName.val(e.target.files[0].name);
        });
    }

    loadData() {
        this.projects = this.projService.getProjects();
        this.bidDocuments = this.bidDocService.getDocuments();
    }

    cardClick(proj: Project) {
        console.log(proj.id);
        let doc = $.grep(this.bidDocuments, obj => { return obj.projectId == proj.id });

        if (doc.length > 0)
            this.fileUploads = doc[0].files;

        this.proj = proj;
        this.display = 'block';
    }

    onCloseHandled() {
        this.display = 'none';
        this.fileUploads = [];
        this.resetFileInput();
    }

    selectFile() {
        this.$fileName.blur();
        this.$fileInput.click();
    }

    resetFileInput() {
        this.$fileDesc.val('');
        this.$fileName.val('');
        this.$fileInput.val('');
    }

    saveFile() {
        let input: any = this.$fileInput[0].files;
        if (input.length > 0) {
            let file: any = input[0];
            getBase64(file).then((data: string) => {
                console.log(data);
                let newFile = new FileUpload(this.$fileName.val(), this.$fileDesc.val(), data, new Date().toLocaleString());
                this.bidDocService.saveFile(this.proj.id, newFile);
                var doc = $.grep(this.bidDocuments, obj => { return obj.projectId == this.proj.id });
                if (doc.length > 0) {
                    doc[0].files.push(newFile);
                } else {
                    this.bidDocuments.push(new Documents(this.proj.id, [newFile]));
                }
                this.cardClick(this.proj);
                this.resetFileInput()
            });
        }

        function getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        }
    }

    downloadFile() {

    }

    deleteFile(file: FileUpload) {
        this.bidDocService.deleteFile(this.proj.id, file);
        let f = $.grep(this.fileUploads, obj => { return obj == file });
        if (f.length > 0) {
            let index = this.fileUploads.indexOf(f[0], 0);
            this.fileUploads.splice(index, 1);
        }
    }
}
