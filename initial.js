import { Cellphone } from "./cellphone.js";
import { data_cellphone, data_service } from "./data.js";
import { Service } from "./services.js";
var list_data = [...data_cellphone, ...data_service];
var selected_object;
const alerPlaceholder = document.getElementById('alerts_app');
export class Main {
    constructor() {
        this.typeofItemElement = document.getElementById('option_check');
        this.idElement = document.getElementById('identify');
        this.nameElement = document.getElementById('name');
        this.categoryElement = document.getElementById('category');
        this.dateElement = document.getElementById('date');
        this.codeElement = document.getElementById('code');
        this.totalElement = document.getElementById('value_phone');
        this.descriptionElement = document.getElementById('description');
        // Cellphone
        this.modelElement = document.getElementById('model');
        this.markElement = document.getElementById('mark');
        // Service
        this.uomElement = document.getElementById('uom');
        this.frecuencyElement = document.getElementById('frecuency');
        let select_option_check = document.getElementById('option_check');
        let buttom_submit = document.getElementById('save_form');
        let buttom_search = document.getElementById('search_cellphone');
        let buttom_select = document.getElementById('btn_up_del');
        let buttom_del = document.getElementById('delete_element');
        select_option_check === null || select_option_check === void 0 ? void 0 : select_option_check.addEventListener('change', () => {
            this.select_view(this.typeofItemElement.value);
        });
        buttom_submit === null || buttom_submit === void 0 ? void 0 : buttom_submit.addEventListener('click', () => {
            let num = parseInt(this.idElement.value);
            if (this.idElement.value != '') {
                list_data = list_data.filter((data) => { return data.id != num; });
            }
            let name = document.getElementById('name');
            let model = document.getElementById('model');
            let mark = document.getElementById('mark');
            let category = document.getElementById('category');
            let date = document.getElementById('date');
            let code = document.getElementById('code');
            let total = document.getElementById('value_phone');
            let description = document.getElementById('description');
            let uom = document.getElementById('uom');
            let frecuency = document.getElementById('frecuency');
            let form = {
                id: num ? num : (list_data.length + 1),
                name: String(name.value),
                model: Number(model.value),
                marca: String(mark.value),
                category: String(category.value),
                date: new Date(date.value),
                code: String(code.value),
                value: Number(total.value),
                description: String(description.value),
                uom: uom.value,
                frecuency: parseInt(frecuency.value),
            };
            if (!this.validate_form(form)) {
                return;
            }
            this.add_item(form);
            this.clean_form();
        });
        buttom_search === null || buttom_search === void 0 ? void 0 : buttom_search.addEventListener('click', () => {
            let type_search = document.getElementById('for_search').value;
            let search_value = document.getElementById('param_search').value;
            let data_filter = this.search_item(type_search, search_value);
            console.log("Data search: ", data_filter);
        });
        buttom_select === null || buttom_select === void 0 ? void 0 : buttom_select.addEventListener('click', () => {
            let identify = parseInt(document.getElementById('update_delete_id').value);
            let btn_deleted = document.getElementById('delete_element');
            selected_object = this.select_item(identify);
            this.idElement.value = selected_object ? String(selected_object.id) : '';
            if (selected_object) {
                btn_deleted.removeAttribute('class');
                btn_deleted.setAttribute('class', 'btn btn-danger');
                if (selected_object instanceof Service) {
                    this.select_view('service');
                    select_option_check.value = "service";
                }
                else if (selected_object instanceof Cellphone) {
                    this.select_view('cellphone');
                    select_option_check.value = "cellphone";
                }
                selected_object.update_select_item();
            }
            else {
                this.clean_form();
                this.alertMessage({
                    type: "dark",
                    msg: `No se encontró registro para un identificador ${identify}`,
                    timeout: 4000
                });
            }
        });
        buttom_del === null || buttom_del === void 0 ? void 0 : buttom_del.addEventListener('click', () => {
            let btn_deleted = document.getElementById('delete_element');
            if (selected_object) {
                list_data = list_data.filter((data) => { return data.id != (selected_object === null || selected_object === void 0 ? void 0 : selected_object.id); });
                this.alertMessage({
                    type: "warning",
                    msg: `El registro con código ${selected_object.code} y nombre ${selected_object.name} ha sido eliminado`,
                    timeout: 10000
                });
                btn_deleted.removeAttribute('class');
                btn_deleted.setAttribute('class', 'visually-hidden');
                this.clean_form();
                selected_object = undefined;
            }
        });
    }
    select_view(view_type) {
        let elements_cellphone = document.getElementsByClassName('cellphone_item');
        let elements_service = document.getElementsByClassName('service_item');
        let arrayCollection1 = [...elements_cellphone];
        let arrayCollection2 = Array.from(elements_service);
        if (view_type === 'service') {
            for (const [index, elc] of arrayCollection1.entries()) {
                const els = arrayCollection2[index];
                els.classList.remove('visually-hidden');
                elc.classList.add('visually-hidden');
            }
        }
        else if (view_type === 'cellphone') {
            for (const [index, elc] of arrayCollection1.entries()) {
                const els = arrayCollection2[index];
                els.classList.add('visually-hidden');
                elc.classList.remove('visually-hidden');
            }
        }
    }
    clean_form() {
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
    add_item(form) {
        let new_object;
        if (this.typeofItemElement.value === 'service') {
            new_object = new Service(form);
        }
        else {
            new_object = new Cellphone(form);
        }
        ;
        list_data.push(new_object);
        console.log("List_data: ", list_data);
        this.alertMessage({
            type: "success",
            msg: "El Item guardó correctamente",
        });
    }
    validate_form(form) {
        if (form.name === '') {
            this.alertMessage({
                type: "danger",
                msg: "El campo Nombre es requerido",
            });
            return false;
        }
        if (form.code === '') {
            this.alertMessage({
                type: "danger",
                msg: "El campo Código es requerido",
            });
            return false;
        }
        if (form.description === '') {
            this.alertMessage({
                type: "danger",
                msg: "El campo Descripción es requerido",
            });
            return false;
        }
        if (form.value === 0) {
            this.alertMessage({
                type: "danger",
                msg: "El campo Valor es requerido",
            });
            return false;
        }
        return true;
    }
    alertMessage(data) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="alert alert-${data.type} alert-dismissible" role="alert">`,
            `   <div>${data.msg}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-target="#my-alert" aria-label="Close"></button>',
            '</div>',
        ].join('');
        alerPlaceholder.append(wrapper);
        const alert = document.getElementsByClassName('btn-close');
        setTimeout(() => {
            if (alert) {
                for (let i = 0; alert.length; i++) {
                    if (!alert[i]) {
                        break;
                    }
                    alert[i].click();
                }
            }
        }, data.timeout ? data.timeout : 3000);
    }
    search_item(type_search, search_value) {
        if (type_search === 'all') {
            return list_data.filter((data) => { return data.name.includes(search_value) || data.code.includes(search_value) || data.description.includes(search_value); });
        }
        switch (type_search) {
            case "name":
                return list_data.filter((data) => { return data.name.includes(search_value); });
            case "code":
                return list_data.filter((data) => { return data.code.includes(search_value); });
            case "description":
                return list_data.filter((data) => { return data.description.includes(search_value); });
            default:
                return list_data;
        }
    }
    select_item(identify) {
        return list_data.find(data => {
            return (data === null || data === void 0 ? void 0 : data.id) === identify;
        });
    }
}
new Main();
