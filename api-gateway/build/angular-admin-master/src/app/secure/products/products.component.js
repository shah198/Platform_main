"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsComponent = void 0;
const core_1 = require("@angular/core");
let ProductsComponent = class ProductsComponent {
    constructor(productService) {
        this.productService = productService;
        this.products = [];
    }
    ngOnInit() {
        this.load();
    }
    load(page = 1) {
        this.productService.all(page).subscribe(res => {
            this.products = res.data;
            this.lastPage = res.meta.last_page;
        });
    }
    delete(id) {
        if (confirm('Are you sure you want to delete this record?')) {
            this.productService.delete(id)
                .subscribe(() => this.products = this.products.filter(p => p.id !== id));
        }
    }
};
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'app-products',
        templateUrl: './products.component.html',
        styleUrls: ['./products.component.css']
    })
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map