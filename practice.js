const html=document.querySelector("html");
const monthSelect=document.querySelector("#calendar");
const themeSelect=document.querySelector("#theme");
const list=document.querySelector("ul");
const title=document.querySelector("h1");


themeSelect.addEventListener("change",()=>{
    const choice=themeSelect.value;
    Theme(choice);
})

function ThemeUpdater(bgColor,txtColor){
    html.style.backgroundColor=bgColor;
    html.style.color=txtColor; 
}

function Theme(theme)
{
    switch(theme){
        case "light": ThemeUpdater("white","black");
        break;
        case "dark": ThemeUpdater("black","white");
        break;
        default: ThemeUpdater("white","black");
        break;
    }
}


monthSelect.addEventListener("change",()=>{
    const choice=monthSelect.value;
    Calendar(choice);
})

function Calendar(month)
{
    let days=31;
    if(month==="February")
    {
        days=28;
    }
    else if (month==="September"||month==="April"||month==="June"||month==="November")
    {
        days=30;
    }

    list.textContent="";
    title.textContent=month;
    for(let i=1;i<=days;i++)
    {
        listItem=document.createElement("li");
        listItem.textContent=i;
        list.appendChild(listItem);
    }
}

Theme("light");
Calendar("January");