# Invincibility Frames

## Introduction
Invincibility completely negates being detected by [hitboxes](../hitbox-class/index.md), as long as the [invincibility priority](#priority) is larger than the [hitbox priority](../hitbox-class/api.md#priority).

## How it works

---

#### Priority

Priority can be assigned as any number value, but [HitboxClass](../hitbox-class/index.md) streamlines this process by holding 5 common values:

| Priority | Value | Description                                                                                 |
| -------- | ----- | ------------------------------------------------------------------------------------------- |
| None     | 0     | No invincibility.                                                                           |
| Low      | 1     | Common for base moves with invincibility frames.                                            |
| Medium   | 2     | Common for finisher moves with invincibility frames.                                        |
| High     | 3     | Common for [awakening](focus.md) transformations.                                           |
| Core     | 3000  | Unique priority for core mechanics such recovering from a ragdoll or using an evasive dash. |

---

#### Set invincibility
```lua
ServerUtils.setInvincibility(character: Model, invincible: boolean, priority: number?): number
```

Toggle whether or not the character can be detected by certain [hitboxes](../hitbox-class/index.md).
When disabling invincibility, it is important to follow the proper [override protocol](#override-invincibility).

| Parameter           | Description                                     |
| ------------------- | ----------------------------------------------- |
| character: Model    | The character whose invincibility is to be set. |
| invincible: boolean | Whether or not invincibility will be given.     |
| priority: number?   | The invincibility [priority](#priority).        |

| Return | Description |
| - | - |
| startTime: number | The server [tick](https://create.roblox.com/docs/reference/engine/globals/RobloxGlobals#tick) at which invincibility was set. |

???+ note

    The `invincible` parameter is redundant, and it would be ideal to remove it in the future.

---

#### Override invincibility
```lua
ServerUtils.canOverrideInvincibility(character: Model, startTime: number): boolean
```

Returns true if invincibility is allowed to be overridden based off of [setInvincibility's](#set-invincibility) `startTime`.

This method is mostly useful for toggling off invincibility, as simply calling `ServerUtils.setInvincibility(character, false)` without prior use of `ServerUtils.canOverrideInvincibility()` can result in unpredictable behaviour where one script toggles off invincibility while another script had already toggled on a different invincibility. Such was a common case in the early alpha versions of the game where using an attack with invincibility frames right after awakening had finished would result in the attack's invincibility being toggled off early by the awakening script.

| Parameter | Description |
| - | - |
| character: Model | The character to check. |
| startTime: number | The server [tick](https://create.roblox.com/docs/reference/engine/globals/RobloxGlobals#tick) at which invincibility was last set in the same script. |

| Return               | Description                                     |
| -------------------- | ----------------------------------------------- |
| canOverride: boolean | Whether or not invincibility can be overridden. |

???+ example

    ```lua
    -- The following code gives invincibility to a character and toggles it off with the proper
    -- protocol after 5 seconds.

    -- # Services
    local ServerScriptService = game:GetService("ServerScriptService")
    local Players = game:GetService("Players")

    -- # Constants
    local PRIORITY = HitboxClass.Priority.Core
    local DURATION = 5
    
    -- # Imports
    local HitboxClass = require(ServerScriptService.HitboxClass)
    local ServerUtils = require(ServerScriptService.ServerUtils)

    -- # Methods
    local function onCharacterAdded(character)
        local startTime = ServerUtils.setInvincibility(character, true, PRIORITY)
        task.wait(duration)

        if ServerUtils.canOverrideInvincibility(character, startTime) then
            ServerUtils.setInvincibility(character, false)
        end
    end

    local function onPlayerAdded(player)
        player.CharacterAdded:Connect(onCharacterAdded)
    end

    -- # Main
    Players.PlayerAdded:Connect(onPlayerAdded)
    ```