
const hubygraf={
    pocet: 3,
    name: "huby/lyšajníky",
    graf: 0,
}
const riasygraf={
    pocet: 1,
    name: "riasy",
    graf: 0,
    
}
const machograf={
    pocet: 1,
    name: "machorasty",
    graf: 0,
}
const papragraf={
    pocet: 1,
    name: "papraďorasty",
    graf: 0,
}
const nahograf={
    pocet: 5,
    name: "nahosemenné",
    graf: 0,
}
const monograf={
    pocet: 10,
    name: "jednoklíčnolistové",
    graf: 0,
}
const digraf={
    pocet: 10,
    name: "dvojklíčnolistové",
    graf: 0,
}
const specialgraf={
    pocet: 5,
    name: "špeciálne",
    graf: 0,
}
const stlpce=[hubygraf,riasygraf,machograf,papragraf,nahograf,monograf,digraf,specialgraf];



const graf=document.getElementById("grafTable");
for(i=0;i<stlpce.length;i++){
    let g=Math.round((stlpce[i].pocet/10)*100)
    graf.innerHTML+=`
        <div class="cellTable">

        <div class="grafText"> <p>${stlpce[i].name}(${stlpce[i].pocet})</p> </div>

        <div id="${stlpce[i].name}" style="width: 100%;
            display: grid;
            grid-template-columns: ${0+"%"} auto;
            margin-right: 8px;">
            <div class="stlpec" style="background: linear-gradient(rgb(0, 214, 0), greenyellow);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.178),
    inset 0 5px 8px rgb(223, 255, 176),
    inset 0 0 3px green,
    inset 0 4px 8px rgb(239, 255, 216),
    inset 0 0 5px green,
    inset 0 -5px 8px rgb(145, 216, 39);"></div>
            <div class="Prazdno"></div>
        </div>
    `
    
}

//document.getElementById(stlpce[1].name).style.gridTemplateColumns = "50% auto"; 
/*for(i=0;i<stlpce.length;i++){
    let g=Math.round((stlpce[i].pocet/7)*100)

}*/
stepTime=10;
let krok=0;
dlzka = 0;

function frame() {
    if (dlzka == 100) {
    clearInterval(id);
    } else {
        dlzka++; 
        
        for(i=0;i<stlpce.length;i++){

                let krok=(Math.round((stlpce[i].pocet/10)*100))/100
                document.getElementById(stlpce[i].name).style.gridTemplateColumns = krok+stlpce[i].graf+"% auto";
                stlpce[i].graf=stlpce[i].graf+krok
            
    }
    }
}

    
    id = setInterval(frame, stepTime);
    

 



