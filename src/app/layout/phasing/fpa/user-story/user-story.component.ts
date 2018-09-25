import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { FpaServices } from '../../../../services/fpa.services'

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
    users = new User();
    modal: any;
    error: boolean = false;
    constructor(private router: Router, private form: FormBuilder, private fpaSrv: FpaServices) {

        this.userForm = this.form.group({
            'user': ['', Validators.compose([Validators.required])]
        })
     }

    public cols = [{ header: 'Id' }, { header: 'User Story' }, { header: 'Date Created' }, { header: 'Action' }]
    public userStory = [];
   
    ngOnInit() {
        console.log("Data from services", this.fpaSrv.getUserStory())
        this.userStory = this.fpaSrv.getUserStory();
      

    }
    addProj() {
        console.log("Modal")
        this.modal = 'add';
        this.display = 'block';
    }


    onSubmitAdd() {
        console.log("User", this.users.userStory)
        if (this.userForm.valid) {
            let newUser = { id: 1, userStory: this.users.userStory, dateCreated: new Date() }
            this.fpaSrv.addUserStory(newUser);
            this.display = 'none';
            this.userForm.reset();
        } else {
            console.log("Error user")
            this.display = "error";
            this.error = true;
        }

    }
    onCloseHandled() {
        this.display = 'none';
    }

    editUser(data: any) {
        if(this.userForm.valid){
            console.log("Data", data)
            this.users.userStory = data.userStory
            this.modal = 'edit';
            this.display = 'block';
            console.log("Edit User Story")
            this.fpaSrv.editUserStory(data.id,data);
        }else{
            console.log("Error user")
            this.display = "error";
            this.error = true;
        }
      
    }

    onEditUser() {

    }

}

export class User {
    id: number;
    userStory: string;
    dateCreated: Date;
}
