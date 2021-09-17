"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateComponent = void 0;
const core_1 = require("@angular/core");
let ProductCreateComponent = class ProductCreateComponent {
    constructor(formBuilder, productService, router) {
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.router = router;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            title: '',
            description: '',
            image: '',
            price: ''
        });
    }
    submit() {
        this.productService.create(this.form.getRawValue())
            .subscribe(() => this.router.navigate(['/products']));
    }
};
ProductCreateComponent = __decorate([
    core_1.Component({
        selector: 'app-product-create',
        templateUrl: './product-create.component.html',
        styleUrls: ['./product-create.component.css']
    })
], ProductCreateComponent);
exports.ProductCreateComponent = ProductCreateComponent;
//# sourceMappingURL=product-create.component.js.map