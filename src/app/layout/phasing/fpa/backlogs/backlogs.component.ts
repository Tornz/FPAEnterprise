import { Component, OnInit } from '@angular/core';
import { FPAs } from '../../../../data-services/fpa.services';
import * as $ from 'jquery';
import { log } from 'util';
import * as Handsontable from 'handsontable';

@Component({
    selector: 'app-backlogs',
    templateUrl: './backlogs.component.html',
    styleUrls: ['./backlogs.component.scss']
})

export class BackLogsComponent implements OnInit {
    activeTab = [];
    dataset = FPAs;

    constructor() { }

    ngOnInit() {
        $(document).ready(function () {
            var data = [];
            var mainHead = ['', '', 'ILF', '', '', 'ELF', '', '', 'EI', '', '', 'EO', '', '', 'EQ', '', '', ''];
            var subData = ['Module', 'Description', 'RET', 'DET', 'Technology', 'RET', 'DET', 'Technology'
                , 'FTR', 'DET', 'Technology', 'FTR', 'DET', 'Technology', 'FTR', 'DET', 'Technology', 'Reuse %'];
            var values = [
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['CustomerSPA', 'SPA', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Registration', 'Registration System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30],
                ['Synchonization', 'Synchonization System', 1, 2, 'Java', 2, 3, 'XML', 1, 1, 'NodeJS', 2, 1, 'Java', 1, 3, 'XML', 30]
            ];

            data.push(mainHead);
            data.push(subData);

            $.each(values, function (i) {
                data.push(values[i]);
            });


            var technologies = ['XML', 'Java', 'JSON', 'NodeJS'];
            var defColumn = [
                {}, {}, {}, {}, { editor: 'select', selectOptions: technologies },
                {}, {}, { editor: 'select', selectOptions: technologies },
                {}, {}, { editor: 'select', selectOptions: technologies },
                {}, {}, { editor: 'select', selectOptions: technologies },
                {}, {}, { editor: 'select', selectOptions: technologies },
                {}
            ];
            var container = document.getElementById('fpa-table');
            var hot = new Handsontable(container, {
                data: data,
                columns: defColumn,
                fixedRowsTop: 2,
                stretchH: 'all',
                rowHeaders: true,
                colHeaders: true,
                cells: function (row, col, prop) { return (row === 1 || row === 0) ? { readOnly: true } : { readOnly: false }; },
                dropdownMenu: true,
                contextMenu: true,
                afterChange: log.bind(this, 'afterChange'),
                afterRemoveRow: log.bind(this, 'removeRow'),
                afterRemoveCol: log.bind(this, 'removeCol'),
                afterCreateRow: log.bind(this, 'createRow'),
                afterCreateCol: log.bind(this, 'createCol'),
                mergeCells: [
                    { row: 0, col: 2, rowspan: 1, colspan: 3 },
                    { row: 0, col: 5, rowspan: 1, colspan: 3 },
                    { row: 0, col: 8, rowspan: 1, colspan: 3 },
                    { row: 0, col: 11, rowspan: 1, colspan: 3 },
                    { row: 0, col: 14, rowspan: 1, colspan: 3 }
                ],
                // className: "htCenter",
                cell: [
                    { row: 0, col: 2, className: "htCenter" },
                    { row: 0, col: 5, className: "htCenter" },
                    { row: 0, col: 8, className: "htCenter" },
                    { row: 0, col: 11, className: "htCenter" },
                    { row: 0, col: 14, className: "htCenter" },
                    { row: 1, col: 2, className: "htCenter" },
                    { row: 1, col: 3, className: "htCenter" },
                    { row: 1, col: 5, className: "htCenter" },
                    { row: 1, col: 6, className: "htCenter" },
                    { row: 1, col: 8, className: "htCenter" },
                    { row: 1, col: 9, className: "htCenter" },
                    { row: 1, col: 11, className: "htCenter" },
                    { row: 1, col: 12, className: "htCenter" },
                    { row: 1, col: 14, className: "htCenter" },
                    { row: 1, col: 15, className: "htCenter" },
                    { row: 1, col: 17, className: "htCenter" }
                ]
            });


            $("#btn-save").click(function () {
                // alert( hot.countRows());
                // alert( hot.countCols());
                // alert(hot.getDataAtRow(3));
                let rowCount = hot.countRows();
                let colCount = hot.countCols();
                alert(prepareData(rowCount, colCount));
            });

            function prepareData(rowCount, colCount) {
                var fpaArray = [];
                for (var i = 2; i < rowCount; i++) {
                    var fpaObj = {};
                    for (var c = 0; c < colCount; c++) {
                        var objNotation = hot.getDataAtCell(0, c) + hot.getDataAtCell(1, c);
                    }
                    fpaArray.push(hot.getDataAtRow(i));
                }
                return JSON.stringify(fpaArray);
            }

        }); // end of document ready

    }

}
    
