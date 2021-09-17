"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersComponent = void 0;
const core_1 = require("@angular/core");
const animations_1 = require("@angular/animations");
let OrdersComponent = class OrdersComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.orders = [];
        this.show = false;
    }
    ngOnInit() {
        this.load();
    }
    load(page = 1) {
        this.orderService.all(page).subscribe(res => {
            this.orders = res.data;
            this.lastPage = res.meta.last_page;
            this.show = true;
        });
    }
    select(id) {
        this.selected = this.selected === id ? 0 : id;
    }
    itemState(id) {
        return this.selected === id ? 'show' : 'hide';
    }
    export() {
        this.orderService.export().subscribe(res => {
            const blob = new Blob([res], { type: 'text/csv' });
            const downloadUrl = window.URL.createObjectURL(res);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = 'orders.csv';
            link.click();
        });
    }
};
OrdersComponent = __decorate([
    core_1.Component({
        selector: 'app-orders',
        templateUrl: './orders.component.html',
        styleUrls: ['./orders.component.css'],
        animations: [
            animations_1.trigger('tableState', [
                animations_1.state('show', animations_1.style({
                    maxHeight: '150px'
                })),
                animations_1.state('hide', animations_1.style({
                    maxHeight: 0
                })),
                animations_1.transition('show => hide', animations_1.animate('1000ms ease-in')),
                animations_1.transition('hide => show', animations_1.animate('1000ms ease-out')),
            ])
        ]
    })
], OrdersComponent);
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map