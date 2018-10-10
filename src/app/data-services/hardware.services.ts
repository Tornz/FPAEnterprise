import { EventEmitter, Injectable } from '@angular/core';
import { Hardware } from '../model/hardware.model';
import { ComponentServices } from './component.services';

@Injectable()
export class HardwareService {
    public hardwareListChanged = new EventEmitter<Hardware[]>();
    private hardwareIdCount: number = 1;
    private hardwares: Hardware[] = [];

    constructor(componentService: ComponentServices) {
        this.saveHardware(new Hardware("API Management Proxy", 4, 4, 300, 2, 1, 1, 1, 5, componentService.getComponents()));
        this.saveHardware(new Hardware("Web Server", 2, 4, 100, 2, 1, 1, 1, 5, componentService.getComponents()));
        this.saveHardware(new Hardware("Application Server 1", 4, 16, 1000, 1, 1, 1, 1, 4, componentService.getComponents()));
        this.saveHardware(new Hardware("Application Server 2", 2, 8, 500, 1, 1, 1, 1, 1, componentService.getComponents()));
        this.saveHardware(new Hardware("Application Server 3", 2, 4, 500, 1, 1, 1, 1, 1, componentService.getComponents()));
        this.saveHardware(new Hardware("Micoservices Server", 8, 64, 2000, 1, 1, 1, 1, 4, componentService.getComponents()));
        this.saveHardware(new Hardware("Database Server", 8, 64, 2000, 1, 1, 1, 1, 4, componentService.getComponents()));
        this.saveHardware(new Hardware("App & Platform Monitoring", 4, 16, 1000, 1, 1, 1, 1, 4, componentService.getComponents()));
        this.saveHardware(new Hardware("Docker", 4, 16, 1000, 1, 1, 1, 1, 4, componentService.getComponents()));
    }

    saveHardware(hardware: Hardware){
        if(hardware.id) {
            let toBeUpdatedIndex = this.hardwares.findIndex((hardwareItem) => hardwareItem.id === hardware.id);
            this.hardwares[toBeUpdatedIndex] = hardware;
        } else {
            hardware.id = this.hardwareIdCount++;
            this.hardwares.push(hardware);
        }
        this.hardwareListChanged.emit(this.hardwares);
    }

    getHardwares() {
        return this.hardwares.slice();
    }

    deleteHardware(hardware: Hardware) {
        let deleteIndex = this.hardwares.indexOf(hardware);
        if (deleteIndex > -1) {
            this.hardwares.splice(deleteIndex, 1);
        }
        this.hardwareListChanged.emit(this.hardwares);
    }
}
