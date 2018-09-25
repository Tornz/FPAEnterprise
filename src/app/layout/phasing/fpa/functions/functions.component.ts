import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent implements OnInit {
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
};

public tabler = [
    { header: 'ID', id: 'FN-001', description: 'Function 1', dateCreated: '09/24/2018', dateCompleted: '09/24/2018', createdBy: 'User 1', completedBy: 'User 1', edit: 'Edit', delete: 'Delete' },
    { header: 'Description', id: 'FN-002', description: 'Function 2', dateCreated: '09/24/2018', dateCompleted: '09/24/2018', createdBy: 'User 2', completedBy: 'User 2', edit: 'Edit', delete: 'Delete' },
    { header: 'Date Created', id: 'FN-003', description: 'Function 3', dateCreated: '09/24/2018', dateCompleted: '09/24/2018', createdBy: 'User 3', completedBy: 'User 3', edit: 'Edit', delete: 'Delete' },
    { header: 'Date Completed', id: 'FN-004', description: 'Function 4', dateCreated: '09/24/2018', dateCompleted: '09/24/2018', createdBy: 'User 4', completedBy: 'User 4', edit: 'Edit', delete: 'Delete' },
    { header: 'Created By', id: 'FN-005', description: 'BlockFunction 5', dateCreated: '09/24/2018', dateCompleted: '09/24/2018', createdBy: 'User 5', completedBy: 'User 5', edit: 'Edit', delete: 'Delete' },
    { header: 'Completed By', id: 'FN-006', description: 'Function 6', dateCreated: '09/24/2018', dateCompleted: '09/24/2018', createdBy: 'User 6', completedBy: 'User 6', edit: 'Edit', delete: 'Delete' },
    { header: '', id: 'FN-007', description: 'Function 7', dateCreated: '09/24/2018', dateCompleted: '09/24/2018', createdBy: 'User 7', completedBy: 'User 7', edit: 'Edit', delete: 'Delete' },
    { header: '', id: 'FN-008', description: 'Function 8', dateCreated: '09/24/2018', dateCompleted: '09/24/2018', createdBy: 'User 8', completedBy: 'User 8', edit: 'Edit', delete: 'Delete' }
];
public barChartLabels: string[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012'
];
public barChartType: any = 'bar';
public barChartLegend: any = true;

public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
];

// Doughnut
public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales'
];
public doughnutChartData: number[] = [350, 450, 100];
public doughnutChartType: any = 'doughnut';

// Radar
public radarChartLabels: string[] = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
];
public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
];
public radarChartType: any = 'radar';

// Pie
public pieChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales'
];
public pieChartData: number[] = [300, 500, 100];
public pieChartType: any = 'pie';

// PolarArea
public polarAreaChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
    'Telesales',
    'Corporate Sales'
];
public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
public polarAreaLegend: any = true;

public polarAreaChartType: any = 'polarArea';

// lineChart
public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
];
public lineChartLabels: Array<any> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
];
public lineChartOptions: any = {
    responsive: true
};
public lineChartColors: Array<any> = [
    {
        // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
        // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
        // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
];
public lineChartLegend: any = true;
public lineChartType: any = 'line';

// myVARS
display = 'none';
// events
public chartClicked(e: any): void {
    // console.log(e);
}

public chartHovered(e: any): void {
    // console.log(e);
}

public randomize(): void {
    // Only Change 3 values
    const data = [
        Math.round(Math.random() * 100),
        59,
        80,
        Math.random() * 100,
        56,
        Math.random() * 100,
        40
    ];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
}

constructor() { }

ngOnInit() { }

addProj() {
    this.display = 'block';
}

onCloseHandled() {
    this.display = 'none';
}

saveProj(projectData) {
    console.log('data', projectData);
}
}
