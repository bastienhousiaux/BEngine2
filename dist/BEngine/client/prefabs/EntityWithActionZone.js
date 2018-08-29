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
    var prefabs;
    (function (prefabs) {
        var EntityWithActionZone = /** @class */ (function (_super) {
            __extends(EntityWithActionZone, _super);
            function EntityWithActionZone(clip, actionZones, target, actionNoTarget) {
                var _this = _super.call(this) || this;
                _this.clip = clip;
                _this.target = target;
                _this.actionNoTarget = actionNoTarget;
                _this.actionZones = [];
                var animations = {};
                for (var i = 0; i < actionZones.length; i++) {
                    _this.actionZones.push({
                        distance: new BEngine.components.checkers.DistanceChecker(target, actionZones[i].distance, clip, (target) ? true : false),
                        animation: actionZones[i].animation,
                        cb: actionZones[i].cb
                    });
                    if (!target)
                        _this.actionZones[i].distance.disable();
                }
                _this.addRoutine();
                return _this;
            }
            EntityWithActionZone.prototype.setTarget = function (target) {
                this.target = target;
                for (var i = 0; i < this.actionZones.length; i++) {
                    this.actionZones[i].distance.target = target;
                    this.actionZones[i].distance.enable();
                    console.log(this.actionZones[i].distance.target);
                }
            };
            EntityWithActionZone.prototype.unsetTarget = function () {
                this.target = null;
                for (var i = 0; i < this.actionZones.length; i++) {
                    this.actionZones[i].distance.target = null;
                    this.actionZones[i].distance.disable();
                }
            };
            EntityWithActionZone.prototype.routine = function () {
                var i = 0;
                var ret = false;
                if (this.target) {
                    while (i < this.actionZones.length && ret === false) {
                        if (this.actionZones[i].distance.isTargetAtDistance) {
                            ret = this.actionZones[i].cb();
                            if (ret === undefined || ret === true)
                                if (this.actionZones[i].animation)
                                    this.clip.switchAnimation(this.actionZones[i].animation);
                        }
                        i++;
                    }
                }
                else {
                    this.actionNoTarget.cb();
                    if (this.actionNoTarget.animation)
                        this.clip.switchAnimation(this.actionNoTarget.animation);
                }
            };
            return EntityWithActionZone;
        }(BEngine.components.Component));
        prefabs.EntityWithActionZone = EntityWithActionZone;
    })(prefabs = BEngine.prefabs || (BEngine.prefabs = {}));
})(BEngine || (BEngine = {}));
