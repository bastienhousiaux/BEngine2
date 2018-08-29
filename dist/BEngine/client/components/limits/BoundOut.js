"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BEngine;
(function (BEngine) {
    var components;
    (function (components) {
        var limits;
        (function (limits) {
            var BoundOut = /** @class */ (function (_super) {
                __extends(BoundOut, _super);
                function BoundOut() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return BoundOut;
            }(BEngine.components.checkers.HitTest));
            limits.BoundOut = BoundOut;
        })(limits = components.limits || (components.limits = {}));
    })(components = BEngine.components || (BEngine.components = {}));
})(BEngine || (BEngine = {}));
