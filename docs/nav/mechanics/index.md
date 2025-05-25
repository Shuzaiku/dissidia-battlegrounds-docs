# Mechanics

## Introduction
This section explains certain mechanics of the game, how to use them, and when it may be most appropriate to use.

Mechanics may range from anything such as simple knockback and stun, to more complicated states such as air combos.

Mechanics are handled as methods, and most of these methods can be found in `ServerScriptService/ServerUtils`.

## Common use case
```lua
hitbox:oneShot(function(victimCharacter: Model)
    ServerUtils.takeDamage(victimCharacter, 10) -- mechanic
    ServerUtils.ragdoll(victimCharacter) -- mechanic
    ServerUtils.knockback( -- mechanic
        victimCharacter, 
        Vector3.new(0, 140, 0),
        0.45,
        Vector3.new(0, 1, 0)
    )
)
```

For more information about hitboxes, read [HitboxClass](../hitbox-class/index.md).