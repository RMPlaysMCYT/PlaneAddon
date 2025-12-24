import {world, system} from "@minecraft/server";

system.run(() => {
    world.getDimension("overworld").runCommand("ticks");
    world.getDimension("the_nether").runCommand("ticks");
    world.getDimension("the_end").runCommand("ticks");
},1)