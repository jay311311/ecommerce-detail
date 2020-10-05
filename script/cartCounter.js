const buttons = document.querySelector(".product_size_list")
const button = document.querySelectorAll(".product_size_list button")
const payment = document.querySelector(".payment span")
const paymentBtn = document.querySelector(".buttons")
buttons.addEventListener("click", handleClick)
paymentBtn.addEventListener("click", resetClick)
let num = null

function handleClick(event){
    event.target.classList.add("color")
   if(num === 0 ){
}
   num = num + 65450;
   payment.innerHTML=num.toLocaleString();   
}

function resetClick(){
    button.forEach(btn=>btn.classList.remove("color"))

    num=0;
    payment.innerHTML=num
}
