# Pushback

## Introduction
Pushback is a specific type of knockback that stuns a character at the same time as it pushes it away from a given position.

Affected characters will be stunned for the duration of the pushback + 0.4 seconds afterwards + extra stun time, if given.

## How it works

| Parameter                   | Description                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------- |
| victim: Model               | The character to be pushed back.                                                                     |
| attackerPos: Vector3        | The position that the character will be pushed away from.                                            |
| distance: number            | The length, in studs, that the pushback will traverse.                                               |
| duration: number            | The duration, in seconds, that the pushback will last.                                               |
| extraStunTime: number?      | The duration, in seconds, that the character will be stunned for after pushback is completed. Default: 0. |  
| directionOverride: Vector3? | If given, the character will be pushed back in the that direction, instead of away from attackerPos. |

```lua
-- The following code will push back the victim 20 studs away from the attacker, in 0.8 seconds.
local attackerPos = attacker.HumanoidRootPart.Position
local distance = 20
local duration = 0.8

ServerUtils.pushBack(victim, attackerPos, distance, duration)
```