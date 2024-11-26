"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SKIN = exports.BOX = void 0;
var BOX;
(function (BOX) {
    BOX[BOX["WOODEN_DEAD_BOX"] = 0] = "WOODEN_DEAD_BOX";
    BOX[BOX["HIDDEN_ITEM"] = 1] = "HIDDEN_ITEM";
    BOX[BOX["WOODEN_BOX_1"] = 2] = "WOODEN_BOX_1";
    BOX[BOX["WOODEN_BOX_2"] = 3] = "WOODEN_BOX_2";
    BOX[BOX["WOODEN_BOX_3"] = 4] = "WOODEN_BOX_3";
    BOX[BOX["BROKEN_WOODEN_BOX"] = 5] = "BROKEN_WOODEN_BOX";
    BOX[BOX["WOODEN_BOX"] = 6] = "WOODEN_BOX";
    BOX[BOX["WOODEN_BATTLE_BOX"] = 7] = "WOODEN_BATTLE_BOX";
    BOX[BOX["WOODEN_BOX_WITH_A_CROSS"] = 8] = "WOODEN_BOX_WITH_A_CROSS";
    BOX[BOX["WOODEN_BOX_WITH_BUBBLES"] = 9] = "WOODEN_BOX_WITH_BUBBLES";
    BOX[BOX["WOODEN_BOX_WITH_EYES"] = 10] = "WOODEN_BOX_WITH_EYES";
    BOX[BOX["DARK_WOODEN_BOX"] = 11] = "DARK_WOODEN_BOX";
    BOX[BOX["NOOB_BOX"] = 12] = "NOOB_BOX";
    BOX[BOX["WOODEN_AND_STONE_BOX"] = 13] = "WOODEN_AND_STONE_BOX";
    BOX[BOX["STAR_BOX_1"] = 14] = "STAR_BOX_1";
    BOX[BOX["STAR_BOX_2"] = 15] = "STAR_BOX_2";
    BOX[BOX["FLOWER_BOX"] = 16] = "FLOWER_BOX";
    BOX[BOX["BLUE_BOX"] = 17] = "BLUE_BOX";
    BOX[BOX["BEEHIVE"] = 18] = "BEEHIVE";
    BOX[BOX["WOODEN_AND_GOLDEN_BOX"] = 19] = "WOODEN_AND_GOLDEN_BOX";
    BOX[BOX["GRAVESTONE"] = 20] = "GRAVESTONE";
    BOX[BOX["SKY_BOX"] = 21] = "SKY_BOX";
    BOX[BOX["GOLDEN_BOX"] = 22] = "GOLDEN_BOX";
    BOX[BOX["WATER_CRATE"] = 23] = "WATER_CRATE";
    BOX[BOX["GLASS_CRATE"] = 24] = "GLASS_CRATE";
    BOX[BOX["WOODEN_AND_DIAMOND_BOX"] = 25] = "WOODEN_AND_DIAMOND_BOX";
    BOX[BOX["DON'T_HIT_ME"] = 26] = "DON'T_HIT_ME";
    BOX[BOX["UNDERWATER_BOX"] = 27] = "UNDERWATER_BOX";
    BOX[BOX["ITEMS_PILE"] = 28] = "ITEMS_PILE";
    BOX[BOX["CAKE_BOX"] = 29] = "CAKE_BOX";
    BOX[BOX["CHRISTMAS_CAKE_BOX"] = 30] = "CHRISTMAS_CAKE_BOX";
    BOX[BOX["CRAB_BOX"] = 31] = "CRAB_BOX";
    BOX[BOX["FISHING_BOX"] = 32] = "FISHING_BOX";
    BOX[BOX["LET_ME_OUT_OF_HERE"] = 33] = "LET_ME_OUT_OF_HERE";
    BOX[BOX["WOODEN_AND_AMETHYST_BOX"] = 34] = "WOODEN_AND_AMETHYST_BOX";
    BOX[BOX["AQUARIUM"] = 35] = "AQUARIUM";
    BOX[BOX["GIFT_BOX"] = 36] = "GIFT_BOX";
    BOX[BOX["OPEN_WATERMELON_BOX"] = 37] = "OPEN_WATERMELON_BOX";
    BOX[BOX["WATERMELON_BOX"] = 38] = "WATERMELON_BOX";
    BOX[BOX["THORNBUSH_BOX"] = 39] = "THORNBUSH_BOX";
    BOX[BOX["RABBIT_IN_THE_BOX"] = 40] = "RABBIT_IN_THE_BOX";
    BOX[BOX["GARLIC_PLOT"] = 41] = "GARLIC_PLOT";
    BOX[BOX["PUMPKIN_PLOT"] = 42] = "PUMPKIN_PLOT";
    BOX[BOX["AUTUMN_BOX"] = 43] = "AUTUMN_BOX";
    BOX[BOX["WINTER_BOX"] = 44] = "WINTER_BOX";
    BOX[BOX["METAL_AND_REIDITE_BOX"] = 45] = "METAL_AND_REIDITE_BOX";
    BOX[BOX["KRAKEN_BOX"] = 46] = "KRAKEN_BOX";
    BOX[BOX["LAVA_BOX"] = 47] = "LAVA_BOX";
    BOX[BOX["LAVA_BOX_2"] = 48] = "LAVA_BOX_2";
    BOX[BOX["BOX_OF_THE_RABBIT"] = 49] = "BOX_OF_THE_RABBIT";
    BOX[BOX["BOX_OF_THE_WOLF"] = 50] = "BOX_OF_THE_WOLF";
    BOX[BOX["BOX_OF_THE_SPIDER"] = 51] = "BOX_OF_THE_SPIDER";
    BOX[BOX["BOX_OF_THE_HAWK"] = 52] = "BOX_OF_THE_HAWK";
    BOX[BOX["BOX_OF_THE_BEAR"] = 53] = "BOX_OF_THE_BEAR";
    BOX[BOX["BOX_OF_THE_FOX"] = 54] = "BOX_OF_THE_FOX";
    BOX[BOX["BOX_OF_THE_BABY_MAMMOTH"] = 55] = "BOX_OF_THE_BABY_MAMMOTH";
    BOX[BOX["BOX_OF_THE_MAMMOTH"] = 56] = "BOX_OF_THE_MAMMOTH";
    BOX[BOX["BOX_OF_THE_SANDWORM"] = 57] = "BOX_OF_THE_SANDWORM";
    BOX[BOX["BOX_OF_THE_VULTURE"] = 58] = "BOX_OF_THE_VULTURE";
    BOX[BOX["BOX_OF_THE_KRAKEN"] = 59] = "BOX_OF_THE_KRAKEN";
    BOX[BOX["BOX_OF_THE_PIRANHA"] = 60] = "BOX_OF_THE_PIRANHA";
    BOX[BOX["BOX_OF_THE_BABY_DRAGON"] = 61] = "BOX_OF_THE_BABY_DRAGON";
    BOX[BOX["BOX_OF_THE_BABY_LAVA"] = 62] = "BOX_OF_THE_BABY_LAVA";
    BOX[BOX["BOX_OF_THE_DRAGON"] = 63] = "BOX_OF_THE_DRAGON";
    BOX[BOX["BOX_OF_THE_PENGUIN"] = 64] = "BOX_OF_THE_PENGUIN";
    BOX[BOX["BOX_OF_THE_LAVA_DRAGON"] = 65] = "BOX_OF_THE_LAVA_DRAGON";
    BOX[BOX["BOX_OF_THE_BOAR"] = 66] = "BOX_OF_THE_BOAR";
    BOX[BOX["BOX_OF_THE_FIRE_MOB"] = 67] = "BOX_OF_THE_FIRE_MOB";
    BOX[BOX["BOX_OF_THE_CRAB"] = 68] = "BOX_OF_THE_CRAB";
    BOX[BOX["BOX_OF_THE_KING_CRAB"] = 69] = "BOX_OF_THE_KING_CRAB";
    BOX[BOX["CRYSTAL_SKY_BOX"] = 70] = "CRYSTAL_SKY_BOX";
    BOX[BOX["DRAGON_BOX"] = 71] = "DRAGON_BOX";
})(BOX || (exports.BOX = BOX = {}));
var SKIN;
(function (SKIN) {
    SKIN[SKIN["STARVER"] = 0] = "STARVER";
    SKIN[SKIN["ANGRY"] = 1] = "ANGRY";
    SKIN[SKIN["SAD"] = 2] = "SAD";
    SKIN[SKIN["HAPPY_1"] = 3] = "HAPPY_1";
    SKIN[SKIN["WHAT?"] = 4] = "WHAT?";
    SKIN[SKIN["SUSPICIOUS"] = 5] = "SUSPICIOUS";
    SKIN[SKIN["SCAR"] = 6] = "SCAR";
    SKIN[SKIN["IN_TROUBLE"] = 7] = "IN_TROUBLE";
    SKIN[SKIN["CUTE"] = 8] = "CUTE";
    SKIN[SKIN["BORED_1"] = 9] = "BORED_1";
    SKIN[SKIN["HAPPY_2"] = 10] = "HAPPY_2";
    SKIN[SKIN["CRAZY"] = 11] = "CRAZY";
    SKIN[SKIN["HAPPY_3"] = 12] = "HAPPY_3";
    SKIN[SKIN["VERY_CUTE"] = 13] = "VERY_CUTE";
    SKIN[SKIN["CURIOUS"] = 14] = "CURIOUS";
    SKIN[SKIN["BORED_2"] = 15] = "BORED_2";
    SKIN[SKIN["HAPPY_4"] = 16] = "HAPPY_4";
    SKIN[SKIN["SCAR_2"] = 17] = "SCAR_2";
    SKIN[SKIN["SICK"] = 18] = "SICK";
    SKIN[SKIN["SOMNAMBULE"] = 19] = "SOMNAMBULE";
    SKIN[SKIN["FEEL_BAD"] = 20] = "FEEL_BAD";
    SKIN[SKIN["MMMH"] = 21] = "MMMH";
    SKIN[SKIN["PANIC"] = 22] = "PANIC";
    SKIN[SKIN["HYPNOTIC"] = 23] = "HYPNOTIC";
    SKIN[SKIN["STARS_IN_THE_EYES"] = 24] = "STARS_IN_THE_EYES";
    SKIN[SKIN["SCARED_AT_NIGHT"] = 25] = "SCARED_AT_NIGHT";
    SKIN[SKIN["VAMPIRE"] = 26] = "VAMPIRE";
    SKIN[SKIN["ZOMBIE"] = 27] = "ZOMBIE";
    SKIN[SKIN["DEVASTER"] = 28] = "DEVASTER";
    SKIN[SKIN["DEAD_DEVASTER"] = 29] = "DEAD_DEVASTER";
    SKIN[SKIN["CACTUS"] = 30] = "CACTUS";
    SKIN[SKIN["BEE"] = 31] = "BEE";
    SKIN[SKIN["CAMO_SKIN"] = 32] = "CAMO_SKIN";
    SKIN[SKIN["BLUE_LIMAX_SKIN"] = 33] = "BLUE_LIMAX_SKIN";
    SKIN[SKIN["RED_LIMAX_SKIN"] = 34] = "RED_LIMAX_SKIN";
    SKIN[SKIN["MR_PUMPKIN"] = 35] = "MR_PUMPKIN";
    SKIN[SKIN["WOOD"] = 36] = "WOOD";
    SKIN[SKIN["ZEBRA"] = 37] = "ZEBRA";
    SKIN[SKIN["TIGER"] = 38] = "TIGER";
    SKIN[SKIN["DAY_OR_NIGHT"] = 39] = "DAY_OR_NIGHT";
    SKIN[SKIN["SQUARE_STARVER"] = 40] = "SQUARE_STARVER";
    SKIN[SKIN["VOODOO_DOLL"] = 41] = "VOODOO_DOLL";
    SKIN[SKIN["FRANKENSTEIN"] = 42] = "FRANKENSTEIN";
    SKIN[SKIN["OLD_MUMMY"] = 43] = "OLD_MUMMY";
    SKIN[SKIN["WEREWOLF"] = 44] = "WEREWOLF";
    SKIN[SKIN["OLD_CTHULHU"] = 45] = "OLD_CTHULHU";
    SKIN[SKIN["SEA_MAN"] = 46] = "SEA_MAN";
    SKIN[SKIN["OLD_PUMPKIN"] = 47] = "OLD_PUMPKIN";
    SKIN[SKIN["OLD_SNOWMAN"] = 48] = "OLD_SNOWMAN";
    SKIN[SKIN["OLD_CHRISTMAS_TREE_MAN"] = 49] = "OLD_CHRISTMAS_TREE_MAN";
    SKIN[SKIN["OLD_MRS_BELL"] = 50] = "OLD_MRS_BELL";
    SKIN[SKIN["OLD_ELFY"] = 51] = "OLD_ELFY";
    SKIN[SKIN["OLD_MR_PRESENT"] = 52] = "OLD_MR_PRESENT";
    SKIN[SKIN["MY_DEAR_OLD_DEER"] = 53] = "MY_DEAR_OLD_DEER";
    SKIN[SKIN["MR_ANGEL"] = 54] = "MR_ANGEL";
    SKIN[SKIN["MR_ICE_CUBE"] = 55] = "MR_ICE_CUBE";
    SKIN[SKIN["MR_SNOWMAN"] = 56] = "MR_SNOWMAN";
    SKIN[SKIN["CRYSTAL_SKY_SKIN"] = 57] = "CRYSTAL_SKY_SKIN";
    SKIN[SKIN["RADIOACTIVE_STARVER"] = 58] = "RADIOACTIVE_STARVER";
    SKIN[SKIN["EATEN_COOKIE"] = 59] = "EATEN_COOKIE";
    SKIN[SKIN["BLOB_THING"] = 60] = "BLOB_THING";
    SKIN[SKIN["MACHINE_MASK"] = 61] = "MACHINE_MASK";
    SKIN[SKIN["LOLLIPOP_1"] = 62] = "LOLLIPOP_1";
    SKIN[SKIN["LOLLIPOP_2"] = 63] = "LOLLIPOP_2";
    SKIN[SKIN["LOLLIPOP_3"] = 64] = "LOLLIPOP_3";
    SKIN[SKIN["LOLLIPOP_4"] = 65] = "LOLLIPOP_4";
    SKIN[SKIN["YELLOW_BIRD"] = 66] = "YELLOW_BIRD";
    SKIN[SKIN["RED_BIRD"] = 67] = "RED_BIRD";
    SKIN[SKIN["BLUE_BIRD"] = 68] = "BLUE_BIRD";
    SKIN[SKIN["OWL"] = 69] = "OWL";
    SKIN[SKIN["NEMO"] = 70] = "NEMO";
    SKIN[SKIN["MR_BREAD"] = 71] = "MR_BREAD";
    SKIN[SKIN["MR_BREAD_2"] = 72] = "MR_BREAD_2";
    SKIN[SKIN["MR_BREAD_3"] = 73] = "MR_BREAD_3";
    SKIN[SKIN["RED_BERRY"] = 74] = "RED_BERRY";
    SKIN[SKIN["OLD_BERRY"] = 75] = "OLD_BERRY";
    SKIN[SKIN["CAKE"] = 76] = "CAKE";
    SKIN[SKIN["CHRISTMAS_CAKE"] = 77] = "CHRISTMAS_CAKE";
    SKIN[SKIN["MR_PANCAKE"] = 78] = "MR_PANCAKE";
    SKIN[SKIN["MR_TACO"] = 79] = "MR_TACO";
    SKIN[SKIN["MR_BOTTLE"] = 80] = "MR_BOTTLE";
    SKIN[SKIN["MR_BOTTLE_2"] = 81] = "MR_BOTTLE_2";
    SKIN[SKIN["PINK_RABBIT"] = 82] = "PINK_RABBIT";
    SKIN[SKIN["MARSHMALLOW"] = 83] = "MARSHMALLOW";
    SKIN[SKIN["FOX"] = 84] = "FOX";
    SKIN[SKIN["RACCOON"] = 85] = "RACCOON";
    SKIN[SKIN["CLOUD"] = 86] = "CLOUD";
    SKIN[SKIN["MOON"] = 87] = "MOON";
    SKIN[SKIN["MR_PANDA"] = 88] = "MR_PANDA";
    SKIN[SKIN["MR_STRAWBERRY"] = 89] = "MR_STRAWBERRY";
    SKIN[SKIN["MUMMY"] = 90] = "MUMMY";
    SKIN[SKIN["DINO"] = 91] = "DINO";
    SKIN[SKIN["MR_KOALA"] = 92] = "MR_KOALA";
    SKIN[SKIN["BOTTLE_PROTECTION"] = 93] = "BOTTLE_PROTECTION";
    SKIN[SKIN["LEAF_MAN"] = 94] = "LEAF_MAN";
    SKIN[SKIN["BUBBLE"] = 95] = "BUBBLE";
    SKIN[SKIN["POTATO"] = 96] = "POTATO";
    SKIN[SKIN["AXOLOTL"] = 97] = "AXOLOTL";
    SKIN[SKIN["TEST_DUMMY"] = 98] = "TEST_DUMMY";
    SKIN[SKIN["STAR-VER"] = 99] = "STAR-VER";
    SKIN[SKIN["STARVER_CHEST"] = 100] = "STARVER_CHEST";
    SKIN[SKIN["STARVER_WORKBENCH"] = 101] = "STARVER_WORKBENCH";
    SKIN[SKIN["FISH"] = 102] = "FISH";
    SKIN[SKIN["CRAB"] = 103] = "CRAB";
    SKIN[SKIN["PIRANHA"] = 104] = "PIRANHA";
    SKIN[SKIN["WINTER_FOX"] = 105] = "WINTER_FOX";
    SKIN[SKIN["BABY_FOXY"] = 106] = "BABY_FOXY";
    SKIN[SKIN["WINTER_BEAR"] = 107] = "WINTER_BEAR";
    SKIN[SKIN["HAWK"] = 108] = "HAWK";
    SKIN[SKIN["NICE_LITTLE_YUKI"] = 109] = "NICE_LITTLE_YUKI";
    SKIN[SKIN["BABY_YUKI"] = 110] = "BABY_YUKI";
    SKIN[SKIN["MR_CARROT"] = 111] = "MR_CARROT";
    SKIN[SKIN["BAT_LIMAX"] = 112] = "BAT_LIMAX";
    SKIN[SKIN["MR_CRATE"] = 113] = "MR_CRATE";
    SKIN[SKIN["MR_SPIDER"] = 114] = "MR_SPIDER";
    SKIN[SKIN["MR_SPIDER_2"] = 115] = "MR_SPIDER_2";
    SKIN[SKIN["MR_BLUE_STARFISH"] = 116] = "MR_BLUE_STARFISH";
    SKIN[SKIN["MR_ORANGE_STARFISH"] = 117] = "MR_ORANGE_STARFISH";
    SKIN[SKIN["MR_PINK_STARFISH"] = 118] = "MR_PINK_STARFISH";
    SKIN[SKIN["MR_SHELLMAUVE"] = 119] = "MR_SHELLMAUVE";
    SKIN[SKIN["MR_SHELL_BEAD"] = 120] = "MR_SHELL_BEAD";
    SKIN[SKIN["ANGRY_CRAB"] = 121] = "ANGRY_CRAB";
    SKIN[SKIN["PENGUIN"] = 122] = "PENGUIN";
    SKIN[SKIN["MR_BOAR"] = 123] = "MR_BOAR";
    SKIN[SKIN["I_SAW_YOU"] = 124] = "I_SAW_YOU";
    SKIN[SKIN["IT_WAS_FUNNY"] = 125] = "IT_WAS_FUNNY";
    SKIN[SKIN["YOU_CAN_SCREAM"] = 126] = "YOU_CAN_SCREAM";
    SKIN[SKIN["MR_BOOK"] = 127] = "MR_BOOK";
    SKIN[SKIN["MR_MAMMOTH"] = 128] = "MR_MAMMOTH";
    SKIN[SKIN["MR_MAMMOTH_2"] = 129] = "MR_MAMMOTH_2";
    SKIN[SKIN["NIGHTMARE"] = 130] = "NIGHTMARE";
    SKIN[SKIN["SHINY_CRYSTAL"] = 131] = "SHINY_CRYSTAL";
    SKIN[SKIN["WATER_SKIN"] = 132] = "WATER_SKIN";
    SKIN[SKIN["WILL-O'-THE-WISP"] = 133] = "WILL-O'-THE-WISP";
    SKIN[SKIN["FLAME"] = 134] = "FLAME";
    SKIN[SKIN["BE_A_TREE"] = 135] = "BE_A_TREE";
    SKIN[SKIN["TOXIC_MUTANT"] = 136] = "TOXIC_MUTANT";
    SKIN[SKIN["MR_TOMATO"] = 137] = "MR_TOMATO";
    SKIN[SKIN["MR_MAUVE,_THE_LAPA"] = 138] = "MR_MAUVE,_THE_LAPA";
    SKIN[SKIN["GOLDEN_FISH"] = 139] = "GOLDEN_FISH";
    SKIN[SKIN["LAPAMAUVE"] = 140] = "LAPAMAUVE";
    SKIN[SKIN["LAPAMAUVE_"] = 141] = "LAPAMAUVE_";
    SKIN[SKIN["MR_BURGER"] = 142] = "MR_BURGER";
    SKIN[SKIN["TROPICAL_STARVER"] = 143] = "TROPICAL_STARVER";
    SKIN[SKIN["MR_SHELLPINK"] = 144] = "MR_SHELLPINK";
    SKIN[SKIN["MR_ORANSHELL"] = 145] = "MR_ORANSHELL";
    SKIN[SKIN["PEPE"] = 146] = "PEPE";
    SKIN[SKIN["MR_ANT"] = 147] = "MR_ANT";
    SKIN[SKIN["MR_WATERMELON"] = 148] = "MR_WATERMELON";
    SKIN[SKIN["MR_THORNBUSH"] = 149] = "MR_THORNBUSH";
    SKIN[SKIN["CTHULHU"] = 150] = "CTHULHU";
    SKIN[SKIN["MR_CACTUS"] = 151] = "MR_CACTUS";
    SKIN[SKIN["MOMO"] = 152] = "MOMO";
    SKIN[SKIN["MR_GARLIC"] = 153] = "MR_GARLIC";
    SKIN[SKIN["ROBOT_DRAGON"] = 154] = "ROBOT_DRAGON";
    SKIN[SKIN["LAVA_DRAGON_VERSION_1"] = 155] = "LAVA_DRAGON_VERSION_1";
    SKIN[SKIN["LAVA_DRAGON_VERSION_2"] = 156] = "LAVA_DRAGON_VERSION_2";
    SKIN[SKIN["LAVA_DRAGON_VERSION_3"] = 157] = "LAVA_DRAGON_VERSION_3";
    SKIN[SKIN["ICE_DRAGON_VERSION_1"] = 158] = "ICE_DRAGON_VERSION_1";
    SKIN[SKIN["ICE_DRAGON_VERSION_2"] = 159] = "ICE_DRAGON_VERSION_2";
    SKIN[SKIN["ICE_DRAGON_VERSION_3"] = 160] = "ICE_DRAGON_VERSION_3";
    SKIN[SKIN["BABY_DRAGON_VERSION_1"] = 161] = "BABY_DRAGON_VERSION_1";
    SKIN[SKIN["BABY_DRAGON_VERSION_2"] = 162] = "BABY_DRAGON_VERSION_2";
    SKIN[SKIN["BABY_LAVA"] = 163] = "BABY_LAVA";
    SKIN[SKIN["KRAKEN"] = 164] = "KRAKEN";
    SKIN[SKIN["SANDWORM"] = 165] = "SANDWORM";
    SKIN[SKIN["MR_GOLDEN_BREAD"] = 166] = "MR_GOLDEN_BREAD";
    SKIN[SKIN["STARVER_ORES"] = 167] = "STARVER_ORES";
    SKIN[SKIN["POO"] = 168] = "POO";
    SKIN[SKIN["VOLCANO_STARVER"] = 169] = "VOLCANO_STARVER";
    SKIN[SKIN["LAVA_STARVER"] = 170] = "LAVA_STARVER";
    SKIN[SKIN["ROBOT"] = 171] = "ROBOT";
    SKIN[SKIN["BLUE_BUTTERFLY"] = 172] = "BLUE_BUTTERFLY";
    SKIN[SKIN["YRIFOX"] = 173] = "YRIFOX";
    SKIN[SKIN["BLOB_SKIN"] = 174] = "BLOB_SKIN";
})(SKIN || (exports.SKIN = SKIN = {}));