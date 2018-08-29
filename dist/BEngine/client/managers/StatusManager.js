"use strict";
var BEngine;
(function (BEngine) {
    var managers;
    (function (managers) {
        var StatusManager = /** @class */ (function () {
            function StatusManager(status) {
                this.status = status;
            }
            StatusManager.prototype.switchStatus = function (name) {
                this.status[name]();
            };
            return StatusManager;
        }());
        managers.StatusManager = StatusManager;
    })(managers = BEngine.managers || (BEngine.managers = {}));
})(BEngine || (BEngine = {}));
