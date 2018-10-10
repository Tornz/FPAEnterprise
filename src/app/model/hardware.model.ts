import { ContainerComponent } from './container-component.model';

export class Hardware{
    public id: number;

    constructor(
        public server: string,
        public vCpu: number,
        public ram: number,
        public dataStorage: number,
        public prodQuantity: number,
        public drQuantity: number,
        public uatQuantity: number,
        public sitDevQuantity: number,
        public totalQuantity: number,
        public components: ContainerComponent[]
    ) {
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