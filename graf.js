
const hubygraf={
    pocet: 1,
    name: "huby/lyšajníky",
    graf: 0,
}
const riasygraf={
    pocet: 3,
    name: "riasy",
    graf: 0,
    
}
const machograf={
    pocet: 1,
    name: "machorasty",
    graf: 0,
}
const papragraf={
    pocet: 0,
    name: "papraďorasty",
    graf: 0,
}
const nahograf={
    pocet: 1,
    name: "nahosemenné",
    graf: 0,
}
const monograf={
    pocet: 2,
    name: "jednoklíčnolisté",
    graf: 0,
}
const digraf={
    pocet: 3,
    name: "dvojklíčnolisté",
    graf: 0,
}
const specialgraf={
    pocet: 0,
    name: "špecialne",
    graf: 0,
}
const stlpce=[hubygraf,riasygraf,machograf,papragraf,nahograf,monograf,digraf,specialgraf];



const graf=document.getElementById("grafTable");
for(i=0;i<stlpce.length;i++){
    let g=Math.round((stlpce[i].pocet/7)*100)
    graf.innerHTML+=`
        <div class="cellTable">

        <div class="grafText"> <p>${stlpce[i].name}(${stlpce[i].pocet})</p> </div>

        <div id="${stlpce[i].name}" style="width: 100%;
            display: grid;
            grid-template-columns: ${0+"%"} auto;
            margin-right: 8px;">
            <div class="stlpec" style="background: rgb(${i*10+","+220+","+i*30});"></div>
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

                let krok=(Math.round((stlpce[i].pocet/7)*100))/100
                document.getElementById(stlpce[i].name).style.gridTemplateColumns = krok+stlpce[i].graf+"% auto";
                stlpce[i].graf=stlpce[i].graf+krok
            
    }
    }
}

    
    id = setInterval(frame, stepTime);
    

 



