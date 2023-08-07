let mainContianer = document.querySelector(".option__parent--container")
let option__table = document.querySelectorAll(".option_table")
let input = document.querySelectorAll("input")
let option_box = document.querySelectorAll(".main__option--outer")


option__table.forEach(Option=> Option.classList.add("hidden"))

mainContianer.addEventListener("click", (e)=>{
    let curr = e.target.id

    let newSlice = curr.slice(-1)
option__table.forEach(Option=> Option.classList.remove("active_table"))

    option_box.forEach(box=> box.classList.remove("active"))
    option__table[newSlice-1].classList.toggle("active_table")
     
    option_box[newSlice-1].classList.add("active")    

    
    
        
    
})