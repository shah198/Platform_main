"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadComponent = void 0;
const core_1 = require("@angular/core");
const environment_1 = require("../../../../environments/environment");
let UploadComponent = class UploadComponent {
    constructor(http) {
        this.http = http;
        this.uploaded = new core_1.EventEmitter();
    }
    ngOnInit() {
    }
    upload(files) {
        const file = files.item(0);
        const data = new FormData();
        data.append('image', file);
        this.http.post(`${environment_1.environment.api}/upload`, data)
            .subscribe((res) => {
            this.uploaded.emit(res.url);
        });
    }
};
__decorate([
    core_1.Output()
], UploadComponent.prototype, "uploaded", void 0);
UploadComponent = __decorate([
    core_1.Component({
        selector: 'app-upload',
        templateUrl: './upload.component.html',
        styleUrls: ['./upload.component.css']
    })
], UploadComponent);
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=upload.component.js.map