# Introduction

## About
This site documents the structure and tools of the Roblox video game [Dissidia Battlegrounds](https://www.roblox.com/games/15352179962/Dissidia-Battlegrounds). The source code for this game is solely hosted in Roblox Studio.

## Basic project layout

    ReplicatedStorage/
        AdminEvents             # A folder storing RemoteEvents used to execute admin commands.
        CoreEvents              # A folder containing events and functions used for core gameplay.
        GuiEvents               # A folder containing events only relevant to GUI.
        HitboxRemotes           # A folder that stores RemoteEvents created by HitboxClass.*
        Modules                 # A folder to store all modules used by both server and client, if the module is a single function, store it in Utility instead.
        Moon2CameraFiles        # A folder storing MoonAnimation2 camera files.
        Roles                   # A folder storing all information relevant to movesets.
        Settings                # A folder storing events and functions used for a user's settings.
        SkillBindableFunctions  # A folder storing BindableFunctions for player input.*
        SkillRemoteFunctions    # A folder containing RemoteFunctions for each individual skill.
        Utility                 # A folder storing all utility modules, commonly used functions.
        VFX                     # A folder storing all the VFX used in the game.
    ServerScriptService/
        SkillScripts            # A folder where all server-side skill code is stored.
        ServerUtils             # A module with commonly used methods by the server.
    StarterGui/
        Freecam                 # The ScreenGui containing Roblox's default freecam script, made available to all players.*
        PersistentGui           # A ScreenGui that does not reset on spawn.
        PersistentGuiNoInset    # A ScreenGui that does not reset on spawn and ignores GUI inset.
        ScreenGui               # A default ScreenGui.
        ScreenGuiNoInset        # A default ScreenGui that ignores GUI inset.

\*  -   Do not change change this Instance.

## Place links
- [Main](https://www.roblox.com/games/15352179962/Dissidia-Battlegrounds)
- [Ranked Lobby](https://www.roblox.com/games/17232656581/Ranked-Lobby)
- [The Struggle](https://www.roblox.com/games/17277500706/The-Struggle)
- [Testing](https://www.roblox.com/games/17383720881/Testing)