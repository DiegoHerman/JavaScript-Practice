const sect=document.querySelector("#cart");
const btn=document.querySelector("#btn");
const input=document.querySelector("#userInput");

btn.addEventListener("click",()=>{
  let list=document.createElement("li");
  list.textContent=input.value;
  if(input.value=="")
  {
    input.focus();
    return;
  }
  let listbtn=document.createElement("button");
  listbtn.textContent="Delete";
  listbtn.addEventListener("click",()=>{
    list.remove();
  });
  list.appendChild(listbtn);
  input.value="";
  input.focus();
  sect.appendChild(list);
});


