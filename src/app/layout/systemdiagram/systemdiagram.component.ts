import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SystemDiagramServices } from '../../data-services/systemDiagram.services';
import { Documents } from '../../model/documents.model';
import * as $ from 'jquery';
import { ProjectServices } from '../../data-services/project.services';

@Component({
    selector: 'app-systemdiagram',
    templateUrl: './systemdiagram.component.html',
    styleUrls: ['./systemdiagram.component.scss'],
    animations: [routerTransition()]
})
export class SystemDiagramComponent {
    projDocs = [];
    projects = [];
    SysDiagrams = [];

    /* For Modal */
    display = 'none';
    projDoc: any = {};
    projSysDiags: any = [];
    $fileDesc: any;
    $fileInput: any;
    $fileName: any;

    constructor(private projService: ProjectServices, private sysDiagService: SystemDiagramServices) { }

    ngOnInit() {
        this.loadData();
        this.$fileDesc = $('input#fileDesc'); //input #fileDesc
        this.$fileInput = $('input#fileUpload'); // file input #fileUpload
        this.$fileName = $('input#fileName'); // input #fileName
    }

    loadData() {
        this.projects = this.projService.getProjects();
        this.SysDiagrams = this.sysDiagService.getDocuments();
        this.projDocs = [];

        this.projects.forEach(proj => {
            let docs = $.grep(this.SysDiagrams, obj => { return obj.projectId == proj.id });
            this.projDocs.push({
                "projId": proj.id,
                "projName": proj.projectName,
                "bidDocs": docs
            })
        });

    }

    cardClick(projId: number) {
        let projDocs = $.grep(this.projDocs, obj => { return obj.projId == projId });
        this.projDoc = projDocs[0];
        this.projSysDiags = this.projDoc.bidDocs;
        this.display = 'block';
    }

    onCloseHandled() {
        this.display = 'none';
        this.projDoc = {};
        this.projSysDiags = [];
        this.resetFileInput();
    }

    selectFile() {
        this.$fileName.blur();
        this.$fileInput.click();
    }

    onChangeFile(){
        this.$fileName.val(this.$fileInput[0].files[0].name);
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
                let newFile = new Documents(this.projDoc.projId, this.$fileName.val(), this.$fileDesc.val(), new Date().toLocaleString());
                this.sysDiagService.saveFile(newFile, data);
                this.resetFileInput()
                this.loadData();
                this.cardClick(this.projDoc.projId);
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

    downloadAllFiles() {
        // let zipFile: JSZip = new JSZip();
    }

    downloadFile(fileId: number) {
       let data = this.sysDiagService.getFile(fileId);
       let $dwnld = $(`a#btn-dwnld-${fileId}`);
       $dwnld.prop('href',data.file);
       $dwnld.click();
    }

    deleteFile(fileId: number) {
        this.sysDiagService.deleteFile(fileId)
        this.resetFileInput()
        this.loadData();
        this.cardClick(this.projDoc.projId);
    }
}
