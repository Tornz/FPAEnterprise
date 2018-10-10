import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modeler, OriginalPropertiesProvider, PropertiesPanelModule, InjectionNames, OriginalPaletteProvider } from "../props-provider/bpmn-js";
import { CustomPropsProvider } from '../props-provider/CustomPropsProvider';
import { CustomPaletteProvider } from "../props-provider/CustomPaletteProvider";
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { SystemDiagramServices } from '../../../data-services/systemDiagram.services';
import { Documents } from '../../../model/documents.model';

const customModdle = {
  name: "PCCWSolutionsModdle",
  prefix: "custom",
  xml: { tagAlias: "lowerCase" },
  associations: [],
  types: [{
    "name": "ExtUserTask",
    "extends": ["bpmn:UserTask"],
    "properties": [{ "name": "worklist", "isAttr": true, "type": "String" }]
  }]
};

@Component({
  selector: 'app-diagrameditor',
  templateUrl: './diagrameditor.component.html',
  styleUrls: ['./diagrameditor.component.scss']
})
export class DiagramEditorComponent implements OnInit {
  title = 'System Diagram';
  canvas: any;
  display: string = 'none';
  type: string = '';
  projId: number;
  fileId: number;
  diagramName: string;
  diagramDesc: string;
  diagramData: string;
  modal: string = '';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private sysDiagService: SystemDiagramServices) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = params.type;
      this.projId = parseInt(params.projId);
      if (this.type === 'new') {
        this.modal = 'create';
        this.display = 'block';
      } else if (this.type === 'edit') {
        this.fileId = parseInt(params.diagId);
        var doc = this.sysDiagService.getDocbyFileId(this.fileId);
        this.diagramName = doc.name;
        this.diagramDesc = doc.description;
        this.diagramData = this.sysDiagService.getFile(this.fileId).file;
        this.loadModeler();
      }
    });
  }

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }

  createNew() {
    this.diagramName = $('input#diagName').val();
    this.diagramDesc = $('input#diagDesc').val();

    if (this.diagramName === '') {
      $('p#diagNameWarn').show();
    }
    else {
      var dName = this.diagramName.split(' ').join('_');
      this.diagramData = `<?xml version="1.0" encoding="UTF-8"?>
      <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
        xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
        id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
      <bpmn:process id="${dName}" isExecutable="false" />
      <bpmndi:BPMNDiagram id="BPMNDiagram_1">
        <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="${dName}" />
      </bpmndi:BPMNDiagram></bpmn:definitions>`;
      this.onCloseHandled();
      this.loadModeler();
    }
  }

  loadModeler(): void {
    $('#editor').show();
    this.canvas = new Modeler({
      container: '#canvas',
      width: '100vw',
      height: '100vh',
      additionalModules: [
        PropertiesPanelModule,

        // Re-use original bpmn-properties-module, see CustomPropsProvider
        { [InjectionNames.bpmnPropertiesProvider]: ['type', OriginalPropertiesProvider.propertiesProvider[1]] },
        { [InjectionNames.propertiesProvider]: ['type', CustomPropsProvider] },

        // Re-use original palette, see CustomPaletteProvider
        { [InjectionNames.originalPaletteProvider]: ['type', OriginalPaletteProvider] },
        { [InjectionNames.paletteProvider]: ['type', CustomPaletteProvider] },
      ],
      propertiesPanel: {
        parent: '#properties'
      },
      moddleExtension: {
        custom: customModdle
      }
    });

    this.canvas.importXML(this.diagramData, this.handleError);
  }

  onCloseHandled() {
    this.display = 'none';
  }

  save(): void {
    this.canvas.saveXML((err: any, xml: any) => {
      if (err) {
        console.log('Error Saving Diagram: ', err)
      } else if (this.type === 'new') {
        this.sysDiagService.saveNewFile(new Documents(this.projId, this.diagramName, this.diagramDesc), xml);
        this.type = 'edit';
        console.log('Diagram Saved')
      } else if (this.type === 'edit') {
        this.sysDiagService.saveFile(this.fileId, xml);
        console.log('Diagram Saved')
      }
    });
  }

  back() {
    this.router.navigate(['/sysb']);
  }
}
