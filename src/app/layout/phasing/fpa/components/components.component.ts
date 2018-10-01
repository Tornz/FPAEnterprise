import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentServices } from '../../../../data-services/component.services';
import { ContainerComponent } from '../../../../model/container-component.model';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  animations: [routerTransition()]
})
export class ComponentsComponent implements OnInit {
  searchString: string;
  components: ContainerComponent[];
  tableHeaders = [
    { name: 'ID' },
    { name: 'Name' },
    { name: 'Action'}
  ];
  display = 'none';
  modal: any;
  componentForm: FormGroup;
  selectedData: ContainerComponent = new ContainerComponent(''); 

  constructor(private componentService: ComponentServices, private form: FormBuilder) {
    this.componentForm = this.form.group({
      'name': new FormControl(this.selectedData.name , Validators.required)
    });
    }

  ngOnInit() {
    this.components = this.componentService.getComponents();
    this.componentService.componentListChanged.subscribe(
      (componentList) => {
        this.components = componentList;
        this.searchString = '';
      }
    );
  }

  onModalOpen(modalName: string, selectedData: ContainerComponent) {
    this.modal = modalName;
    this.display = 'block';
    this.selectedData = selectedData;
  }

  onSubmitAdd() {
    const componentName = this.componentForm.controls.name.value
    this.componentService.createComponent(componentName);
    this.onModalClose();
  }

  onSubmitEdit() {
    const componentName = this.componentForm.controls.name.value
    this.selectedData.name = componentName;
    this.componentService.saveComponent(this.selectedData);
    this.onModalClose();
  }

  onSubmitDelete(){
    this.componentService.deleteComponent(this.selectedData);
    this.onModalClose();
  }

  onModalClose() {
    this.display = 'none';
    this.componentForm.reset();
  }
}
