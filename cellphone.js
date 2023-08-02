import { Item } from "./item.js";
export class Cellphone extends Item {
    constructor(args) {
        super(args);
        this.modelElement = document.getElementById('model');
        this.markElement = document.getElementById('mark');
        this.model = args.model;
        this.marca = args.marca;
    }
    update_select_item() {
        super.update_select_item();
        this.modelElement.value = String(this.model);
        this.markElement.value = this.marca;
    }
    ;
}
