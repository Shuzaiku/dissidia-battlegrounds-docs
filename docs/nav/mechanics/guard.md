# Guard

## Introduction
Guarding is a mechanic that allows you to negate damage from certain attacks as long as the attack is landed within 180° of the character's field of view. This operation is calculated through dot product.

![Dot product cosine values](../../img/dot-product-cosine-values.png)

Characters may guard when whenever they aren't stunned, but you can manually set whether or not they can guard for specific scenarios as well.

## How it works

#### Allowing/disallowing guard
```lua
ServerUtils.canGuard(character: Model, canGuard: boolean)
```

| Parameter         | Description                                               |
| ----------------- | --------------------------------------------------------- |
| character: Model  | The character whose `CanGuard` attribute will be changed. |
| canGuard: boolean | Whether or not the character is allowed to guard.         |