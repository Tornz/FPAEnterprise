import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  /* Technologies */
  frontTechs = [
    'ABAP', 'Android', 'ASP.Net', 'C / C++', 'COBOL / Natural', 'Cognos', 'Crystal Report',
    'DataStage', 'Django', 'ExtJS', 'Html5', 'Ionic/Angular', 'Jasper Report', 'Java',
    'JavaScript', 'Jquery', 'OBIEE', 'Object C / SWIFT', 'Oracle Report', 'PHP',
    'PHP Laravel', 'PHP Magento', 'Phyton', 'PowerBuilder', 'Qilk', 'ReactJS', 'RPG',
    'Ruby on Rails', 'SAS', 'SQL Server Integration Service', 'SQL Server Reporting Service',
    'Stored Procedure', 'Unix Script', 'VB / VBA'
  ];
  backTechs = [
    'ASP.Net', 'C / C++', 'COBOL / Natural', 'J2EE/Java', 'NodeJS', 'Phyton', 'PowerBuilder',
    'Stored Procedure', 'Unix Script'
  ];
  reportTechs = [
    'OBIEE', 'Qilk', 'Cognos', 'SAS', 'Crystal Report', 'Oracle Report', 'Jasper Report',
    'SQL Server Reporting Service', 'RPG'
  ];
  storageTechs = [
    'RDBMS', 'Postgres', 'DB2', 'MSSQL', 'MongoDB', 'Redis Cache', 'NoSQL DB', 'Indexed File',
    'SAS DS', 'JSON', 'XML', 'PHP Magento', 'PHP Laravel', 'Django', 'Ruby on Rails',
    'DataStage', 'SQL Server Integration Service', 'ABAP'
  ];

  /* Selected Technologies */
  selectedFront = ['ABAP', 'Android', 'ASP.Net'];
  selectedBack = ['C / C++', 'COBOL / Natural', 'J2EE/Java'];
  selectedReport = ['SQL Server Reporting Service', 'RPG'];
  selectedStorage = ['RDBMS', 'Postgres', 'DB2']


  constructor() { }

  ngOnInit() {
  }

  addFT() {
    let ft = $("#fTSelect option:selected");
    if (ft.is(":enabled")) {
      let index = this.selectedFront.indexOf(ft.val(), 0);
      if (index == -1) {
        this.selectedFront.push(ft.val());
        this.selectedFront.sort();
      }
    }
  }

  addBT() {
    let bt = $("#bTSelect option:selected").val();
    if (bt.is(":enabled")) {
      let index = this.selectedBack.indexOf(bt, 0);
      if (index < 1) {
        this.selectedBack.push(bt);
        this.selectedBack.sort();
      }
    }
  }

  addRT() {
    let rt = $("#rTSelect option:selected").val();
    if (rt.is(":enabled")) {
      let index = this.selectedReport.indexOf(rt, 0);
      if (index < 1) {
        this.selectedReport.push(rt);
        this.selectedReport.sort();
      }
    }
  }

  addST() {
    let st = $("#sTSelect option:selected").val();
    if (st.is(":enabled")) {
      let index = this.selectedStorage.indexOf(st, 0);
      if (index < 1) {
        this.selectedStorage.push(st);
        this.selectedStorage.sort();
      }
    }
  }

  removeFT(ft: string) {
    let index = this.selectedFront.indexOf(ft, 0);
    if (index > -1) {
      this.selectedFront.splice(index, 1);
    }
  }

  removeBT(bt: string) {
    let index = this.selectedBack.indexOf(bt, 0);
    if (index > -1) {
      this.selectedBack.splice(index, 1);
    }
  }

  removeRT(rt: string) {
    let index = this.selectedReport.indexOf(rt, 0);
    if (index > -1) {
      this.selectedReport.splice(index, 1);
    }
  }

  removeST(st: string) {
    let index = this.selectedStorage.indexOf(st, 0);
    if (index > -1) {
      this.selectedStorage.splice(index, 1);
    }
  }
}
