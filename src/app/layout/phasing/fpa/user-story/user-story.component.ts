import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { UserStoryServices } from '../../../../data-services/userStory.services'
import { User } from '../../../../model/user.model'
import { FPAComponent } from '../fpa.component'

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
    users : User;
    modal: any;
    error: boolean = false;
    @Input() data: any;
    constructor(private router: Router, private form: FormBuilder, private fpaSrv: UserStoryServices, private fpa: FPAComponent) {

        this.userForm = this.form.group({
            'user': new FormControl('', Validators.required)
        })
    }

    public cols = [{ header: 'Id' }, { header: 'User Story' }, { header: 'Date Created' }, { header: 'Date Updated' }, { header: 'Action' }]
    public userStory = [];

    ngOnInit() {
        console.log("Data from services", this.fpaSrv.getUserStory())
        this.loadData();

    }

    loadData(){
        this.userStory = this.fpaSrv.getUserStory();
    }
    addProj() {
        console.log("Modal")
        this.modal = 'add';
        this.display = 'block';
    }


    onSubmitAdd() {
        let i = 1;
        // // let firstelement;
        // // if(this.userStory.length > 0){
        // //     i = 1;
        // //     firstelement = this.userStory.sort()[0];
        // // }else{
        // //     i = firstelement;
        // // }
        // if(i > 1){
        //    i += 1;
        // }else{
        //     i++;
        // }
        
        // console.log("User", i)
        // if(i = 1){
        
        // }else{
            
        // }
        let newUserStory = this.userForm.controls.user.value;
        console.log("User", )
        // if (this.userForm.valid) {
            let newUser = { id: i, userStory: newUserStory, dateCreated: new Date(), backlog: [] }
            this.fpaSrv.addUserStory(newUser);
            this.display = 'none';
            this.loadData();
            this.userForm.reset();
        // } else {
        //     console.log("Error user")
        //     this.display = "error";
        //     this.error = true;
        //     this.userForm.reset();
        // }

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
    addBacklog(data){
        this.fpa.onTab(1, data)
        // this.data = data
    }

}


