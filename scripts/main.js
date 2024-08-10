import { world, system } from "@minecraft/server";

world.beforeEvents.itemUse.subscribe(ev => {
    if (ev.itemStack.typeId === "minecraft:compass") {
        system.run(() => {
            ev.source.sendMessage("Subscribe!")
            ev.source.runCommand("title @s title Subscribe!")
        })
    }
});
