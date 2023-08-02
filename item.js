export class Item {
    constructor(args) {
        this.nameElement = document.getElementById('name');
        this.categoryElement = document.getElementById('category');
        this.dateElement = document.getElementById('date');
        this.codeElement = document.getElementById('code');
        this.totalElement = document.getElementById('value_phone');
        this.descriptionElement = document.getElementById('description');
        this.id = args.id;
        this.category = args.category;
        this.value = args.value;
        this.name = args.name;
        this.code = args.code;
        this.description = args.description;
        this.date = args.date;
    }
    update_select_item() {
        this.nameElement.value = this.name;
        this.categoryElement.value = this.category;
        this.dateElement.value = this.date.toISOString().split('T')[0];
        this.codeElement.value = this.code;
        this.totalElement.value = String(this.value);
        this.descriptionElement.value = this.description;
    }
    ;
}
