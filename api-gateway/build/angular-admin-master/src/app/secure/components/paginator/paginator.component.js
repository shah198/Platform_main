"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatorComponent = void 0;
const core_1 = require("@angular/core");
let PaginatorComponent = class PaginatorComponent {
    constructor() {
        this.pageChanged = new core_1.EventEmitter();
        this.page = 1;
    }
    ngOnInit() {
    }
    next() {
        if (this.page === this.lastPage) {
            return;
        }
        this.page++;
        this.pageChanged.emit(this.page);
    }
    prev() {
        if (this.page === 1) {
            return;
        }
        this.page--;
        this.pageChanged.emit(this.page);
    }
};
__decorate([
    core_1.Input()
], PaginatorComponent.prototype, "lastPage", void 0);
__decorate([
    core_1.Output()
], PaginatorComponent.prototype, "pageChanged", void 0);
PaginatorComponent = __decorate([
    core_1.Component({
        selector: 'app-paginator',
        templateUrl: './paginator.component.html',
        styleUrls: ['./paginator.component.css']
    })
], PaginatorComponent);
exports.PaginatorComponent = PaginatorComponent;
//# sourceMappingURL=paginator.component.js.map