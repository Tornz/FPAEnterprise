import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viewer } from "../props-provider/bpmn-js";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-diagramViewer',
  templateUrl: './diagramViewer.component.html',
  styleUrls: ['./diagramViewer.component.scss']
})
export class DiagramViewerComponent implements OnInit {
  title = 'System Diagram';
  canvas: any;
  diagramName: string = '';

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadViewer();
  }

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }

  loadViewer() {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
        xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
        xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
        targetNamespace="http://bpmn.io/schema/bpmn" id="Definitions_1">
      <bpmn:process id="Process_1" isExecutable="false">
        <bpmn:startEvent id="StartEvent_1"/>
      </bpmn:process>
      <bpmndi:BPMNDiagram id="BPMNDiagram_1">
        <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
          <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
            <dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/>
          </bpmndi:BPMNShape>
        </bpmndi:BPMNPlane>
      </bpmndi:BPMNDiagram>
    </bpmn:definitions>`;
    this.canvas = new Viewer({ container: '#canvas' });
    this.canvas.importXML(xml, this.handleError);
  }

  back() {
    this.router.navigate(['/sysb']);
  }
}
