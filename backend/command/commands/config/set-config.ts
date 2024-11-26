import Player from "../../../entities/player";
import {Permissions} from "../../../enums/permissions";
import Parser from "../../../modules/parser";
import fs from "fs";

export const identifiers = ["set-config"];
export const permission = Permissions.OWNER;

function validateConfig(config: Config) {
    if(config.disable_recycling !== 0 && config.disable_recycling !== 1) return false;
    if(config.disable_craft !== 0 && config.disable_craft !== 1) return false;
    if(config.disable_craft_score !== 0 && config.disable_craft_score !== 1) return false;
    if(config.disable_chat !== 0 && config.disable_chat !== 1) return false;
    if(config.disable_gather_score !== 0 && config.disable_gather_score !== 1) return false;
    if(config.disable_gather_building !== 0 && config.disable_gather_building !== 1) return false;
    if(config.disable_mob_safety !== 0 && config.disable_mob_safety !== 1) return false;
    if(config.disable_attack !== 0 && config.disable_attack !== 1) return false;
    if(config.disable_pvp !== 0 && config.disable_pvp !== 1) return false;
    if(config.disable_kit !== 0 && config.disable_kit !== 1) return false;
    if(config.disable_shop !== 0 && config.disable_shop !== 1) return false;
    if(config.disable_clock !== 0 && config.disable_clock !== 1) return false;
    if(config.disable_drop !== 0 && config.disable_drop !== 1) return false;
    if(config.disable_drop_crate !== 0 && config.disable_drop_crate !== 1) return false;
    if(config.disable_crate !== 0 && config.disable_crate !== 1) return false;
    return !(config.disable_warm_gauge !== 0 && config.disable_warm_gauge !== 1);   
}

export function run(player: Player, args: string[], isServer: boolean) {
    const config = Parser.tryParseJSON(args.join(" ")); 

    if (!config) {
        return [false, "set-config [JSON]"];
    }

    if (!validateConfig(config)) {
        return [false, "Invalid config"];
    }

    fs.writeFileSync("./JSON/cfg.json", JSON.stringify(config));

    return [true, ""];
}