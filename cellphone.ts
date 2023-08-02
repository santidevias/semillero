import { Item } from "./item.js";

export class Cellphone extends Item{
    model: number;
    marca: 'iphone' | 'samsung' | 'xiaomi';
    modelElement = (<HTMLInputElement>document.getElementById('model'));
    markElement = (<HTMLSelectElement>document.getElementById('mark'));
    
    constructor(
        args: {
            id: number, category: 'economic' | 'medium' | 'higth',
            marca: 'iphone' | 'samsung' | 'xiaomi', value: number,
            model: number, name: string, code: string, description: string,
            date: Date
        }
    ){
        super(args);
        this.model = args.model;
        this.marca = args.marca;
    }

    update_select_item(): void{
        super.update_select_item();
        this.modelElement.value = String(this.model);
        this.markElement.value = this.marca;
    };
}