import {startClock} from "./widgets/clock.js"
import {setupSearch} from "./widgets/search.js"

document.querySelectorAll(".panel").forEach(panel=>{

const x = Number(panel.dataset.x || 60)
const y = Number(panel.dataset.y || 60)
const width = Number(panel.dataset.width || 420)
const height = Number(panel.dataset.height || 180)

panel.style.left = x + "px"
panel.style.top = y + "px"
panel.style.width = width + "px"
panel.style.height = height + "px"

})

startClock()

setupSearch()