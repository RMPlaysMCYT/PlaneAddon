import {system, world} from "@minecraft/server";

system.runInterval(() => {
    for (const {player, vehicle} of world.getPlayers().map(p => ({player: p, vehicle: p.getComponent("minecraft:riding") }))) {
        const ridingEntity = vehicle?.entityRidingOn;
        if(ridingEntity && ridingEntity.typeId === "planeronnel:plane") {
            player.runCommandAsync(`tag @s add plane_fuel`);
            player.runCommandAsync(`say The Player Ride on a Plane`);
        }
    }
}, 1);