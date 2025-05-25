# Ragdoll

## Introduction
Ragdolling a character can serve as a way to extend a combo, or to limit the length of the combo.

By default, characters will be ragdolled for 2 seconds. It is possible to override this value, but its advisable not to.

Ragdolled characters will be unable to move, and will only take damage from specific attacks. Characters may also [escape](#escape) out of the ragdolled state.

## How it works

#### Ragdoll

| Parameter            | Description                                          |
| -------------------- | ---------------------------------------------------- |
| character: Model     | The character to be ragdolled.                       |
| ragdollTime: number? | Time in seconds for the ragdoll to last. Default: 2. |

```lua
-- This code ragdolls a character for 5 seconds
ServerUtils.ragdoll(character, 5)
```

#### Escape

You can manually set whether or not a character will be allowed to use an evasive dash to escape out of specific states. By default, characters can always escape from a ragdoll.

| Parameter            | Description                                                    |
| -------------------- | -------------------------------------------------------------- |
| character: Model     | The character to escape.                                       |
| canEscape: boolean   | Whether or not the character is allowed to use an evasive dash |

```lua
-- This code allows the character to use an evasive dash to escape out of ragdoll
ServerUtils.setCanEscape(character, true)
```