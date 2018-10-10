import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentServices } from '../../../../data-services/component.services';
import { HardwareService } from '../../../../data-services/hardware.services';
import { ContainerComponent } from '../../../../model/container-component.model';
import { Hardware } from '../../../../model/hardware.model';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.scss'],
  animations: [routerTransition()]
})
export class HardwareComponent implements OnInit {
  searchString: string;
  hardwares: Hardware[];
  components: ContainerComponent[];
  hardwareForm: FormGroup;
  display: string = 'none';
  modal: string;
  selectedHardware: Hardware = new Hardware('', 0, 0, 0, 0, 0, 0, 0, 0, []);
  selectedOption: ContainerComponent;

  constructor(private hardwareService: HardwareService, private componentService: ComponentServices, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.hardwares = this.hardwareService.getHardwares();
    this.components = this.componentService.getComponents();
    this.hardwareService.hardwareListChanged.subscribe(
      (hardwareList) => {
        this.hardwares = hardwareList;
        this.searchString = '';
      }
    );
    this.componentService.componentListChanged.subscribe(
      (componentList) => {
        this.components = componentList;
      }
    );

    this.hardwareForm = this.formBuilder.group({
      'server': new FormControl('', Validators.required),
      'vCpu': new FormControl('', Validators.required),
      'ram': new FormControl('', Validators.required),
      'dataStorage': new FormControl('', Validators.required),
      'prodQuantity': new FormControl('', Validators.required),
      'drQuantity': new FormControl('', Validators.required),
      'uatQuantity': new FormControl('', Validators.required),
      'sitDevQuantity': new FormControl('', Validators.required),
      'totalQuantity': new FormControl('', Validators.required),
      'components': new FormArray([], Validators.required)
    });
  }

  onModalOpen(modalName: string, selectedHardware?: Hardware) {
    this.modal = modalName;
    this.display = 'block';
    if (selectedHardware) {
      this.selectedHardware = selectedHardware;
      this.hardwareForm.patchValue(selectedHardware);
      let control = <FormArray>this.hardwareForm.controls.components;
      this.selectedHardware.components.forEach(element => {
        control.push(this.formBuilder.group(element));
      });
    } else {
      this.selectedHardware = new Hardware('', 0, 0, 0, 0, 0, 0, 0, 0, []);
    }
  }

  onModalClose() {
    this.display = 'none';
    let control = <FormArray>this.hardwareForm.controls['components'];
    while (control.length) {
      control.removeAt(0);
    }
    this.hardwareForm.reset();
    this.selectedHardware = new Hardware('', 0, 0, 0, 0, 0, 0, 0, 0, []);
  }

  addComponentToForm() {
    let control = <FormArray>this.hardwareForm.controls.components;
    control.push(this.formBuilder.group(this.selectedOption));
    this.hardwareForm.updateValueAndValidity();
  }

  removeComponentInForm(index: number) {
    let control = <FormArray>this.hardwareForm.controls.components;
    control.removeAt(index);
    this.hardwareForm.updateValueAndValidity();
  }

  optionChanged(componentChange: ContainerComponent) {
    this.selectedOption = componentChange;
  }

  onSubmitAdd() {
    this.computeTotalQuantity();
    if (this.selectedHardware) {
      this.hardwareForm.value.id = this.selectedHardware.id;
    }
    this.hardwareService.saveHardware(this.hardwareForm.value);
    this.onModalClose();
  }

  onDelete(){
      this.hardwareService.deleteHardware(this.selectedHardware);
      this.onModalClose();
  }

  computeTotalQuantity() {
    const totalQuantity = this.hardwareForm.get('prodQuantity').value
      + this.hardwareForm.get('drQuantity').value
      + this.hardwareForm.get('uatQuantity').value
      + this.hardwareForm.get('sitDevQuantity').value
    this.hardwareForm.controls.totalQuantity.setValue(totalQuantity);
    this.hardwareForm.updateValueAndValidity();
  }

}
