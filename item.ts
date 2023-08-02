import { Service } from "./services";


export class Item{
    id: number;
    category: 'economic' | 'medium' | 'higth';
    value: number;
    name: string;
    code: string;
    description: string;
    date: Date;
    nameElement: HTMLInputElement = (<HTMLInputElement>document.getElementById('name'));
    categoryElement: HTMLSelectElement = (<HTMLSelectElement>document.getElementById('category'));
    dateElement: HTMLInputElement = (<HTMLInputElement>document.getElementById('date'));
    codeElement: HTMLInputElement = (<HTMLInputElement>document.getElementById('code'));
    totalElement: HTMLInputElement = (<HTMLInputElement>document.getElementById('value_phone'));
    descriptionElement: HTMLTextAreaElement = (<HTMLTextAreaElement>document.getElementById('description'));

    constructor(
        args: {
            id: number, category: 'economic' | 'medium' | 'higth', value: number, 
            name: string, code: string, description: string,
            date: Date
        }
    ){
        this.id = args.id
        this.category = args.category;
        this.value = args.value;
        this.name = args.name
        this.code = args.code;
        this.description = args.description;
        this.date = args.date;
    }

    update_select_item(): void{
        this.nameElement.value = this.name;
        this.categoryElement.value = this.category;
        this.dateElement.value = this.date.toISOString().split('T')[0];
        this.codeElement.value = this.code;
        this.totalElement.value = String(this.value);
        this.descriptionElement.value = this.description;
    };

    

    
}