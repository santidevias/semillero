import { Item } from "./item.js";

export class Service extends Item{
    uom: string;
    frecuency: number;

    uomElement: HTMLInputElement = (<HTMLInputElement>document.getElementById('uom'));
    frecuencyElement: HTMLInputElement = (<HTMLInputElement>document.getElementById('frecuency'));

    constructor(args: {
        id: number, category: 'economic' | 'medium' | 'higth',
        value: number, name: string, code: string, description: string,
        date: Date, uom: string, frecuency: number
    }){
        super(args)
        this.uom = args.uom;
        this.frecuency = args.frecuency;

    }

    update_select_item(): void{
        super.update_select_item();
        this.uomElement.value = this.uom;
        this.frecuencyElement.value = String(this.frecuency);
    };
}