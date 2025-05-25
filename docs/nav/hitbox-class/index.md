# HitboxClass

## Introduction
Hit detection is handled using the `ServerScriptService/HitboxClass` ModuleScript, this class features a lot of behaviour common in Battlegrounds games. For accurate hit detection, *HitboxClass*  will create a mock instance on the client via `StarterPlayerScripts/HitboxSeeker`, and then all sanity checks will be done by *HitboxClass* on server.

## Basic use case
```lua
-- Services
local ServerScriptService = game:GetService("ServerScriptService")
local Players = game:GetService("Players")

-- Imports
local Hitbox = require(ServerScriptService.HitboxClass)

-- Variables
local player = Players.SomePlayer
local character = player.Character or player.CharacterAdded:Wait()
local hurtbox = character:WaitForChild("Hurtbox") -- ServerScriptService/ServerSetup will give each character a Hurtbox

-- Create a Part for the Hitbox object, it's unnecessary to parent it as we only need the properties from the Part
local hitboxPart = Instance.new("Part")
hitboxPart.Size = Vector3.one * 10

-- Create a Hitbox object
local hitbox = Hitbox.new(hitboxPart, hurtbox)

-- Make the hitbox follow in front of the character by 5 studs
hitbox:follow(CFrame.new(0, 0, -5))

-- Begin detecting hits
hitbox:activate(function(victimCharacter : Model)
    local victimHum = victimCharacter.Humanoid
    victimHum:TakeDamage(10)
)

-- Stop detecting hits after 5 seconds
task.wait(5)
hitbox:deactivate()
hitbox:Destroy() -- Hitbox will also destroy hitboxPart
```

!!! warning

    Using `Humanoid:TakeDamage()` is not recommended. Use `ServerScriptService/ServerUtils.takeDamage()` instead.


??? question "Why is a Part necessary for the Hitbox?"

    This behaviour is maintained for compatibility with old code. In the future, it would be ideal to rewrite it so Part is not required.