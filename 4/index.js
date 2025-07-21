let secE = 0
let interval = null
const time = document.getElementById("time")

function padstart(val) {
    return String(val).padStart(2,0)
}
function settime() {
    let mins = Math.floor(secE/60)
    let secs = secE%60
    time.innerHTML = `${padstart(mins)}:${padstart(secs)}`
}

function timer() {
    secE++;
    settime()
}

function startc() {
    if (interval) stopc()
    interval = setInterval(timer, 1000);
}

function stopc(){
    clearInterval(interval)
}

function reset(){
    stopc()
    secE = 0
    settime()
}