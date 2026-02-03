const html=document.querySelector("html");
const circle2=document.querySelector(".circle2");
const svg=document.querySelector("svg");

html.addEventListener("click",(e)=>{
    const position=svg.getBoundingClientRect();
    const cx=e.clientX-position.left;
    const cy=e.clientY-position.top;
    circle2.setAttribute("cx",cx);
    circle2.setAttribute("cy",cy);
})