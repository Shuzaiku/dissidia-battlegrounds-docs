const TAG_STYLE =
`
.tag {
    color: #ffffff;
    line-height: .8rem;
    padding: 5px;
    margin-left: 7px !important;
    margin: 0 !important; 
    background-clip: padding-box;
    border-radius: 3px;
    display: inline-block;
    font-size: .7rem;
    font-family: "Roboto";
    font-weight: normal;
}
.read-only {
    background-color: rgb(42, 157, 143);
}
h4 {
    display: inline;
}
`

var replaceText = [
    ["{read-only}", '<p class="tag read-only">read-only</p>']
]

function replaceTagElement(element) {
    for (var i = 0; i < replaceText.length; i++) {
        var from = replaceText[i][0]
        var to = replaceText[i][1]

        if (element.innerHTML && element.innerHTML.includes(from)) {
            element.innerHTML = element.innerHTML.replace(from, to)
            element.style.display = "inline"
        }
    }
}

const TAG_STYLE_ELEMENT = document.createElement("style")
TAG_STYLE_ELEMENT.innerHTML = TAG_STYLE
document.head.appendChild(TAG_STYLE_ELEMENT)

document.addEventListener("DOMContentLoaded", (event) => {
    var elements = document.body.getElementsByTagName("p")
    for (var i = 0; i < elements.length; i++) {
        replaceTagElement(elements.item(i))
    }
})