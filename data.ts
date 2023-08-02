import { Cellphone } from "./cellphone.js";
import { Service } from "./services.js";
export const data_cellphone: Cellphone [] = [
    new Cellphone({
        id: 1,
        model: 2023,
        category: 'economic',
        marca: 'xiaomi',
        value: 650000,
        name: "Xiaomi Redmi Note 8",
        code: "XI0012",
        description: "Celular Con 4 de ram y 64 de almacenamiento interno",
        date: new Date("2023-05-21")
    }),
    new Cellphone({
        id: 2,
        model: 2022,
        category: 'economic',
        marca: 'xiaomi',
        value: 500000,
        name: "Xiaomi Redmi Note 7",
        code: "XI0009",
        description: "Celular Con 2 de ram y 64 de almacenamiento interno",
        date: new Date("2022-05-21")
    }), new Cellphone({
        id: 3,
        model: 2021,
        category: 'economic',
        marca: 'xiaomi',
        value: 720000,
        name: "Xiaomi Redmi Note 9",
        code: "XI0014",
        description: "Celular Con 4 de ram y 128 de almacenamiento interno",
        date: new Date("2023-02-21")
    }),new Cellphone({
        id: 4,
        model: 2023,
        category: 'economic',
        marca: 'xiaomi',
        value: 550000,
        name: "Xiaomi Redmi Note 9 C",
        code: "XI0013",
        description: "Celular Con 4 de ram y 128 de almacenamiento interno",
        date: new Date("2023-03-09")
    }), new Cellphone({
        id: 5,
        model: 2020,
        category: 'medium',
        marca: 'xiaomi',
        value: 850000,
        name: "Xiaomi Redmi Note 10",
        code: "XI0030",
        description: "Celular Con 4 de ram y 128 de almacenamiento interno",
        date: new Date("2020-10-03")
    }), new Cellphone({
        id: 6,
        model: 2021,
        category: 'medium',
        marca: 'xiaomi',
        value: 920000,
        name: "Xiaomi MI Note 12",
        code: "XI0019",
        description: "Celular Con 4 de ram y 128 de almacenamiento interno",
        date: new Date("2021-05-21")
    }), new Cellphone({
        id: 7,
        model: 2018,
        category: 'medium',
        marca: 'iphone',
        value: 1500000,
        name: "Iphone X",
        code: "IP00002",
        description: "Celular Con 4 de ram y 64 de almacenamiento interno",
        date: new Date("2018-01-12")
    }), new Cellphone({
        id: 8,
        model: 2019,
        category: 'medium',
        marca: 'iphone',
        value: 2500000,
        name: "Iphone XS",
        code: "IP00001",
        description: "Celular Con 4 de ram y 64 de almacenamiento interno",
        date: new Date("2019-05-21")
    }), new Cellphone({
        id: 9,
        model: 2020,
        category: 'medium',
        marca: 'iphone',
        value: 2800000,
        name: "Iphone 11 pro",
        code: "IP000010",
        description: "Celular Con 4 de ram y 128 de almacenamiento interno",
        date: new Date("2020-06-15")
    }), new Cellphone({
        id: 10,
        model: 2022,
        category: 'higth',
        marca: 'iphone',
        value: 4650000,
        name: "Iphone 12 pro",
        code: "IP000013",
        description: "Celular Con 4 de ram y 64 de almacenamiento interno",
        date: new Date("2022-05-21")
    }), new Cellphone({
        id: 11,
        model: 2023,
        category: 'higth',
        marca: 'iphone',
        value: 6750000,
        name: "Iphone 14 pro max",
        code: "IP000021",
        description: "Celular Con 6 de ram y 128 de almacenamiento interno",
        date: new Date("2023-02-10")
    }), new Cellphone({
        id: 12,
        model: 2023,
        category: 'economic',
        marca: 'samsung',
        value: 550000,
        name: "Samsung A22",
        code: "SAM0012",
        description: "Celular Con 4 de ram y 64 de almacenamiento interno",
        date: new Date("2023-05-21")
    }), new Cellphone({
        id: 13,
        model: 2023,
        category: 'economic',
        marca: 'samsung',
        value: 650000,
        name: "Samsung A31",
        code: "SAM0013",
        description: "Celular Con 4 de ram y 128 de almacenamiento interno",
        date: new Date("2023-08-21")
    }), new Cellphone({
        id: 14,
        model: 2023,
        category: 'medium',
        marca: 'samsung',
        value: 2700000,
        name: "Samsung S22",
        code: "SAM0014",
        description: "Celular Con 6 de ram y 128 de almacenamiento interno",
        date: new Date("2023-03-15")
    }), new Cellphone({
        id: 15,
        model: 2023,
        category: 'higth',
        marca: 'samsung',
        value: 6200000,
        name: "Samsung S23 Ultra",
        code: "SAM0015",
        description: "Celular Con 8 de ram y 256 de almacenamiento interno",
        date: new Date("2023-08-01")
    }), new Cellphone({
        id: 16,
        model: 2023,
        category: 'higth',
        marca: 'samsung',
        value: 6800000,
        name: "Samsung S22 Ultra",
        code: "SAM0015",
        description: "Celular Con 16 de ram y 512 de almacenamiento interno",
        date: new Date("2023-07-21")
    }),
]

export const data_service = [
    new Service({
        id: 17,
        category: 'economic',
        value: 250000,
        name: "Reparación Pantalla Xiaomi Redmi Note 7",
        code: "XI0009",
        description: "Reparación de pantalla Xiaomi Redmi Note 7",
        date: new Date('2023-05-12'),
        uom: "UNICO",
        frecuency: 1,
    }), new Service({
        id: 18,
        category: 'economic',
        value: 80000,
        name: "Xiaomi Redmi Note 7",
        code: "XI0009",
        description: "Mantenimiento de pantalla Xiaomi Redmi Note 7",
        date: new Date('2023-05-12'),
        uom: "SEMESTRAL",
        frecuency: 2,
    }),
]