# Stun

## Introduction
When a character gets stunned, they may not be able to attack, and their speed may be reduced.

Stunning also goes deeper than that, as it is also used to determine a combo's count and length, which directly affects how much [damage](damage.md) a character will take.

Stun may be inflected through `ServerUtils.stun()`, and it returns a [coroutine](https://create.roblox.com/docs/reference/engine/libraries/coroutine) which cancels the stun.

Additionally, [tasks](#tasks) can be assigned to be executed if the current stun gets interrupted. [Tasks](#tasks) may be declared in the form of an [Instance](https://create.roblox.com/docs/reference/engine/classes/Instance) or a method.

???+ example

    ```lua
    -- The following code stuns the victim for 1 second and slows them down temporarily.
    local stunTime = 1
    local stunSpeed = 5
    local stunTag = "Attack"

    hitbox:oneShot(function(victimCharacter: Model)
        ServerUtils.stun(victimCharacter, stunTime, stunSpeed, stunTag)
    )
    ```

## How it works

| Parameter         | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| character: Model  | The character to be stunned.                                          |
| stunTime: number  | The length of time in seconds for the character to be stunned.        |
| stunSpeed: number | The speed that the character will have while stunned.                 |
| stunTag: string   | A string that overrides the character's previous `StunTag` attribute. |

#### Tags
Commonly, tags are used in conjunction with `GeneralUtils.wasInterrupted()` to determine if a character's action has been interrupted with a stun.

Tags are stored as [attribute](https://create.roblox.com/docs/studio/properties#instance-attributes) strings in a player's `Character.Status` [Folder](https://create.roblox.com/docs/reference/engine/classes/Folder).

You can name the tags whatever, but it's advisable to stick to this list of commonly used tags:

| Tag    | Description                                                                                                                 |
| ------ | --------------------------------------------------------------------------------------------------------------------------- |
| _Emote | Any tag can override this stun.                                                                                             |
| _Combo | Any tag but itself and `_Emote` may override this stun.                                                                     |
| Guard  | This tag cannot be overridden, but allows the character to keep guarding while still technically stunned. Don't touch this. |
| Windup | The character is stunned because it's performing an attack.                                                                 |
| Attack | The character is stunned because it's been attacked.                                                                        |

??? example

    ```lua
    -- The following code cancels a method if the character does not have the "Windup" stun tag.

    -- # Services
    local ReplicatedStorage = game:GetService("ReplicatedStorage")
    local Players = game:GetService("Players")

    -- # Variables
    local modules = ReplicatedStorage.modules
    local secureTag = "Windup"

    -- # Imports
    local GeneralUtils = require(modules.GeneralUtils)

    -- # Main
    Players.PlayerAdded:Connect(function(player)
        player.CharactedAdded:Connect(function(character)
            task.wait(10)
            if GeneralUtils.wasInterrupted(character, secureTag) then
                return
            end

            print("Not interrupted!")
        )
    )
    ```

#### Tasks
Tasks will be invoked or deleted if the current stun is interrupted. You may set tasks through `ServerUtils.giveStunTask()`.

| Parameter                   | Description                                       |
| --------------------------- | ------------------------------------------------- |
| character: Model            | The character whose task will be assigned to.     |
| task: Instance \| () -> nil | An Instance or method to be destroyed or invoked. |

```lua
    -- The following code will invoke the given method if the current stun gets overridden by another.
    ServerUtils.giveStunTask(character, function()
        print("Stun override!")
    )
```

#### Cancel stun
Stun can be manually cancelled through `ServerUtils.ridStagger()`. Not to be confused with [animation cancelling](anim-cancel.md), invoking this method will completely override any negative effects on the character that prevents them from performing other actions.

| Parameter        | Description                                 |
| ---------------- | ------------------------------------------- |
| character: Model | The character whose stun will be cancelled. |

```lua
ServerUtils.ridStagger(character)
```

??? example

    This is what the method looks like from the inside.

    ```lua
    function ServerUtils.ridStagger(character: Model)
        local status = character.Status
        
        status:SetAttribute("StunTime", 0)
        status:SetAttribute("CanAttack", true)
        status:SetAttribute("IsStunned", false)
    end
    ```

#### Coroutine
The [coroutine](https://create.roblox.com/docs/reference/engine/libraries/coroutine) returned by `ServerUtils.stun()` contains a method which cancels the stun at the end of its duration. Cancelling this [coroutine](https://create.roblox.com/docs/reference/engine/libraries/coroutine) will result in the stun being endless. This is helpful for very specific scenarios.