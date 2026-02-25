const body=document.querySelector("body");
const par1=document.createElement("p");
const par2=document.createElement("p");

async function displayCatInfo(){
    let cats;
    try{
    const response=await fetch("https://raw.githubusercontent.com/mdn/learning-area/refs/heads/main/javascript/oojs/tasks/json/sample.json");
    if(!response.ok){
        throw new Error(`https error: ${response.status}`);
    }
    cats=await response.json();
    console.log(cats[0].name);
    }catch(error){
        console.error(`fetch request failed: ${error}`);
    }

    const catLength=cats.length;
    par1.textContent="The mothers names are ";
    cats.forEach((cat)=>{
        console.log(cat.name);
        par1.textContent+=cat.name;
        if(cat==cats[catLength-2]){
            par1.textContent+=" and ";
            return;
        }
        if(cat==cats[catLength-1]){
            return;
        }
        par1.textContent+=",";       
    });
    body.appendChild(par1);

    let maleKittens=0;
    let femaleKittens=0;
    let totalKittens=0;
    par2.textContent="The total number of kittens are"
    cats.forEach((cat)=>{
        cat.kittens.forEach((kitten)=>{
            kitten.gender==="m"?maleKittens++:femaleKittens++;
        })
    });
    totalKittens=maleKittens+femaleKittens;
    par2.textContent=`The total number of kittens is ${totalKittens}, ${maleKittens} male kittens and ${femaleKittens} female kittens`;
    body.appendChild(par2);
}

displayCatInfo();
