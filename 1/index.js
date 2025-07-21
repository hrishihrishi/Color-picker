const body = document.getElementsByTagName("body")[0]

function setcolor(name) {
    body.style.backgroundColor = name
}

function random() {
    const r = Math.round(Math.random() * 255)
    const g = Math.round(Math.random() * 255)
    const b = Math.round(Math.random() * 255)

    const color = `rgb(${r}, ${g}, ${b})`
    setcolor(color)
}