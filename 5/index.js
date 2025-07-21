let items = ["hell", "123"]

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "twt_todo_app"

function render() {
    itemsDiv.innerHTML = null
    for (const [i, item] of Object.entries(items)) {

        const container = document.createElement("div")
        container.style.margin = "10px"

        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.margin = "10px"
        text.textContent = item

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => remove(i)

        container.appendChild(text)
        container.appendChild(button)
        itemsDiv.appendChild(container)
    }
}
render()

function load() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems)
    render()
}

function save() {
    const stringedItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringedItems)
    render()
}

function add() {
    const val = input.value
    if (!val) {
        alert("You cannot add an empty event")
        return
    }
    items.push(val)
    render()
    input.value = ""
    save()
}

function remove(i) {
    items.splice(i, 1)
    render()
    save()
}

document.addEventListener("DOMContentLoaded", load())