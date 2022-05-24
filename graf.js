
const hubygraf={
    pocet: 3,
}
const riasygraf={
    pocet: 4,
}
const machograf={
    pocet: 2,
}
const papragraf={
    pocet: 1,
}
const nahograf={
    pocet: 5,
}
const monograf={
    pocet: 6,
}
const digraf={
    pocet: 7,
}
const specialgraf={
    pocet: 3,
}
const stlpce=[hubygraf,riasygraf,machograf,papragraf,nahograf,monograf,digraf,specialgraf];



const graf=document.getElementById("grafTable");
for(i=0;i<stlpce.length;i++){
    let g=Math.round((stlpce[i].pocet/7)*100)
    graf.innerHTML+=`
        <div class="cellTable">

        <div class="grafText"> <p>Machy</p> </div>

        <div  style="width: 100%;
            display: grid;
            grid-template-columns: ${g+"%"} auto;
            margin-right: 8px;">
            <div class="stlpec" style="background: rgb(${i*10+","+220+","+i*30});"></div>
            <div class="Prazdno"></div>
        </div>
    `
    
}


