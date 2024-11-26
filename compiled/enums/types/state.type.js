"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateType = void 0;
let COUNTER = 0;
var StateType;
(function (StateType) {
    StateType[StateType["IN_FOREST"] = 2 ** COUNTER++] = "IN_FOREST";
    StateType[StateType["IN_WINTER"] = 2 ** COUNTER++] = "IN_WINTER";
    StateType[StateType["IN_DESERT"] = 2 ** COUNTER++] = "IN_DESERT";
    StateType[StateType["IN_LAVA_BIOME"] = 2 ** COUNTER++] = "IN_LAVA_BIOME";
    StateType[StateType["IN_LAKE"] = 2 ** COUNTER++] = "IN_LAKE";
    StateType[StateType["IN_RIVER"] = 2 ** COUNTER++] = "IN_RIVER";
    StateType[StateType["IN_OCEAN"] = 2 ** COUNTER++] = "IN_OCEAN";
    StateType[StateType["IN_CAVE"] = 2 ** COUNTER++] = "IN_CAVE";
    StateType[StateType["IN_ISLAND"] = 2 ** COUNTER++] = "IN_ISLAND";
    StateType[StateType["IN_LAVA"] = 2 ** COUNTER++] = "IN_LAVA";
    StateType[StateType["IN_BRIDGE"] = 2 ** COUNTER++] = "IN_BRIDGE";
    StateType[StateType["IN_ROOF"] = 2 ** COUNTER++] = "IN_ROOF";
    StateType[StateType["IN_BED"] = 2 ** COUNTER++] = "IN_BED";
    StateType[StateType["IN_PLOT"] = 2 ** COUNTER++] = "IN_PLOT";
    StateType[StateType["IN_TOWER"] = 2 ** COUNTER++] = "IN_TOWER";
    StateType[StateType["IN_SEED"] = 2 ** COUNTER++] = "IN_SEED";
    StateType[StateType["IN_WATER"] = 2 ** COUNTER++] = "IN_WATER";
    StateType[StateType["IN_FIRE"] = 2 ** COUNTER++] = "IN_FIRE";
    StateType[StateType["IS_COLLIDE"] = 2 ** COUNTER++] = "IS_COLLIDE";
    StateType[StateType["WORKBENCH"] = 2 ** COUNTER++] = "WORKBENCH";
    StateType[StateType["RESURRECTION"] = 2 ** COUNTER++] = "RESURRECTION";
    StateType[StateType["FIRE"] = 2 ** COUNTER++] = "FIRE";
    StateType[StateType["WELL"] = 2 ** COUNTER++] = "WELL";
    StateType[StateType["SPIKE"] = 2 ** COUNTER++] = "SPIKE";
    StateType[StateType["STUNNED"] = 2 ** COUNTER++] = "STUNNED";
    StateType[StateType["CRAFT"] = 2 ** COUNTER++] = "CRAFT";
    StateType[StateType["ATTACK"] = 2 ** COUNTER++] = "ATTACK";
    StateType[StateType["GOD_MODE"] = 2 ** COUNTER++] = "GOD_MODE";
    StateType[StateType["INVISIBLE"] = 2 ** COUNTER++] = "INVISIBLE";
    StateType[StateType["GHOST"] = 2 ** COUNTER++] = "GHOST";
})(StateType || (exports.StateType = StateType = {}));