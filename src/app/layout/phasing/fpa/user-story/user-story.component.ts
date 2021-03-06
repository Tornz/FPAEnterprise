import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { UserStoryServices } from '../../../../data-services/userStory.services'
import { ModulesServices } from '../../../../data-services/modules.services'
import { User } from '../../../../model/user.model'
import { FPAComponent } from '../fpa.component'
import * as $ from 'jquery';
import * as Handsontable from 'handsontable';

@Component({
    selector: 'app-user',
    templateUrl: './user-story.component.html',
    styleUrls: ['./user-story.component.scss'],
    animations: [routerTransition()]
})
export class UserStoryComponent implements OnInit {
    // project: any;
    // myVARS
    display = 'none';
    userForm: FormGroup;
    users: User;
    modal: any;
    error: boolean = false;
    @Input() data: any;
    constructor(private moduleSrvc: ModulesServices, private form: FormBuilder, private fpaSrv: UserStoryServices, private fpa: FPAComponent) {

        this.userForm = this.form.group({
            'user': new FormControl('', Validators.required)
        })
    }

    public cols = [{ header: 'Id' },
    { header: 'User Backlog' },
    { header: 'Date Created' },
    { header: 'Date Updated' },
    { header: 'Action' }]
    public userStory = [];

    ngOnInit() {
        console.log("Data from services", this.fpaSrv.getUserStory())
        this.loadData();

        const temp = this.fpaSrv.getUserStory();
        const modules = this.moduleSrvc.getComponents();
        console.log("Modules", modules)
        $(document).ready(function () {
            var data = [];

            var values = temp;
            var select = [];
            console.log("TEMP", temp)
            //    data.push(mainHead);
            //    data.push(subData);
            // var module = values.title;
            $.each(modules, function (i) {
                select.push(modules[i].code);
            });
            $.each(values, function (i) {
                var flatFunction = "";
                var separator = "";
                $.each(values[i].backlog, function (j){
                    if(values[i].backlog[j]){
                        flatFunction = flatFunction + separator + values[i].backlog[j].functionDesc;
                    }
                    separator = ",";
                })
                var item = [values[i].id, values[i].backlogCode, values[i].title, values[i].userStory, values[i].user,
                values[i].epic,
                values[i].importance,
                values[i].storyPoints,
                values[i].conversation,
                values[i].integration,
                values[i].dateCreated,
                values[i].dateUpdated,
                flatFunction,
                ]
              
                data.push(item);
            });


            var container = document.getElementById('user-table');
            var hot = new Handsontable(container, {
                data: data,
                colHeaders: ['Id', 'Title', 'Description', 'User Backlog', 'User', 'Epic', 'Importance', 'Story Points', 'Conversation'
                    , 'Integrations', 'Date Created', 'Date Updated', 'Functions', 'Action'],
                fixedRowsTop: 2,
                stretchH: 'all',
                rowHeaders: true,
                width: 1306,
                autoWrapRow: true,
                height: 487,
                maxRows: 100,
                manualRowResize: true,
                manualColumnResize: true,
                //    colHeaders: true,
                dropdownMenu: true,
                contextMenu: true,
                manualRowMove: true,
                manualColumnMove: true,
                filters: true,
                fixedRowsBottom: 2,
                minSpareRows: 1,
                columns: [
                    {},
                    {
                        editor: 'select',
                        selectOptions: select
                    },
                    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
                ]

            });


            $("#btn-save-user").click(function () {
                alert( hot.countRows());
                alert( hot.countCols());
                alert(hot.getDataAtRow(3));
                let rowCount = hot.countRows();
                let colCount = hot.countCols();
                alert(prepareData(rowCount, colCount));
            });

            function prepareData(rowCount, colCount) {
                var fpaArray = [];
                for (var i = 0; i < rowCount; i++) {
                    for (var c = 0; c < colCount; c++) {
                    }
                    data.push(hot.getDataAtRow(i));
                }
                return JSON.stringify(fpaArray);
            }

        }); // end of document ready
    }

    onAdd() {
        console.log("Enter")
        let newUser = { id: 1, userStory: '', dateCreated: new Date(), backlog: [] }
        this.fpaSrv.addUserStory(newUser);
        this.loadData()
    }

    onSave() {
        this.fpaSrv.addUserStory(this.userStory)
    }
    loadData() {
        this.userStory = this.fpaSrv.getUserStory();
    }
    addProj() {
        console.log("Modal")
        this.modal = 'add';
        this.display = 'block';
    }


    onSubmitAdd() {
        let i = 1;
        let newUserStory = this.userForm.controls.user.value;
        console.log("User", )
        // if (this.userForm.valid) {
        let newUser = { id: i, userStory: newUserStory, dateCreated: new Date(), backlog: [] }
        this.fpaSrv.addUserStory(newUser);
        this.display = 'none';
        this.loadData();
        this.userForm.reset();
    }
    onCloseHandled() {
        this.display = 'none';

    }

    editUser(data: any) {
        console.log("Edit Modal", data)
        this.users = data
        this.modal = 'edit';
        this.display = 'block';
    }

    onEditUser(data: any) {
        this.users.userStory = this.userForm.controls.user.value;
        // if (this.userForm.valid) {
        console.log("Edit User Story", data)
        this.fpaSrv.editUserStory(this.users.id, this.users);
        this.display = 'none';
        this.loadData();
        // } else {
        //     console.log("Error user")
        //     this.display = "error";
        //     this.error = true;
        // }
    }
    addBacklog(data) {
        this.fpa.onTab(2, data)
        // this.data = data
    }

}


