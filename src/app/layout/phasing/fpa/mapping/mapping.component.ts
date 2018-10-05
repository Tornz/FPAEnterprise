import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentServices } from '../../../../data-services/component.services';
import { Mapping } from '../../../../model/mapping.model';
import { routerTransition } from '../../../../router.animations';
import { MappingServices } from '../../../../data-services/mapping.services'
// import { TechComponentServices} from '../../../../data-services/component.services'
import { ContainerComponent } from '../../../../model/container-component.model';
import { UserStoryServices } from '../../../../data-services/userStory.services'
import { BacklogServices } from '../../../../data-services/backlog.services'
import { Select2OptionData } from 'ng2-select2';
import { TechnologyItem } from '../../../../model/TechnolonogyItem.model';
import { Backlog } from '../../../../model/backlog.model';
import { TechComponentServices } from '../../../../data-services/techComponent.services';
import { TechComponents } from '../../../../model/techComponents.model';
import { FunctionsServices } from '../../../../data-services/functions.services';
@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss'],
  animations: [routerTransition()]
})
export class MappingComponent implements OnInit {
  searchString: string;
  mappings = [];
  selectedComp = [];
  userStory = [];
  backlogs: Backlog[] = [];
  component = [];
  function = [];
  selectedFunc = [];
  selectOptions = {};
  tableHeaders = [
    { name: 'ID' },
    { name: 'Business Requirement' },
    { name: 'Functions' },
    { name: 'Components' }
  ];

  display = 'none';
  modal: any;
  componentForm: FormGroup;
  //   selectedData: ContainerComponent = new ContainerComponent('', '', '', false, ''); 
  columnFilter: string = 'name';

  constructor(private mapping: MappingServices, private func: FunctionsServices, private componentService: ComponentServices, private user: UserStoryServices, private form: FormBuilder) {
    // this.componentForm = this.form.group({
    //   'name': new FormControl(this.selectedData.name , Validators.required),
    //   'softwareCategory': new FormControl(this.selectedData.softwareCategory , Validators.required),
    //   'recommendedVersion': new FormControl(this.selectedData.recommendedVersion , Validators.required),
    //   'openSource': new FormControl(this.selectedData.openSource , Validators.required),
    //   'license': new FormControl(this.selectedData.license , Validators.required)
    // });
  }

  ngOnInit() {
    this.function = this.func.getFunctions();
    this.userStory = this.user.getUserStory();
    this.component = this.componentService.getComponents();
    console.log("component", this.function)
    this.mappings = this.mapping.getMapping();
    // this.componentService.componentListChanged.subscribe(
    //   (componentList) => {
    //     this.components = componentList;
    //     this.searchString = '';
    //   }
    // );
  }
  searchFromArray(arr: ContainerComponent[], option) {
    return $.grep(arr, obj => { return obj.id == option });
  }
  addFT(id: any) {
    let ct = $("#cTSelect option:selected");
    if (ct.is(":enabled")) {
      //   let tech = this.searchFromArray(this.component, ft.val());

      this.userStory.forEach(i => {
        if (i.id == id) {
          console.log(i)
          i.component.push(ct.text())

        }
      })
      this.sortTechItemArr(this.component);
      ct.val('')
    }
  
    console.log("yeah", this.userStory)
  }

  addFunc(id: any) {
    console.log("Id", id)
    let ft = $("#fTSelect option:selected");
    if (ft.is(":enabled")) {
      //   let tech = this.searchFromArray(this.component, ft.val());

      this.userStory.forEach(i => {
        if (i.id == id) {
          console.log("", this.userStory)
          i.backlog.push(ft.text())

        }
      })
      ft.val('')
      this.sortTechItemArr(this.function);



    }
    console.log("Fortune", this.userStory)
  }

  sortTechItemArr(techArr: TechnologyItem[]) {
    techArr.sort(function (a, b) {
      var x = a.description;
      var y = b.description;
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  removeBT(component: any, id: any) {
    component.component.splice(id)

  }

  removeFunc(functions: any, id: any) {
    functions.backlog.splice(id)
  }
}
