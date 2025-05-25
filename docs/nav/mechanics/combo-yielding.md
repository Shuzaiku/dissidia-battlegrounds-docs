# Combo Yielding

## Introduction

The base combo allows the player to attack 4 times by holding down the left mouse button. The first 3 hits will [stun](stun.md) victims, while the final 4th hit, the *finisher*, will [ragdoll](ragdoll.md) them.

The first 3 hits have a cooldown of 0.35 seconds until the combo completely resets, while the finisher will have a cooldown of 2.15 seconds until another base combo can be started again.

If **combo yielding** is used, it will reset the combo cooldown, effectively allowing a character to continue the combo where they left off after performing a special attack.

```lua
baseCombo:SetAttribute("LastActionTime", workspace:GetServerTimeNow())
```

Additionally, if **combo yielding** is used after a finisher, then another finisher will be given to the character.

```lua
-- Setting the current combo count to 3 gives the character a finisher, as the base combo adds to where it left off.
baseCombo:SetAttribute("ComboCount", 3)
```

In the early versions of the game, this was all done manually, but now there's a method that streamlines this mechanic:

## How it works

```lua
ServerUtils.yieldCombo(character: Model)
```

Resets combo timer and forces a finisher under certain conditions.

| Parameter        | Description                                |
| ---------------- | ------------------------------------------ |
| character: Model | The character whose combo will be yielded. |