import { world, system } from "@minecraft/server";
import './camera/camera';

console.warn("Plane Add-on Version 8 is Loaded");
console.log("Plane Add-on Version 8 is Loaded");

world.afterEvents.playerJoin.subscribe((event) => {
    const {player} = event;
    world.sendMessage('Thank you for downloading the Plane Add-on Version 8')
    world.sendMessage('Add-on Developed by RMPlaysMC YT')
});

world.afterEvents.playerSpawn.subscribe((event) => {
    const {player} = event;
    world.sendMessage('Thank you for downloading the Plane Add-on Version 8')
    world.sendMessage('Add-on Developed by RMPlaysMC YT')
});