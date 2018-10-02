"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SubjectDataService = /** @class */ (function () {
    function SubjectDataService() {
        this.data = [{
                Name: '.Net'
            },
            {
                Name: '.Net Core'
            },
            {
                Name: 'Java'
            },
            {
                Name: 'TypeScript'
            }];
    }
    SubjectDataService.prototype.getData = function () {
        return this.data;
    };
    return SubjectDataService;
}());
exports.SubjectDataService = SubjectDataService;
//# sourceMappingURL=subject-data.service.js.map