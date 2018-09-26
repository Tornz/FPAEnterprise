import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TechComponentServices } from '../../../../data-services/techComponent.services';
import { TechnologyItem } from '../../../../model/TechnolonogyItem.model';
import { TechComponents } from '../../../../model/techComponents.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  /* Components */
  technologies: TechComponents;
  techComponentsSubscription: Subscription;

  /* Technologies */
  frontTechs: TechnologyItem[] = [];
  backTechs: TechnologyItem[] = [];
  reportTechs: TechnologyItem[] = [];
  storageTechs: TechnologyItem[] = [];

  /* Selected Technologies */
  selectedFront: TechnologyItem[] = [];
  selectedBack: TechnologyItem[] = [];
  selectedReport: TechnologyItem[] = [];
  selectedStorage: TechnologyItem[] = [];

  constructor(private techComponentServices: TechComponentServices) { }

  ngOnInit() {
    this.technologies = this.techComponentServices.getComponents();
    this.selectedFront = this.technologies.frontend.slice();
    this.selectedBack = this.technologies.backend.slice();
    this.selectedReport = this.technologies.report.slice();
    this.selectedStorage = this.technologies.storage.slice();

    this.frontTechs = this.techComponentServices.getFrontend();
    this.backTechs = this.techComponentServices.getBackend();
    this.reportTechs = this.techComponentServices.getReporting();
    this.storageTechs = this.techComponentServices.getStorage();

    this.sortTechItemArr(this.frontTechs);
    this.sortTechItemArr(this.backTechs);
    this.sortTechItemArr(this.reportTechs);
    this.sortTechItemArr(this.storageTechs);
    this.sortTechItemArr(this.selectedFront);
    this.sortTechItemArr(this.selectedBack);
    this.sortTechItemArr(this.selectedReport);
    this.sortTechItemArr(this.selectedStorage);

    this.techComponentsSubscription = this.techComponentServices.componentsChanged
      .subscribe((technologies: TechComponents) => {
        this.technologies = technologies;
      });
  }

  sortTechItemArr(techArr: TechnologyItem[]){
    techArr.sort(function (a, b) {
      var x = a.description; var y = b.description;
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  addFT() {
    let ft = $("#fTSelect option:selected");
    if (ft.is(":enabled")) {
      let tech = $.grep(this.selectedFront, function (obj) {
        return obj.technologyItemId == ft.val()
      });
      if (tech.length == 0) {
        this.selectedFront.push(new TechnologyItem(ft.val(), ft.text()));
        this.sortTechItemArr(this.selectedFront);
      }
    }
  }

  addBT() {
    let bt = $("#bTSelect option:selected");
    if (bt.is(":enabled")) {
      let tech = $.grep(this.selectedBack, obj => {
        return obj.technologyItemId == bt.val()
      });
      if (tech.length == 0) {
        this.selectedBack.push(new TechnologyItem(bt.val(), bt.text()));
        this.sortTechItemArr(this.selectedBack);
      }
    }
  }

  addRT() {
    let rt = $("#rTSelect option:selected");
    if (rt.is(":enabled")) {
      let tech = $.grep(this.selectedReport, function (obj) {
        return obj.technologyItemId == rt.val()
      });
      if (tech.length == 0) {
        this.selectedReport.push(new TechnologyItem(rt.val(), rt.text()));
        this.sortTechItemArr(this.selectedReport);
      }
    }
  }

  addST() {
    let st = $("#sTSelect option:selected");
    if (st.is(":enabled")) {
      let tech = $.grep(this.selectedStorage, function (obj) {
        return obj.technologyItemId == st.val()
      });
      if (tech.length == 0) {
        this.selectedStorage.push(new TechnologyItem(st.val(), st.text()));
        this.sortTechItemArr(this.selectedStorage);
      }
    }
  }

  removeFT(tech: TechnologyItem) {
    let index = this.selectedFront.indexOf(tech, 0);
    if (index > -1) {
      this.selectedFront.splice(index, 1);
    }
  }

  removeBT(tech: TechnologyItem) {
    let index = this.selectedBack.indexOf(tech, 0);
    if (index > -1) {
      this.selectedBack.splice(index, 1);
    }
  }

  removeRT(tech: TechnologyItem) {
    let index = this.selectedReport.indexOf(tech, 0);
    if (index > -1) {
      this.selectedReport.splice(index, 1);
    }
  }

  removeST(tech: TechnologyItem) {
    let index = this.selectedStorage.indexOf(tech, 0);
    if (index > -1) {
      this.selectedStorage.splice(index, 1);
    }
  }

  onSave() {
    this.technologies = new TechComponents(this.selectedFront.slice(),
      this.selectedBack.slice(), this.selectedReport.slice(),
      this.selectedStorage.slice());
    this.techComponentServices.saveComponents(this.technologies);
  }
}
