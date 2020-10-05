const navigatormenu = document.querySelector(".navigator_menu");
const secondheader = document.querySelector(".secondheader");


document.addEventListener("wheel", handlewheel)



function handlewheel(event){
    if(event.deltaY > 0){
        console.log("ss")//내리는거
        navigatormenu.classList.add("h_fixed");
    }else{
        navigatormenu.classList.remove("h_fixed");
    }
}






