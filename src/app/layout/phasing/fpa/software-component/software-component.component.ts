import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { routerTransition } from '../../../../router.animations';
 import { SoftwareCategory } from '../../../../model/software-category.model';
import { ContainerComponent } from '../../../../model/container-component.model';
import { SoftwareComponent } from '../../../../model/software-component.model';
import { SoftwareComponentService } from '../../../../data-services/software-component.services';
 @Component({
  selector: 'app-software-component',
  templateUrl: './software-component.component.html',
  styleUrls: ['./software-component.component.scss'],
  animations: [routerTransition()]
})
 export class SoftwareCategoryComponent implements OnInit {
   softwareListAll: ContainerComponent[];
  softwareList: ContainerComponent[];
  categoryList: SoftwareCategory[];
  softwareComponents: SoftwareComponent[];
   display = 'none';
  modal: any;
  softwareComponentForm: FormGroup;
  selectedData: SoftwareComponent;
  columnFilter: string = 'name';
   constructor(private softwareComponentService: SoftwareComponentService, private form: FormBuilder) {
    this.softwareComponentForm = this.form.group({
      'categoryID': new FormControl(null, Validators.required),
      'softwareName': new FormControl(null, Validators.required),
      'componentName': new FormControl(null, Validators.required)
    });
  }
   ngOnInit() {
    this.loadOptions();
    this.loadData();
  }
   loadOptions() {
    this.softwareListAll = this.softwareComponentService.getSoftwareList();
    this.categoryList = this.softwareComponentService.getSoftwareCategoryList();
  }
   loadData() {
    this.softwareComponents = this.softwareComponentService.getSoftwareComponentList();
  }
   onModalOpen(modalName: string, selectedData: SoftwareComponent) {
    this.modal = modalName;
    this.display = 'block';
    console.log('selectedData', selectedData);
    if (selectedData) {
      this.selectedData = selectedData;
      this.softwareComponentForm = this.form.group({
        //'id': [this.selectedData.id, Validators.required],
        'categoryID': new FormControl(this.selectedData.softwareCategoryID, Validators.required),
        'softwareName': new FormControl(this.selectedData.softwareName, Validators.required),
        'componentName': new FormControl(this.selectedData.name, Validators.required)
      });
    } else {
      this.selectedData = new SoftwareComponent(null, null, null, null);
    }
  }
   onSubmitAdd() {
    let newSoftwareComponent = new SoftwareComponent(
      this.softwareComponentService.generateID(),
      this.softwareComponentForm.controls.categoryID.value,
      this.softwareComponentForm.controls.softwareName.value,
      this.softwareComponentForm.controls.componentName.value
    );
    console.log("softwareName", this.softwareComponentForm.controls.softwareName.value)
    this.softwareComponentService.saveNewComponent(newSoftwareComponent);
    this.loadData();
    this.onModalClose();
  }
   onSubmitEdit() {
    this.softwareComponentService.editFunction(new SoftwareComponent(
      this.selectedData.id,
      this.softwareComponentForm.controls.categoryID.value,
      this.softwareComponentForm.controls.softwareName.value,
      this.softwareComponentForm.controls.componentName.value
    ));
    this.loadData();
    this.onModalClose();
  }
   onCategoryChange(categoryID: number) {
    this.softwareList = this.softwareComponentService.getSoftwareListForCategory(categoryID);
  }
   onModalClose() {
    this.display = 'none';
    this.softwareComponentForm.reset();
  }
}