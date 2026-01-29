const grid=document.querySelector(".grid");

let choice=prompt("Select the dimension of the Grid");
const maxSquares=choice;
grid.style.display="flex";
grid.style.flexWrap="wrap";
grid.style.width=`${14*maxSquares}px`;

for(let i=0;i<(maxSquares*maxSquares);i++)
{
    const square=document.createElement("div");
    square.textcontent="";
    square.style.border="2px solid black";
    square.style.height="10px";
    square.style.width="10px";

    square.addEventListener("mousemove",()=>{
        square.style.backgroundColor="blue";
    });
    grid.appendChild(square);
}