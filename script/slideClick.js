const leftBtn = document.querySelector(".arrow_left");
const rightBtn = document.querySelector(".arrow_right");
const imgSlide = document.querySelector(".photo_slide");
const imgWidth = document.querySelector(".photo_slide img").clientWidth;

let count = 0;
let imgStartPoint;
let imgEndPoint;

leftBtn.addEventListener("click", clickLeft)
rightBtn.addEventListener("click", clickRight)

function clickRight(){
        if(count === 3) count = 0;
        imgStartPoint = -imgWidth * count;
        count++;
        imgEndPoint = -imgWidth * count;
        goAni();
}

function clickLeft(){
        if(count === 0) count = 3;
        imgStartPoint = -imgWidth * count;
        count--;
        imgEndPoint = -imgWidth * count;
        goAni();
    }

function goAni(){
    let ani = imgSlide.animate([
        {transform:"translateX(" + imgStartPoint + "px)"},
        {transform:"translateX(" + imgEndPoint + "px)"}
    ],1000);

     ani.addEventListener('finish',function(){
         imgSlide.style.transform = "translateX(" + imgEndPoint + "px)";
   
     });
}
