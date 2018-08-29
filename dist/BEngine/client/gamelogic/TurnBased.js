"use strict";
var BEngine;
(function (BEngine) {
    var gamelogic;
    (function (gamelogic) {
        var TurnBased = /** @class */ (function () {
            function TurnBased(actors) {
                this.actors = actors;
                this.currentActorIndex = 0;
            }
            TurnBased.prototype.nextTurn = function () {
                this.currentActorIndex = (this.currentActorIndex === this.actors.length - 1) ? 0 : this.currentActorIndex + 1;
            };
            Object.defineProperty(TurnBased.prototype, "currentActor", {
                get: function () {
                    return this.actors[this.currentActorIndex];
                },
                enumerable: true,
                configurable: true
            });
            TurnBased.prototype.isCurrentActor = function (name) {
                return this.currentActor === name;
            };
            return TurnBased;
        }());
        gamelogic.TurnBased = TurnBased;
    })(gamelogic = BEngine.gamelogic || (BEngine.gamelogic = {}));
})(BEngine || (BEngine = {}));
