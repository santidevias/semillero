import { Cellphone } from "./cellphone";
import { Service } from "./services";

export interface Shop{
    add_item(form: {
        id: number,
        name:string, model:number, marca: 'iphone' | 'samsung' | 'xiaomi', 
        category: 'economic' | 'medium' | 'higth', date:Date, code:string, 
        value:number, description:string
    }): void;

    search_item(type_search: string, search_value:string): Cellphone [] | Service [];

    clean_form(
        name: HTMLInputElement, model: HTMLInputElement, mark:HTMLSelectElement, 
        category: HTMLSelectElement, code: HTMLInputElement, date: HTMLInputElement, 
        value:HTMLInputElement, description: HTMLTextAreaElement
    ): void;
    
    alertMessage(data: {type: string, msg: string}): void;
    validate_form(form: {
        name:string, model:number, marca:string, 
        category:string, date:Date, code:string, 
        value:number, description:string
    }): void;

    select_item(identify: number): Cellphone | Service | undefined;

    nameElement: HTMLInputElement;
    categoryElement: HTMLSelectElement;
    dateElement: HTMLInputElement;
    codeElement: HTMLInputElement;
    totalElement: HTMLInputElement;
    descriptionElement: HTMLTextAreaElement;

}