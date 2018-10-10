import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SystemDiagramServices } from '../../data-services/systemDiagram.services';
import { Documents } from '../../model/documents.model';
import * as $ from 'jquery';
import { ProjectServices } from '../../data-services/project.services';
import { Router } from '@angular/router';

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

    constructor(private router: Router, private projService: ProjectServices, private sysDiagService: SystemDiagramServices) { }

    ngOnInit() {
        this.loadData();
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
                "sysDiags": docs
            })
        });

    }

    cardClick(projId: number) {
        let projDocs = $.grep(this.projDocs, obj => { return obj.projId == projId });
        this.projDoc = projDocs[0];
        this.projSysDiags = this.projDoc.sysDiags;
        this.display = 'block';
    }

    onCloseHandled() {
        this.display = 'none';
        this.projDoc = {};
        this.projSysDiags = [];
    }

    openDiagram(type: string, projId: number, diagId?: number) {
        if (type === 'new')
            this.router.navigate(['/sysb/editor', { type: type, projId: projId }]);
        else if(type === 'view')
        this.router.navigate(['/sysb/viewer', { projId: projId, diagId: diagId }]);
        else if (type === 'edit')
            this.router.navigate(['/sysb/editor', { type: type, projId: projId, diagId: diagId }]);
    }

    saveFile() {
        // let input: any = this.$fileInput[0].files;
        // if (input.length > 0) {
        //     let file: any = input[0];
        //     getBase64(file).then((data: string) => {
        //         let newFile = new Documents(this.projDoc.projId, this.$fileName.val(), this.$fileDesc.val(), new Date().toLocaleString());
        //         this.sysDiagService.saveFile(newFile, data);
        //         this.loadData();
        //         this.cardClick(this.projDoc.projId);
        //     });
        // }

        // function getBase64(file) {
        //     return new Promise((resolve, reject) => {
        //         const reader = new FileReader();
        //         reader.readAsDataURL(file);
        //         reader.onload = () => resolve(reader.result);
        //         reader.onerror = error => reject(error);
        //     });
        // }
    }

    deleteFile(fileId: number) {
        this.sysDiagService.deleteFile(fileId);
        this.loadData();
        this.cardClick(this.projDoc.projId);
    }
}
