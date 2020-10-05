
const featureUl = document.querySelector(".feature ul")
const featureLi = document.querySelectorAll(".feature li")
const featureY = document.querySelector(".feature").offsetTop;
const textureY = document.querySelector(".texture").offsetTop;
const textureText = document.querySelector("texture_box2 p");

document.addEventListener('scroll', handleScroll);

function handleScroll(){
    console.log(window.innerWidth,window.innerHeight)
         if(window.pageYOffset <= featureY + 600 && window.pageYOffset >= featureY - 600){ 
             for(let i = 0; i<featureLi.length; i++){
                featureLi[i].classList.add("showing")
             }
         }if(window.pageYOffset <= textureY + 600 && window.pageYOffset >= textureY - 600){
             console.log(textureText)
         }
    }
         
    
