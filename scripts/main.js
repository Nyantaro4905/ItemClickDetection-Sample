import { world, system } from "@minecraft/server";

world.beforeEvents.itemUse.subscribe(ev => {
    if (ev.itemStack.typeId === "minecraft:compass") {
        system.run(() => {
            ev.source.sendMessage("Subscribe!")
            ev.source.runCommand("title @s title Subscribe!1")
            ev.source.runCommand("title @s title Subscribe!2")
            ev.source.runCommand("title @s title Subscribe!3")
            ev.source.runCommand("title @s title Subscribe!4")
            ev.source.runCommand("title @s title Subscribe!5")
            ev.source.runCommand("title @s title Subscribe!6")
            ev.source.runCommand("title @s title Subscribe!7")
            ev.source.runCommand("title @s title Subscribe!8")
            ev.source.runCommand("title @s title Subscribe!9")
            ev.source.runCommand("title @s title Subscribe!10")
            ev.source.runCommand("title @s title Subscribe!11")
            ev.source.runCommand("title @s title Subscribe!12")
            ev.source.runCommand("title @s title Subscribe!13")
            ev.source.runCommand("title @s title Subscribe!")
            ev.source.runCommand("title @s title Subscribe!")

        })
    }
});