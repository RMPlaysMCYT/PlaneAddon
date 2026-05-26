import {system, world} from "@minecraft/server";

system.runInterval(() => {
    for (const {player, vehicle} of world.getPlayers().map(p => ({player: p, vehicle: p.getComponent("minecraft:riding") }))) {
        const ridingEntity = vehicle?.entityRidingOn;
        if(ridingEntity && ridingEntity.typeId === "planeronnel:plane") {
            player.runCommandAsync(`tag @s add plane_fuel`);
            player.runCommandAsync(`say The Player Ride on a Plane`);
        };
        if(ridingEntity && ridingEntity.typeId === "planeronnel:plane_black") {
            player.runCommandAsync(`tag @s add plane_fuel`);
            player.runCommandAsync(`say The Player Ride on a Plane`);
        };
        if(ridingEntity && ridingEntity.typeId === "planeronnel:plane_blue") {
            player.runCommandAsync(`tag @s add plane_fuel`);
            player.runCommandAsync(`say The Player Ride on a Plane`);
        };
        if(ridingEntity && ridingEntity.typeId === "planeronnel:plane_brown") {
            player.runCommandAsync(`tag @s add plane_fuel`);
            player.runCommandAsync(`say The Player Ride on a Plane`);
        };
        if(ridingEntity && ridingEntity.typeId === "planeronnel:plane_dark_blue") {
            player.runCommandAsync(`tag @s add plane_fuel`);
            player.runCommandAsync(`say The Player Ride on a Plane`);
        };
        if(ridingEntity && ridingEntity.typeId === "planeronnel:plane_green") {
            player.runCommandAsync(`tag @s add plane_fuel`);
            player.runCommandAsync(`say The Player Ride on a Plane`);
        };
        if(ridingEntity && ridingEntity.typeId === "planeronnel:plane_pink") {
            player.runCommandAsync(`tag @s add plane_fuel`);
            player.runCommandAsync(`say The Player Ride on a Plane`);
        };
    }
}, 1);