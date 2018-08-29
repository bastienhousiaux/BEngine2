"use strict";
var BEngine;
(function (BEngine) {
    var managers;
    (function (managers) {
        var KeyboardManager = /** @class */ (function () {
            function KeyboardManager(keysToWatch) {
                this.keysStatus = {};
                for (var i = 0; i < keysToWatch.length; i++) {
                    this.keysStatus[keysToWatch[i]] = false;
                }
                window.onkeydown = this.onKeyDown.bind(this);
                window.onkeyup = this.onKeyUp.bind(this);
            }
            KeyboardManager.prototype.onKeyDown = function (e) {
                if (this.keysStatus[e.keyCode] != undefined) {
                    this.keysStatus[e.keyCode] = true;
                }
            };
            KeyboardManager.prototype.onKeyUp = function (e) {
                if (this.keysStatus[e.keyCode] != undefined) {
                    this.keysStatus[e.keyCode] = false;
                }
            };
            KeyboardManager.prototype.isKeyDown = function (keyCode) {
                return this.keysStatus[keyCode];
            };
            KeyboardManager.prototype.addKey = function (keyCode) {
                this.keysStatus[keyCode] = false;
            };
            return KeyboardManager;
        }());
        managers.KeyboardManager = KeyboardManager;
    })(managers = BEngine.managers || (BEngine.managers = {}));
})(BEngine || (BEngine = {}));
