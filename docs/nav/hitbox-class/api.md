# HitboxClass API

## Functions

#### isAirborne
```lua
local airborne: boolean = Hitbox.isAirborne(character)
```
Returns true if the given character is airborne.

| Parameters | Description |
| - | - |
| character: Model | A player's character |

| Returns |
| ------- |
| boolean |

## Constructors

#### new
```lua
local hitbox = Hitbox.new(hitboxPart, casterHurtbox)
```
Constructs a `HitboxClass` object that will detect `Destructible` and `Hurtbox` collision groups but will ignore `casterHurtbox`.

| Parameters              | Description                     |
| ----------------------- | ------------------------------- |
| hitboxPart: Part        | A Part representing the hitbox. |
| casterHurtbox: BasePart | A character's Hurtbox.          |

---

## Methods

#### oneShot
```lua
local onHit = function(victimCharacter: Model)

end

hitbox:oneShot(onHit, false)
```
One-time hitbox detection for *Hurtboxes* or *Destructibles* not included in [ignoreList](#ignorelist). Resets ignore list by default.

| Parameters | Description |
| - | - |
| onHit: function | The function to be invoked when a victim character is hit |
| overrideIgnoreListReset: boolean? | If true, [ignoreList](#ignorelist) will not be reset |

---

#### activate
```lua
hitbox:activate(function(victimCharacter: Model)

end)
```
Start hitbox detection for *Hurtboxes* or *Destructibles* not included in [ignoreList](#ignorelist).

| Parameters | Description |
| - | - |
| onHit: function | The function to be invoked when a victim character is hit |

---

#### deactivate
```lua
hitbox:deactivate()
```
End hitbox detection.

---

#### Destroy
```lua
hitbox:Destroy()
```
Garbage collection. Destroys `hitboxPart` and all connections, as well as stopping detection if the hitbox is currently active.

---

#### resetIgnoreList
```lua
hitbox:resetIgnoreList()
```
Empties [ignoreList](#ignorelist) except for the [casterHurtbox](#casterhurtbox).

---

#### removeFromIgnoreList
```lua
hitbox:removeFromIgnoreList(instance)
```
Removes an object from the [ignoreList](#ignorelist). Usually, only a Hurtbox should be part of the ignoreList.

| Parameters |
| - |
| instance: Instance |

---

#### insertToIgnoreList
```lua
hitbox:insertToIgnoreList(instance)
```
Adds an object to the ignore list.

| Parameters |
| - |
| instance: Instance |

---

#### follow
```lua
hitbox:follow(offsetCF)
```
Makes hitbox follow [casterHurtbox](#casterhurtbox) from a provided relative CFrame.

| Parameters |
| - |
| offsetCF: CFrame |

---

#### unfollow
```lua
hitbox:unfollow()
```
Stop hitbox from following the [casterHurtbox](#casterhurtbox).

---

#### bindOnHit
```lua
local hitRegistered = false
hitbox:bindOnHit(function(victimCharacter: Model)
    if hitRegistered then return false end
    hitRegistered = true
)
```
Binds a method to be invoked prior to hitting registering a hit.
If `func` returns false, the hit will not be registered at all.

|                 Parameters                 |
| ------------------------------------------ |
| func: (victimCharacter: Model) -> boolean? |

---

#### isPerfectBlocked
```lua
local perfectBlocked: boolean = hitbox:isPerfectBlocked(character)
```
Returns true if the hitbox has been blocked within a certain timeframe after blocking began.

| Parameters |
| - |
| character: Model |

| Returns |
| - |
| boolean |

---

#### getBehindPos
```lua
local behindPos: Vector3 = hitbox:getBehindPos()
```
Returns the [part](#part)'s behind position relative to a victim to be	used when determining whether an attack hit from behind or not.

| Returns |
| - |
| Vector3 |

---

#### isGuardBypassed
```lua
local guardBypassed: boolean = hitbox:isGuardBypassed(victimHurtbox)
```
Returns true if the hitbox has bypassed guard by hitting a victim from behind.

| Parameters |
| - |
| victimHurtbox: BasePart |

| Returns |
| - |
| boolean |

---

#### guardEffect
```lua
hitbox:guardEffect(hurtbox)
```
Emit a character's guard VFX.

| Parameters |
| - |
| hurtbox: BasePart |

---

#### partIsInRange
```lua
local inRange: boolean = hitbox:partIsInRange(part)
```
Sanity check to see if a hit part is actually within range.

| Parameters |
| - |
| part: BasePart |

| Returns |
| - |
| boolean |

---

#### validate
```lua
local validated: boolean = hitbox:validate(figure, onHit)
```
Validates a client hitbox's hit request.

| Parameters |
| - |
| figure: Model or BasePart |
| onHit: function |

| Returns |
| - |
| boolean |

---

#### onGuard
```lua
-- @override
hitbox:onGuard(victimCharacter)
```
Empty method. When declared, it will be invoked when the hitbox is guarded against.

| Parameters |
| - |
| victimCharacter: Model |

## Events

#### destroyed
: [Signal]

Fires when the hitbox has been [destroyed](#destroy).

## Properties

#### part
: [BasePart]

A BasePart that visually represents the hitbox.

---

#### casterHurtbox
: [BasePart]

The caster's hurtbox part.

---

#### ignoreList
: [table]

A list of hurtboxes to ignore.

---

#### ignoreGuard
: [bool]

If true, the hitbox will be unaffected by guarding.

---

#### ignoreRagdolled
: [bool]

If true, the hitbox will not detect ragdolled enemies that are grounded.

---

#### ignoreAirborneRagdolled
: [bool]

Whether or not airborne ragdolled enemies are to be ignored.

---

#### breakGuard
: [bool]

Whether or not guard will be disabled after a successful hit.

---

#### parriable
: [bool]

If true, hitbox will be deleted when it is guarded against.

---

#### interruptable
: [bool]

Whether or not the hitbox shall be removed when the caster takes damage.

---

#### destroysEnvironment
: [bool]

If true, the hitbox will interact with BaseParts that are in the "Destructible" CollisionGroup.

---

#### priority
: [number]

The maximum [invincbility priority](../mechanics/iframes.md#priority) that the hitbox can detect.

---

#### isProjectile
: [bool]

If true, [getBehindPos()](#getbehindpos) will be calculated using the dimensions of the hitbox.

---

#### sanityLeeway
: [number]

Leeway of studs the client can extend ahead of the server.

---

#### name
: [string]

The name that will be given to the hitbox.

---

#### validityLeeway
: [number]

How long after being destroyed will the hitbox keep listening for validations.

---

#### flingSpeed
: [number]

What speed to fling destructibles with.

---

#### perfectBlockable
: [bool]

If true, the hitbox will reward victims for blocking just in time.

---

#### _bindedOnHitMethods
: [table]

{read-only}

A list of methods to be invoked prior to registering a hit

---

#### _shape
: [PartType]

{read-only}

The _shape property sets the overall shape of the hitbox to one of a predetermined list of built-in shapes.

The Enum.PartType enum controls the shape value, and has five possible shapes:

| Shape/Value  | Description                             |
| ------------ | --------------------------------------- |
| Ball         | A spherical shape.                      |
| Block        | A block shape.                          |
| Cylinder     | A cylinder shape.                       |
| Wedge        | A wedge shape with a slope on one side. |
| CornerWedge  | A wedge shape with slopes on two side.  |

---

#### _interrupted
: [bool]

{read-only}

If true, the hitbox has been interrupted.

---

#### _destroyTime
: [number]

{read-only}

The timestamp when the hitbox was [destroyed](#destroy).

---

#### _active
: [bool]

{read-only}

If true, the hitbox is currently active.

---

#### _isDestroyed
: [bool]

{read-only}

Whether or not the hitbox has been destroyed.

---

#### _hitboxFollowing
: [bool]

{read-only}

Whether or not the hitbox will be following [casterHurtbox](#casterhurtbox) with a relative CFrame.

---

#### _relativeCF
: [CFrame]

{read-only}

The relative CFrame with which the hitbox part will follow the caster hurtbox.

---

#### _maid
: [Maid]

{read-only}

General purpose maid for this class.

---

#### _tickTag
: [number]

{read-only}

The timestamp tag used for the hitbox's [replica](#_replica).

---

#### _figuresValidating
: [table]

{read-only}

List of figures (Models or BaseParts) that are currently being validated.

---

#### _replica
: [Replica]

{read-only}

Used to replicate states to the client hit detector.