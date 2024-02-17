const heart = document.getElementById("heart");
const barraLateral = document.querySelector(".barra-lateral");
const span = document.querySelector("span");

heart.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral")
    span.classList.toggle("oculto");
})