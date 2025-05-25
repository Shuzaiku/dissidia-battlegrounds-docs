# PathInterpreter

## Introduction
PathInterpreter is a class made to return an any value following any given string `path`. The main motive behind creating this class is to automate the reparenting of any given Instance.

## How paths work
PathInterpreter will split the path into segments using `.` as a separator. Then it will go through each segment in order until it reaches the end.

Within paths, variables may be written as `{ <variableName> }`.

!!! example

    ```lua
    local path = "{ character }.DashClient.DashMovements"
    ```

## How it's used here
```lua
-- Load playable character (animations, accessories, skillset, other defaults...)
local pathInterpreter = PathInterpreter.new(character)
local charFolder = ReplicatedStorage.Roles[skillsetName]
local CharacterModule = require(charFolder.CharacterModule)

local function loadCharFolderChild(child: Instance)
    -- Parents child and/or descendants to the child's Path attribute
    
    local parentPath = child:GetAttribute("Path")
    if parentPath then
        local newChild = child:Clone()
        local parentInstance = pathInterpreter:getInstance(parentPath)
        newChild.Parent = parentInstance
    end
    
    if child:GetAttribute("ParentChildren") then
        for _, descendant in child:GetChildren() do
            loadCharFolderChild(descendant)
        end
    end
end

for _, child in charFolder:GetChildren() do
    loadCharFolderChild(child)
end
```