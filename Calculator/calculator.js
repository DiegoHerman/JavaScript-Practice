const body=document.querySelector("body");
const output=document.querySelector("#value");
const numbers=document.querySelector(".numbers");
const operations=document.querySelector(".operations");
const backspace=document.createElement("button");
const zero=document.createElement("button");
const dot=document.createElement("button");
const enter=document.createElement("button");
const operators=document.querySelector(".operators");
const clear=document.createElement("button");
const add=document.createElement("button");
const subtract=document.createElement("button");
const multiply=document.createElement("button");
const divide=document.createElement("button");

body.style.display="flex";
body.style.flexDirection="column";
body.style.justifyContent="center";
body.style.alignItems="center";
body.style.margin="100px";


output.style.width="272px";
output.style.height="60px";
output.style.backgroundColor="white";
output.style.border="2px solid black";
output.style.borderRadius="5px";
output.style.fontSize="2em";


operations.style.display="flex";
operations.style.border="2px solid black";
operations.style.borderRadius="5px";
operations.style.backgroundColor="grey";

let justGotResult=false;

numbers.style.display="flex";
numbers.style.flexWrap="wrap";
numbers.style.width=`${3*68}px`;
numbers.style.justifyContent="center";
numbers.style.alignItems="flex-end";
numbers.style.backgroundColor="grey";
for(let i=0;i<9;i++)
{
    const number=document.createElement("button");
    number.textContent=i+1;
    number.style.color="white";
    number.style.backgroundColor="black";
    number.style.height="60px";
    number.style.width="60px";
    number.style.border="2px solid black";
    number.style.borderRadius="10px";
    //number.style.boxShadow="100px";
    number.style.margin="4px";

    number.addEventListener("click",()=>{
        if(justGotResult===true)
        {
            justGotResult=false;
            output.textContent="";
        }
        output.textContent+=i+1;
    })
    numbers.appendChild(number);
}

backspace.textContent="delete";
backspace.style.height="60px";
backspace.style.width="60px";
backspace.style.border="2px solid black";
backspace.style.borderRadius="10px";
backspace.style.margin="4px";
backspace.addEventListener("click",()=>{
    output.textContent=output.textContent.slice(0,-1);
})
numbers.appendChild(backspace);

zero.textContent=0;
zero.style.height="60px";
zero.style.width="60px";
zero.style.border="2px solid black";
zero.style.borderRadius="10px";
zero.style.margin="4px";
zero.style.color="white";
zero.style.backgroundColor="black";
zero.addEventListener("click",()=>{
    if(justGotResult===true)
        {
            justGotResult=false;
            output.textContent="";
        }
    output.textContent+=0;
})
numbers.appendChild(zero);

dot.textContent=".";
dot.style.height="60px";
dot.style.width="60px";
dot.style.border="2px solid black";
dot.style.borderRadius="10px";
dot.style.margin="4px";
dot.style.color="white";
dot.style.backgroundColor="black";
dot.addEventListener("click",()=>{
    output.textContent+=".";
})
numbers.appendChild(dot);

operators.style.display="flex";
operators.style.flexWrap="wrap";
operators.style.height="272px";
operators.style.width="68px";
operators.style.backgroundColor="grey";

clear.textContent="AC";
clear.style.width="60px";
//add.style.height="20px";
clear.style.border="2px solid black";
clear.style.borderRadius="10px";
clear.style.margin="4px";
clear.style.backgroundColor="red";
clear.addEventListener("click",()=>{
    output.textContent="";
})
operators.appendChild(clear);

add.textContent="+";
add.style.width="60px";
//add.style.height="20px";
add.style.border="2px solid black";
add.style.borderRadius="10px";
add.style.margin="4px";
add.style.backgroundColor="yellow";
add.addEventListener("click",()=>{
    output.textContent+="+";
})
operators.appendChild(add);

multiply.textContent="X";
multiply.style.width="60px";
//add.style.height="20px";
multiply.style.border="2px solid black";
multiply.style.borderRadius="10px";
multiply.style.margin="4px";
multiply.style.backgroundColor="yellow";
multiply.addEventListener("click",()=>{
    output.textContent+="*";
})
operators.appendChild(multiply);

subtract.textContent="-";
subtract.style.width="60px";
//add.style.height="20px";
subtract.style.border="2px solid black";
subtract.style.borderRadius="10px";
subtract.style.margin="4px";
subtract.style.backgroundColor="yellow";
subtract.addEventListener("click",()=>{
    output.textContent+="-";
})
operators.appendChild(subtract);

divide.textContent="/";
divide.style.width="60px";
//add.style.height="20px";
divide.style.border="2px solid black";
divide.style.borderRadius="10px";
divide.style.margin="4px";
divide.style.backgroundColor="yellow";
divide.addEventListener("click",()=>{
    output.textContent+="/";
})
operators.appendChild(divide);

enter.textContent="enter";
//enter.style.height="60px";
enter.style.width="60px";
enter.style.border="2px solid black";
enter.style.borderRadius="10px";
enter.style.margin="4px";
enter.addEventListener("click",(e)=>{
    try{ 
        let result=eval(output.textContent);
        output.textContent=result;
        justGotResult=true;
    }catch(e){
        output.textContent="Cannot evaluate expression!";
    }
})
operators.appendChild(enter);


