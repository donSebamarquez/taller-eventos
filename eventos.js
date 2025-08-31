let div = document.querySelector(".div")
let btn = document.querySelector(".btn")
div.addEventListener("click",function(){
    alert("Hola! Soy el div");
    
})

btn.addEventListener("click", ()=>{
    alert("Hola! Soy el boton");
    event.stopPropagation();
})