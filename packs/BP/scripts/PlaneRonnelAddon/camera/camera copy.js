import {world, system} from "@minecraft/server"

/*const CameraReset = (player) => player?.runCommandAsync('playanimation @s animation.player.camera_reset');*/
const CameraReset = (player) => player?.runCommandAsync('camera @s clear');

const PlaneListsEntity = {
    "planeronnel:plane_black": { pos: '~ ~5 ~-6', rot: '~-40 ~' },
    "planeronnel:plane_blue": { pos: '~ ~5 ~-10', rot: '~-30 ~' },
    "planeronnel:plane_brown": { pos: '~ ~5 ~-10', rot: '~-30 ~' },
    "planeronnel:plane_dark_blue": { pos: '~ ~5 ~-10', rot: '~-30 ~' },
    "planeronnel:plane_green": { pos: '~ ~5 ~-10', rot: '~-30 ~' },
    "planeronnel:plane_pink": { pos: '~ ~5 ~-10', rot: '~-30 ~' },
    "planeronnel:plane_red_purple": { pos: '~ ~5 ~-10', rot: '~-30 ~' },
    "planeronnel:plane_white": { pos: '~ ~5 ~-10', rot: '~-30 ~' },
    "planeronnel:plane_yellow": { pos: '~ ~5 ~-10', rot: '~-30 ~' },
    "planeronnel:plane": { pos: '~ ~5 ~-10', rot: '~-30 ~' }
}



system.runInterval(() => {
    for (const { player, ride } of world.getPlayers().map(p => ({ player: p, ride: p.getComponent("minecraft:riding") }))) {
        const ridingEntity = ride?.entityRidingOn;
        if (ridingEntity && PlaneListsEntity[ridingEntity.typeId]) {
            player.runCommandAsync(`camera @s set minecraft:free ease 1 spring pos ${PlaneListsEntity[ridingEntity.typeId].pos} rot ${PlaneListsEntity[ridingEntity.typeId].rot}`);
        } else {
            CameraReset(player);
        }
    }
}, 1);