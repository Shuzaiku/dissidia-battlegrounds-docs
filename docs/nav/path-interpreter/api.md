# PathInterpreter API

## Constructors

#### new
```lua
local pathInterpreter : PathInterpreter = PathInterpreter.new(characterModel)
```
Constructs a `PathInterpreter` object with the defined variables of `game` and `character`.

---

## Methods

#### getInstance
```lua
local pathResult : any = PathInterpreter:getInstance(path)
```
Returns any value that `path` is pointing towards.

| Parameter | Description |
| - | - |
| path: string | A string representing a path to an Instance or property |

---

## Properties

!!! info

    You may declare new properties in the object or class to also create new `path` variables.

#### character
: [Model]

{read-only}
```lua
local character : Model = pathInterpreter.character
```

---
#### game
: [DataModel]

{read-only}
```lua
local _game : DataModel = pathInterpreter.game
```