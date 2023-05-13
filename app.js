const counter = document.querySelector('#counter')
const btns = document.querySelectorAll('.btns button')
let count = 0


btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
       let value = e.target
       if(value.textContent === "Increment +") {
          count++
        } else if(value.textContent === "Decrement -") {
            count--
            counter.style.color = "red"
        } else {
            count = 0
        }

        if(count > 0) {
          counter.style.color = "green"
        } else if(count < 0) {
          counter.style.color = "red"
        } else {
          counter.style.color = "black"
        }

        counter.textContent = count
    })
})