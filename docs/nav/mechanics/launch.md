# Launch

## Introduction
A launch is a type of knockback that stuns and launches a character upwards following projectile motion. The knockback is not completed until the character touches the ground or if the character itself is removed.

![Projectile motion graph](../../img/projectile-motion-light.png#only-light){ width="300" }
![Projectile motion graph](../../img/projectile-motion-dark.png#only-dark){ width="300" }

Once the character reaches the ground, it will be [pushed back](pushback.md) with the following arguments:

| Argument             | Value |
| -------------------- | ----- |
| victim: Model                |
| attackerPos: Vector3         |
| distance             | 20    |
| duration             | 0.25  |
| extraStunTime        | 0.1   | 

Before [pushback](pushback.md), the character is allowed to [escape](ragdoll.md#escape) out of the launch.

## How it works

| Parameter                     | Description                                            |
| ----------------------------- | ------------------------------------------------------ |
| attacker: Model               | The character inflicting launch on the victim.         |
| victim: Model                 | The character to be launched.                          |   
| distance: number              | The horizontal distance to traverse.                   |
| height: number                | The vertical distance to traverse.                     |
| timeInSeconds: number         | How long it will take to reach `distance`, in seconds. |
| horizontalDirection: Vector3? | The horizontal direction in which the launch will traverse. By default, `victim` will be launched away from `attacker`. |

```lua
-- The following code will launch the victim 15 studs away from the attacker
-- in 1 second, and it will reach a peak height of 15 studs above the intial
-- position of the victim.
local distance = 15
local height = 15
local duration = 1

ServerUtils.launch(attacker, victim, distance, height, duration)
```