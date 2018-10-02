import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FunctionalDescService } from '../../../../data-services/functional-desc.services';
import { routerTransition } from '../../../../router.animations';
import { FunctionalDesc } from '../../../../model/functionalDesc.model';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss'],
  animations: [routerTransition()]
})

export class FunctionsComponent implements OnInit {

  display = 'none';
  modal: any;
  functionForm: FormGroup;
  selectedData: FunctionalDesc;
  columnFilter: string = 'name';
  functionsList: FunctionalDesc[];

  constructor(private functionsService: FunctionalDescService, private form: FormBuilder) {
    this.functionForm = this.form.group({
      'functionDesc': new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
    this.functionsList = this.functionsService.getFunctions();
  }

  onModalOpen(modalName: string, selectedData: FunctionalDesc) {
    this.modal = modalName;
    this.display = 'block';
    console.log('selectedData', selectedData);
    if (selectedData) {
      this.selectedData = selectedData;
      this.functionForm = this.form.group({
        'id': [this.selectedData.id, Validators.required],
        'functionDesc': [this.selectedData.functionDesc, Validators.required]
      });
    } else {
      this.selectedData = new FunctionalDesc(null, null);
    }
  }

  onSubmitAdd() {
    let newFunction = new FunctionalDesc(
      this.functionForm.controls.name.value,
      this.functionForm.controls.softwareCategory.value
    );
    this.functionsService.saveFunction(newFunction);
    this.onModalClose();
  }

  onModalClose() {
    this.display = 'none';
    this.functionForm.reset();
  }

}
