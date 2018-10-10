import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viewer } from "../props-provider/bpmn-js";
import { ActivatedRoute, Router } from '@angular/router';
import { SystemDiagramServices } from '../../../data-services/systemDiagram.services';

@Component({
  selector: 'app-diagramViewer',
  templateUrl: './diagramViewer.component.html',
  styleUrls: ['./diagramViewer.component.scss']
})
export class DiagramViewerComponent implements OnInit {
  title = 'System Diagram';
  canvas: any;
  projId: number;
  fileId: number;
  diagramName: string;
  diagramDesc: string;
  diagramData: string;

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute, private sysDiagService: SystemDiagramServices) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projId = parseInt(params.projId);
      this.fileId = parseInt(params.diagId);
      var doc = this.sysDiagService.getDocbyFileId(this.fileId);
      this.diagramName = doc.name;
      this.diagramDesc = doc.description;
      this.diagramData = this.sysDiagService.getFile(this.fileId).file;
    });
    this.loadViewer();
  }

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }

  loadViewer() {
    var doc = this.sysDiagService.getDocbyFileId(this.fileId);
    this.diagramName = doc.name;
    this.diagramDesc = doc.description;
    this.diagramData = this.sysDiagService.getFile(this.fileId).file;
    this.canvas = new Viewer({ container: '#canvas' });
    this.canvas.importXML(this.diagramData, this.handleError);
  }

  back() {
    this.router.navigate(['/sysb']);
  }
}
