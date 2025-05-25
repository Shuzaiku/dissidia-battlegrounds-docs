// Create a new style element
const ROBLOX_CLASS_STYLE =
`
.roblox-class-name {
    line-height: .8rem;
    padding: 5px;
    padding-bottom: 1px;
    margin-left: 7px !important;
    margin: 0 !important; 
    background-clip: padding-box;
    display: inline-block;
    font-size: .7rem;
    font-family: "Roboto";
    font-weight: normal;
    border-bottom: 1px dashed;
    text-decoration: none;
}
`
const ROBLOX_CLASS_STYLE_ELEMENT = document.createElement("style")
ROBLOX_CLASS_STYLE_ELEMENT.innerHTML = ROBLOX_CLASS_STYLE
document.head.appendChild(ROBLOX_CLASS_STYLE_ELEMENT)

// Create a class containing useful information for the new element
class ClassName {
    constructor(name, type, customLink=null) {
        this.name = name
        this.type = type

        if (customLink) {
            this.link = customLink
        } else {
            this.link = `https://create.roblox.com/docs/reference/engine/${type}/${name}`
        }
    }
}

// Create a list of ClassNames
const CLASS_NAMES = [
    // Classes
    new ClassName("BasePart", "classes"),
    new ClassName("Model", "classes"),
    new ClassName("DataModel", "classes"),
    // DataTypes
    new ClassName("CFrame", "datatypes"),
    new ClassName("Color3", "datatypes"),
    new ClassName("Instance", "datatypes"),
    new ClassName("OverlapParams", "datatypes"),
    new ClassName("RaycastParams", "datatypes"),
    new ClassName("Vector3", "datatypes"),
    // Libraries
    new ClassName("table", "libraries"),
    // Enums
    new ClassName("PartType", "enums"),
    // Luau types
    new ClassName("bool", "booleans", "https://create.roblox.com/docs/luau/booleans"),
    new ClassName("number", "numbers", "https://create.roblox.com/docs/luau/numbers"),
    new ClassName("string", "strings", "https://create.roblox.com/docs/luau/strings"),
    // Customs
    new ClassName("Maid", "maid", "https://quenty.github.io/NevermoreEngine/api/Maid/"),
    new ClassName("Signal", "signal", "https://sleitnick.github.io/RbxUtil/api/Signal/"),
    new ClassName("Replica", "replica", "https://madstudioroblox.github.io/ReplicaService/api/")
]

// Replace the given element with a new element linking to its Roblox documentations
function replaceClassNameElement(element) {
    for (var i = 0; i < CLASS_NAMES.length; i++) {
        const obj = CLASS_NAMES[i]
        const text = `[${obj.name}]`

        if (element.innerHTML && element.innerHTML.includes(text)) {
            const newElement = `<p class="roblox-class-name"><a href="${obj.link}">${obj.name}</a></p>`
            element.innerHTML = element.innerHTML.replace(text, newElement)
            element.style.display = "inline"
        }
    }
}

// Check for ClassNames when the window loads
document.addEventListener("DOMContentLoaded", (event) => {
    var elements = document.body.getElementsByTagName("p")
    for (var i = 0; i < elements.length; i++) {
        replaceClassNameElement(elements.item(i))
    }
})