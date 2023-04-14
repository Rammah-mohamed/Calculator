let inputs = document.querySelectorAll(".btn");
let display = document.querySelector("[name = 'display']")
let ac = document.querySelector(".ac")
let del = document.querySelector(".del")
let equal = document.querySelector(".equal")

inputs.forEach(el => {
  el.addEventListener("click", e => {
    display.value += e.target.value
  })
})

ac.onclick = () => {
  display.value = ""
}

del.onclick = () => {
  display.value = display.value.toString().slice(0, -1)
}

equal.onclick = () => {
  display.value = eval(display.value)
}