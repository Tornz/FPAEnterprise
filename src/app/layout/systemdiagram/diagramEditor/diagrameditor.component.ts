import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modeler, OriginalPropertiesProvider, PropertiesPanelModule, InjectionNames, OriginalPaletteProvider } from "../props-provider/bpmn-js";
import { CustomPropsProvider } from '../props-provider/CustomPropsProvider';
import { CustomPaletteProvider } from "../props-provider/CustomPaletteProvider";
import { ActivatedRoute, Router } from '@angular/router';

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
  diagramName: string = '';
  model: string ='';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = params.type;
      if (this.type === 'new')
        this.display = 'block';
      else if (this.type === 'edit')
        this.loadModeler();
    });
  }

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }

  loadModeler(): void {
    const x = `<?xml version="1.0" encoding="UTF-8"?>
    <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
      xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
      id="Definitions_1"
      targetNamespace="http://bpmn.io/schema/bpmn">
    <bpmn:process id="Process_1" isExecutable="false" />
    <bpmndi:BPMNDiagram id="BPMNDiagram_1">
      <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1" />
    </bpmndi:BPMNDiagram></bpmn:definitions>`;

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

    this.canvas.importXML(this.model, this.handleError);
  }

  onCloseHandled() {
    this.display = 'none';
  }

  save(): void {
    this.canvas.saveXML((err: any, xml: string) => console.log('Result of saving XML: ', err, xml));
  }

  back() {
    this.router.navigate(['/sysb']);
  }
}
