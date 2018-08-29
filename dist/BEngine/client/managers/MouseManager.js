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
    var managers;
    (function (managers) {
        var MouseManager = /** @class */ (function (_super) {
            __extends(MouseManager, _super);
            function MouseManager(app) {
                if (app === void 0) { app = App.defaultApp; }
                var _this = _super.call(this) || this;
                _this.app = app;
                return _this;
            }
            MouseManager.getMouseX = function () {
                return App.defaultApp.renderer.plugins.interaction.mouse.global.x * App.defaultApp.initialWidth / App.defaultApp.renderer.width - App.defaultApp.currentScene.x;
            };
            MouseManager.getMouseY = function () {
                return App.defaultApp.renderer.plugins.interaction.mouse.global.y * App.defaultApp.initialHeight / App.defaultApp.renderer.height - App.defaultApp.currentScene.y;
            };
            MouseManager.STAGE_CLICK = "stage click";
            return MouseManager;
        }(BEngine.core.Object));
        managers.MouseManager = MouseManager;
    })(managers = BEngine.managers || (BEngine.managers = {}));
})(BEngine || (BEngine = {}));
