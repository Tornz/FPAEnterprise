import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';
import * as $ from 'jquery';
import { log } from 'util';
import * as Handsontable from 'handsontable';
import { BacklogServices } from '../../../../data-services/backlog.services';
import { TechnologyItem } from '../../../../model/TechnolonogyItem.model';
import { Backlog } from '../../../../model/backlog.model';



@Component({
    selector: 'app-backlogs',
    templateUrl: './backlogs.component.html',
    styleUrls: ['./backlogs.component.scss']
})

export class BackLogsComponent implements OnInit {
    activeTab = [];
    backlogs: Backlog[] = [];
    editRowID: any='';
    frontendOption: Array<Select2OptionData>;
    backendOption: Array<Select2OptionData>;
    reportingOption: Array<Select2OptionData>;
    storageOption: Array<Select2OptionData>;
    selectOptions = {};

    constructor(private backServices: BacklogServices) { }
    

    ngOnInit() {
        this.backlogs = this.backServices.getBacklog();
        this.frontendOption = this.assignOptionValue(this.backServices.getFrontend()); 
        this.selectOptions = {
            placeholder: { id: '', text: 'Select Record' },
            width: "100px",
            name: 'empPosition'
        }
        this.EditRow(1);

        //const temp = this.backServices.getBacklog();
        //$(document).ready(function () {
        //    var data = [];
        //    var mainHead = ['', '', 'ILF', '', '', 'ELF', '', '', 'EI', '', '', 'EO', '', '', 'EQ', '', '', ''];
        //    var subData = ['Module', 'Description', 'RET', 'DET', 'Technology', 'RET', 'DET', 'Technology'
        //        , 'FTR', 'DET', 'Technology', 'FTR', 'DET', 'Technology', 'FTR', 'DET', 'Technology', ''];

        //    var values = temp;                 
        //    data.push(mainHead);
        //    data.push(subData);

        //    $.each(values, function (i) {        
        //        var item = [values[i].module,values[i].description, values[i].ilf_ret,
        //        values[i].ilf_det,
        //        values[i].ilf_technology,
        //        values[i].eif_ret,
        //        values[i].eif_det,
        //        values[i].eif_technology,
        //        values[i].ei_ftr,
        //        values[i].ei_det,
        //        values[i].ei_technology,
        //        values[i].eo_ftr,
        //        values[i].eo_det,
        //        values[i].eo_technology,
        //        values[i].eq_ftr,
        //        values[i].eq_det,
        //        values[i].eq_technology,values[i].reusePercentage];                                  
        //        data.push(item);
        //    });


        //    var technologies = ['XML', 'Java', 'JSON', 'NodeJS'];

        //    var defColumn = [
        //        {}, {}, {}, {}, { editor: 'select', selectOptions: technologies },
        //        {}, {}, { editor: 'select', selectOptions: technologies },
        //        {}, {}, { editor: 'select', selectOptions: technologies },
        //        {}, {}, { editor: 'select', selectOptions: technologies },
        //        {}, {}, { editor: 'select', selectOptions: technologies },  
        //        { renderer: "html"}
        //    ];
        //    var container = document.getElementById('fpa-table');
        //    var hot = new Handsontable(container, {
        //        data: data,
        //        columns: defColumn,
        //        fixedRowsTop: 2,
        //        stretchH: 'all',
        //        rowHeaders: true,
        //        colHeaders: true,
        //        cells: function (row, col, prop) { return (row === 1 || row === 0) ? { readOnly: true } : { readOnly: false }; },
        //        dropdownMenu: true,
        //        contextMenu: true,
        //        afterChange: log.bind(this, 'afterChange'),
        //        afterRemoveRow: log.bind(this, 'removeRow'),
        //        afterRemoveCol: log.bind(this, 'removeCol'),
        //        afterCreateRow: log.bind(this, 'createRow'),
        //        afterCreateCol: log.bind(this, 'createCol'),
        //        mergeCells: [
        //            { row: 0, col: 2, rowspan: 1, colspan: 3 },
        //            { row: 0, col: 5, rowspan: 1, colspan: 3 },
        //            { row: 0, col: 8, rowspan: 1, colspan: 3 },
        //            { row: 0, col: 11, rowspan: 1, colspan: 3 },
        //            { row: 0, col: 14, rowspan: 1, colspan: 3 }
        //        ],
        //        // className: "htCenter",
        //        cell: [
        //            { row: 0, col: 2, className: "htCenter" },
        //            { row: 0, col: 5, className: "htCenter" },
        //            { row: 0, col: 8, className: "htCenter" },
        //            { row: 0, col: 11, className: "htCenter" },
        //            { row: 0, col: 14, className: "htCenter" },
        //            { row: 1, col: 2, className: "htCenter" },
        //            { row: 1, col: 3, className: "htCenter" },
        //            { row: 1, col: 5, className: "htCenter" },
        //            { row: 1, col: 6, className: "htCenter" },
        //            { row: 1, col: 8, className: "htCenter" },
        //            { row: 1, col: 9, className: "htCenter" },
        //            { row: 1, col: 11, className: "htCenter" },
        //            { row: 1, col: 12, className: "htCenter" },
        //            { row: 1, col: 14, className: "htCenter" },
        //            { row: 1, col: 15, className: "htCenter" },
        //            { row: 1, col: 17, className: "htCenter" }
        //        ]
        //    });


        //    $("#btn-save").click(function () {
        //        // alert( hot.countRows());
        //        // alert( hot.countCols());
        //        // alert(hot.getDataAtRow(3));
        //        let rowCount = hot.countRows();
        //        let colCount = hot.countCols();
        //        alert(prepareData(rowCount, colCount));
        //    });

        //    function prepareData(rowCount, colCount) {
        //        var fpaArray = [];
        //        for (var i = 2; i < rowCount; i++) {
        //            var fpaObj = {};
        //            for (var c = 0; c < colCount; c++) {
        //                var objNotation = hot.getDataAtCell(0, c) + hot.getDataAtCell(1, c);
        //            }
        //            fpaArray.push(hot.getDataAtRow(i));
        //        }
        //        return JSON.stringify(fpaArray);
        //    }

        //}); // end of document ready

    }


    assignOptionValue(item: TechnologyItem[]) {
        const tempData = [];
        var data = {
            'id': '',
            'text': ''
        }
        tempData.push(data);
        item.forEach(element => {
            var data = {
                'id': element.technologyItemId,
                'text': element.description
            }
            tempData.push(data);
        });
        return tempData;
    }

    onFunction() {
        console.log('Go to Function');
    }
    EditRow(val) {
        this.editRowID = val;
    }

    ilfChanged(e: any, index: number): void {   
        if (e.data[0].text.length > 0) {
            //const item = new TechnologyItem(e.data[0].id, e.data[0].text)
            this.backlogs[index].ilf_technology = e.data[0].text;
            console.log(e.data[0].text);
        }
    }


    eifChanged(e: any, index: number): void {
        if (e.data[0].text.length > 0) {
            //const item = new TechnologyItem(e.data[0].id, e.data[0].text)
            this.backlogs[index].eif_technology = e.data[0].text;
            console.log(e.data[0].text);
        }
    }

    eoChanged(e: any, index: number): void {
        if (e.data[0].text.length > 0) {
            //const item = new TechnologyItem(e.data[0].id, e.data[0].text)
            this.backlogs[index].eo_technology = e.data[0].text;
            console.log(e.data[0].text);
        }
    }

    eiChanged(e: any, index: number): void {
        if (e.data[0].text.length > 0) {
            //const item = new TechnologyItem(e.data[0].id, e.data[0].text)
            this.backlogs[index].ei_technology = e.data[0].text;
            console.log(e.data[0].text);
        }
    }

    eqChanged(e: any, index: number): void {
        if (e.data[0].text.length > 0) {
            //const item = new TechnologyItem(e.data[0].id, e.data[0].text)
            this.backlogs[index].eq_technology = e.data[0].text;
            console.log(e.data[0].text);
        }
    }

}
    
