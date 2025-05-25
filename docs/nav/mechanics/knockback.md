# Knockback

## Introduction
Knockback applies a [BodyVelocity](https://create.roblox.com/docs/reference/engine/classes/BodyVelocity) to a character's [HumanoidRootPart](https://create.roblox.com/docs/reference/engine/classes/Humanoid#RootPart) for a set period of time.

Because of ground friction, [BodyVelocity](https://create.roblox.com/docs/reference/engine/classes/BodyVelocity) will make objects traverse a larger distance through the air, but you can get rid of this behaviour by applying [acceleration](#acceleration) to it.

In the future, it would be ideal to update knockback to use [LinearVelocity](https://create.roblox.com/docs/reference/engine/classes/LinearVelocity).

## How it works

#### Velocity

| Parameter                  | Description                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------ |
| character: Model           | The character whose HumanoidRootPart will be affected by BodyVelocity.                     |
| velocity: Vector3          | The direction and speed, in studs, that the BodyVelocity will travel to.                   |
| duration: number           | The length of the knockback, in seconds.                                                   |
| forceDirection: Vector3    | Which directions will be used to calculate MaxForce. Numbers must range from 0-1 per axis. |
| overrideAirCombo: boolean? | Knocks the character out of an air combo. Default: true.                                   |

```lua
-- The following code will apply knockback in an upwards direction to a character for 0.45 seconds.
local velocity = Vector3.new(0, 140, 0)
local duration = 0.45
local forceDirection = Vector3.new(0, 1, 0)

ServerUtils.knockback(character, velocity, duration, forceDirection)
```

#### Acceleration

| Parameter                  | Description                                                                   |
| -------------------------- | ----------------------------------------------------------------------------- |
| bodyVelocity: BodyVelocity | The BodyVelocity to be accelerated.                                           |
| finalSpeed: number         | The speed for the acceleration to reach.                                      |
| duration: number           | How long it will take for the BodyVelocity to reach `finalSpeed`, in seconds. |

```lua
-- The following code will deaccelerate a BodyVelocity to full stop in 0.35 seconds.
local finalSpeed = 0
local duration = 0.35

ServerUtils.accelerateVelocityVector(bodyVelocity, finalSpeed, duration)
```