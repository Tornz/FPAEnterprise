import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModulesServices } from '../../../../data-services/modules.services';
import { BusinessModules } from '../../../../model/modules.model';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
  animations: [routerTransition()]
})
export class ModulesComponent implements OnInit {
  searchString: string;
  modules: BusinessModules[];
  tableHeaders = [
    { name: 'ID' },
    { name: 'Code' },
    { name: 'Description'}
  ];
  display = 'none';
  modal: any;
  moduleForm: FormGroup;
  selectedData: BusinessModules = new BusinessModules('', ''); 
  columnFilter: string = 'name';

  constructor(private modulesService: ModulesServices, private form: FormBuilder) {
    this.moduleForm = this.form.group({
      'code': new FormControl(this.selectedData.code , Validators.required),
      'description': new FormControl(this.selectedData.description , Validators.required)
    });
    }

  ngOnInit() {
    this.modules = this.modulesService.getComponents();
    this.modulesService.componentListChanged.subscribe(
      (componentList) => {
        this.modules = componentList;
        this.searchString = '';
      }
    );
  }

  onModalOpen(modalName: string, selectedData?: BusinessModules) {
    this.modal = modalName;
    this.display = 'block';
    if(selectedData){
      this.selectedData = selectedData;
      this.moduleForm = this.form.group({
        'code': [this.selectedData.code , Validators.required],
        'description': [this.selectedData.description , Validators.required]
      });
    } else {
      this.selectedData = new BusinessModules('', '');
    }
  }

  onSubmitAdd() {
    const busModules = new BusinessModules(
      this.moduleForm.controls.code.value,
      this.moduleForm.controls.description.value,
      );
    this.modulesService.createComponent(busModules);
    this.onModalClose();
  }

  onSubmitEdit() {
    let busModules = new BusinessModules(
      this.moduleForm.controls.code.value,
      this.moduleForm.controls.description.value,
      );
      busModules.id = this.selectedData.id;
    this.modulesService.saveComponent(busModules);
    this.onModalClose();
  }

  onSubmitDelete(){
    // console.log(this.selectedData);
    this.modulesService.deleteComponent(this.selectedData);
    this.onModalClose();
  }

  onModalClose() {
    this.display = 'none';
    this.moduleForm.reset();
  }
}
