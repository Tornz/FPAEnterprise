import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentServices } from '../../../../data-services/component.services';
import { Mapping } from '../../../../model/mapping.model';
import { routerTransition } from '../../../../router.animations';
import { MappingServices} from '../../../../data-services/mapping.services'

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss'],
  animations: [routerTransition()]
})
export class MappingComponent implements OnInit {
  searchString: string;
  mappings = [];
  tableHeaders = [
    { name: 'ID' },
    { name: 'Business Requirement' },
    { name: 'Functions'},
    { name: 'Components'}
  ];

  display = 'none';
  modal: any;
  componentForm: FormGroup;
//   selectedData: ContainerComponent = new ContainerComponent('', '', '', false, ''); 
  columnFilter: string = 'name';

  constructor(private mapping: MappingServices, private form: FormBuilder) {
    // this.componentForm = this.form.group({
    //   'name': new FormControl(this.selectedData.name , Validators.required),
    //   'softwareCategory': new FormControl(this.selectedData.softwareCategory , Validators.required),
    //   'recommendedVersion': new FormControl(this.selectedData.recommendedVersion , Validators.required),
    //   'openSource': new FormControl(this.selectedData.openSource , Validators.required),
    //   'license': new FormControl(this.selectedData.license , Validators.required)
    // });
    }

  ngOnInit() {
    this.mappings = this.mapping.getMapping();
    // this.componentService.componentListChanged.subscribe(
    //   (componentList) => {
    //     this.components = componentList;
    //     this.searchString = '';
    //   }
    // );
  }

//   onModalOpen(modalName: string, selectedData: ContainerComponent) {
//     this.modal = modalName;
//     this.display = 'block';
//     if(selectedData){
//       this.selectedData = selectedData;
//       this.componentForm = this.form.group({
//         'name': [this.selectedData.name , Validators.required],
//         'softwareCategory': [this.selectedData.softwareCategory , Validators.required],
//         'recommendedVersion': [this.selectedData.recommendedVersion , Validators.required],
//         'openSource': [this.selectedData.openSource , Validators.required],
//         'license': [this.selectedData.license , Validators.required]
//       });
//     } else {
//       this.selectedData = new ContainerComponent('', '', '', false, '')
//     }
//   }

//   onSubmitAdd() {
//     const containerComponent = new ContainerComponent(
//       this.componentForm.controls.name.value,
//       this.componentForm.controls.softwareCategory.value,
//       this.componentForm.controls.recommendedVersion.value,
//       this.componentForm.controls.openSource.value,
//       this.componentForm.controls.license.value
//       );
//     this.componentService.createComponent(containerComponent);
//     this.onModalClose();
//   }

//   onSubmitEdit() {
//     let containerComponent = new ContainerComponent(
//       this.componentForm.controls.name.value,
//       this.componentForm.controls.softwareCategory.value,
//       this.componentForm.controls.recommendedVersion.value,
//       this.componentForm.controls.openSource.value,
//       this.componentForm.controls.license.value
//       );
//       containerComponent.id = this.selectedData.id;
//     this.componentService.saveComponent(containerComponent);
//     this.onModalClose();
//   }

//   onSubmitDelete(){
//     this.componentService.deleteComponent(this.selectedData);
//     this.onModalClose();
//   }

//   onModalClose() {
//     this.display = 'none';
//     this.componentForm.reset();
//   }
}
