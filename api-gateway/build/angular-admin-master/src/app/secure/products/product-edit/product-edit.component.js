"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEditComponent = void 0;
const core_1 = require("@angular/core");
let ProductEditComponent = class ProductEditComponent {
    constructor(formBuilder, productService, router, route) {
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            title: '',
            description: '',
            image: '',
            price: ''
        });
        this.id = this.route.snapshot.params.id;
        this.productService.get(this.id).subscribe(product => this.form.patchValue(product));
    }
    submit() {
        this.productService.update(this.id, this.form.getRawValue())
            .subscribe(() => this.router.navigate(['/products']));
    }
};
ProductEditComponent = __decorate([
    core_1.Component({
        selector: 'app-product-edit',
        templateUrl: './product-edit.component.html',
        styleUrls: ['./product-edit.component.css']
    })
], ProductEditComponent);
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product-edit.component.js.map