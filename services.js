import { Item } from "./item.js";
export class Service extends Item {
    constructor(args) {
        super(args);
        this.uomElement = document.getElementById('uom');
        this.frecuencyElement = document.getElementById('frecuency');
        this.uom = args.uom;
        this.frecuency = args.frecuency;
    }
    update_select_item() {
        super.update_select_item();
        this.uomElement.value = this.uom;
        this.frecuencyElement.value = String(this.frecuency);
    }
    ;
}
