import { Cellphone } from "./cellphone.js";
import { data_cellphone, data_service } from "./data.js";
import { Service } from "./services.js";
import { Shop } from "./shop.js";


var list_data: (Cellphone | Service)[] = [...data_cellphone, ...data_service];
var selected_object: Cellphone | Service | undefined;
const alerPlaceholder = (<HTMLDivElement>document.getElementById('alerts_app'));

export class Main implements Shop{

    typeofItemElement: HTMLInputElement = (<HTMLInputElement>document.getElementById('option_check'));

    idElement: HTMLInputElement = (<HTMLInputElement>document.getElementById('identify'));
    nameElement: HTMLInputElement = (<HTMLInputElement>document.getElementById('name'));
    categoryElement: HTMLSelectElement = (<HTMLSelectElement>document.getElementById('category'));
    dateElement: HTMLInputElement = (<HTMLInputElement>document.getElementById('date'));
    codeElement: HTMLInputElement = (<HTMLInputElement>document.getElementById('code'));
    totalElement: HTMLInputElement = (<HTMLInputElement>document.getElementById('value_phone'));
    descriptionElement: HTMLTextAreaElement = (<HTMLTextAreaElement>document.getElementById('description'));
    // Cellphone
    modelElement: HTMLInputElement = (<HTMLInputElement>document.getElementById('model'));
    markElement: HTMLSelectElement = (<HTMLSelectElement>document.getElementById('mark'));
    // Service
    uomElement: HTMLInputElement = (<HTMLInputElement>document.getElementById('uom'));
    frecuencyElement: HTMLSelectElement = (<HTMLSelectElement>document.getElementById('frecuency'));

    constructor(){
        let select_option_check = (<HTMLSelectElement>document.getElementById('option_check'));
        let buttom_submit = document.getElementById('save_form');
        let buttom_search = document.getElementById('search_cellphone');
        let buttom_select = document.getElementById('btn_up_del');
        let buttom_del = document.getElementById('delete_element');

        select_option_check?.addEventListener('change', () =>{
            this.select_view(this.typeofItemElement.value);
        })

        buttom_submit?.addEventListener('click', () => {
            let num = parseInt(this.idElement.value);
            if (this.idElement.value != ''){
                list_data = list_data.filter((data) => {return data.id != num});
            }
            let name = (<HTMLInputElement>document.getElementById('name'));
            let model = (<HTMLInputElement>document.getElementById('model'));
            let mark = (<HTMLSelectElement>document.getElementById('mark'));
            let category = (<HTMLSelectElement>document.getElementById('category'));
            let date = (<HTMLInputElement>document.getElementById('date'));
            let code = (<HTMLInputElement>document.getElementById('code'));
            let total = (<HTMLInputElement>document.getElementById('value_phone'));
            let description = (<HTMLTextAreaElement>document.getElementById('description'));
            let uom = (<HTMLTextAreaElement>document.getElementById('uom'));
            let frecuency = (<HTMLTextAreaElement>document.getElementById('frecuency'));
            let form = {
                id: num?num:(list_data.length + 1),
                name: String(name.value),
                model: Number(model.value),
                marca: (<'iphone' | 'samsung' | 'xiaomi'>String(mark.value)),
                category: (<'economic' | 'medium' | 'higth'>String(category.value)),
                date: new Date(date.value),
                code: String(code.value),
                value: Number(total.value),
                description: String(description.value),
                uom: uom.value,
                frecuency: parseInt(frecuency.value),
            }
            if(!this.validate_form(form)){
                return
            }
            this.add_item(form)
            this.clean_form()
        })

        buttom_search?.addEventListener('click', () => {
            let type_search = (<HTMLSelectElement>document.getElementById('for_search')).value;
            let search_value = (<HTMLInputElement>document.getElementById('param_search')).value;
            let data_filter = this.search_item(type_search, search_value);
            console.log("Data search: ", data_filter);
        });
        buttom_select?.addEventListener('click', () => {
            let identify = parseInt((<HTMLInputElement>document.getElementById('update_delete_id')).value);
            let btn_deleted = (<HTMLInputElement>document.getElementById('delete_element'))
            selected_object = this.select_item(identify);
            this.idElement.value = selected_object?String(selected_object.id):''
            if (selected_object){
                btn_deleted.removeAttribute('class');
                btn_deleted.setAttribute('class', 'btn btn-danger');
                if (selected_object instanceof Service){
                    this.select_view('service');
                    select_option_check.value = "service"
                }else if (selected_object instanceof Cellphone){
                    this.select_view('cellphone');
                    select_option_check.value = "cellphone"
                }
                selected_object.update_select_item();
            } else {
                this.clean_form();
                this.alertMessage({
                    type: "dark",
                    msg: `No se encontró registro para un identificador ${identify}`,
                    timeout: 4000
                })
            }
        });
        buttom_del?.addEventListener('click', () => {
            let btn_deleted = (<HTMLInputElement>document.getElementById('delete_element'))
            if (selected_object){
                list_data = list_data.filter((data) => {return data.id != selected_object?.id});
                this.alertMessage({
                    type: "warning",
                    msg: `El registro con código ${selected_object.code} y nombre ${selected_object.name} ha sido eliminado`,
                    timeout: 10000
                })
                btn_deleted.removeAttribute('class');
                btn_deleted.setAttribute('class', 'visually-hidden');
                this.clean_form();
                selected_object = undefined;
            }
        })

    }

    select_view(view_type: string): void{
        let elements_cellphone = document.getElementsByClassName('cellphone_item');
        let elements_service = document.getElementsByClassName('service_item');
        let arrayCollection1 = [...elements_cellphone];
        let arrayCollection2 = Array.from(elements_service);
        if (view_type === 'service'){
            for (const [index, elc] of arrayCollection1.entries()) {
                const els = arrayCollection2[index];
                els.classList.remove('visually-hidden');
                elc.classList.add('visually-hidden');
            }
            
        } else if (view_type === 'cellphone'){
            for (const [index, elc] of arrayCollection1.entries()) {
                const els = arrayCollection2[index];
                els.classList.add('visually-hidden');
                elc.classList.remove('visually-hidden');
            }
            
        }
    }

    clean_form(): void {
        this.idElement.value = '';
        this.nameElement.value = '';
        this.nameElement.value = '';
        this.categoryElement.value = '';
        this.dateElement.value = '';
        this.codeElement.value = '';
        this.totalElement.value = '';
        this.descriptionElement.value = '';
        // Cellphone
        this.markElement.value = '';
        this.modelElement.value = '';
        // Service
        this.uomElement.value = '';
        this.frecuencyElement.value = '';
    }

    add_item(form: {
        id: number,
        name:string, model:number, marca: 'iphone' | 'samsung' | 'xiaomi', 
        category: 'economic' | 'medium' | 'higth', date:Date, code:string, 
        value:number, description:string, uom: string,
        frecuency: number
    }){
        let new_object: Service | Cellphone;
        if (this.typeofItemElement.value === 'service'){
            new_object = new Service(form);
        }else{
            new_object =  new Cellphone(form);
        };
        list_data.push(new_object);
        console.log("List_data: ", list_data);
        this.alertMessage({
            type: "success",
            msg: "El Item guardó correctamente",
        });
    }

    validate_form(form: {
        name:string, model:number, marca:string, 
        category:string, date:Date, code:string, 
        value:number, description:string
    }){
        if (form.name === ''){
            this.alertMessage({
                type: "danger",
                msg: "El campo Nombre es requerido",
            })
            return false
        }
        if (form.code === ''){
            this.alertMessage({
                type: "danger",
                msg: "El campo Código es requerido",
            })
            return false
        }
        if (form.description === ''){
            this.alertMessage({
                type: "danger",
                msg: "El campo Descripción es requerido",
            })
            return false
        }
        if (form.value === 0){
            this.alertMessage({
                type: "danger",
                msg: "El campo Valor es requerido",
            })
            return false
        }
        return true
    }

    alertMessage(data: {timeout?: number, type: string, msg: string}){
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="alert alert-${data.type} alert-dismissible" role="alert">`,
            `   <div>${data.msg}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-target="#my-alert" aria-label="Close"></button>',
            '</div>',
        ].join('');
        alerPlaceholder.append(wrapper)
        const alert = document.getElementsByClassName('btn-close');
        setTimeout(() => {
            if (alert){
                for (let i = 0; alert.length; i++){
                    if (!alert[i]){
                        break;
                    }
                    (<HTMLElement>alert[i]).click();
                }
            }
        }, data.timeout?data.timeout:3000);
    }

    search_item(type_search: string, search_value:string): (Cellphone | Service | any) []{
        if (type_search === 'all'){
            return list_data.filter((data) => { return data.name.includes(search_value) || data.code.includes(search_value) || data.description.includes(search_value)});
        }
        switch (type_search){
            case "name":
                return list_data.filter((data) => { return data.name.includes(search_value)});
            case "code":
                return list_data.filter((data) => { return data.code.includes(search_value)});
            case "description":
                return list_data.filter((data) => { return data.description.includes(search_value)});
            default:
                return list_data
        }
    }

    select_item(identify: number): Cellphone | Service | undefined{
        return list_data.find(data => {
            return data?.id === identify
        });
    }
}
new Main();