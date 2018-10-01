import { ContainerComponent } from './container-component.model';

export class LogicalContainer{
    id: number;
    server: string;
    vCpu: number;
    ram: number;
    dataStorage: number;
    prodQuantity: number;
    drQuantity: number;
    uatQuantity: number;
    sitDevQuantity: number;
    totalQuantity: number;
    components: ContainerComponent[];

    constructor(id: number, server: string, vCpu: number, ram: number, dataStorage: number, 
        prodQuantity: number, drQuantity: number, uatQuantity: number, sitDevQuantity: number, totalQuantity: number, components: ContainerComponent[]) {
    
    this.id = id;
    this.server = server;
    this.vCpu = vCpu;
    this.ram = ram;
    this.dataStorage = dataStorage;
    this.prodQuantity = prodQuantity;
    this.drQuantity = drQuantity;
    this.uatQuantity = uatQuantity;
    this.sitDevQuantity = sitDevQuantity;
    this.totalQuantity = totalQuantity;
    this.components = components;
    }
}