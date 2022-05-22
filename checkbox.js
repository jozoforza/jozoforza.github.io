
//0
const huby = {
  linky: ["huby/carvena_huba.jpg"],
  nazvy: ["cervena Huba"],
  stavy: [false]
};
//1
const riasy = {
  linky: ["riasy/cervena.jpg","riasy/hneda.jpg","riasy/modra.jpg"],
  nazvy: ["cervena Riasa","hneda Riasa","modra Riasa"],
  stavy: [false,false,false]
}
//2
const machy ={
  linky: ["machy/machzeleny.jpg"],
  nazvy: ["mach zeleny"],
  stavy: [false]
}
//3
const paprade ={
  linky: [],
  nazvy: [],
  stavy: []
}
//4
const nahe ={
  linky: [],
  nazvy: [],
  stavy: []
}
//7
const specialne ={
  linky: [],
  nazvy: [],
  stavy: []
}
//5
const monocot={
  linky: ['1-klicne/safran_bielokvety.jpg',
          '1-klicne/hyciant_vychodny.jpg'],
  nazvy: ['Šafran bielokvetý','Hyacint východný'],
  stavy: [false,false]
}
//6
const dicot={
  linky: ['2-klicne/bocianik_rozpukovity.jpg',
          '2-klicne/devatsil_biely.jpg',
          '2-klicne/filaka_vonava.jpg'],
  nazvy: ['Bocianik rozpukovitý','Deväťsil biely','Fialka voňavá'],
  stavy: [false,false,false]
}

objekty=[huby, riasy, machy, paprade, nahe, monocot, dicot, specialne];
const galeria= document.getElementById("galeria");
cyklus=true;

//VYPIS OBRAZKOV
for(i=0;i<objekty.length;i++){
    for(a=0;a<objekty[i].linky.length;a++){
      galeria.innerHTML+=`
      <div class="okraj" id="${objekty[i]+"okraj"}">
      <div id="${objekty[i].nazvy[a]}" class="galeryBox" style="background-image: url(${objekty[i].linky[a]});">
        <div class="imageText" id="${i+"text"+a}" onclick="textFunction(this.id)">
          <p class="unselectable" style="text-align: center; padding: 5px;">${objekty[i].nazvy[a]}</p>
        </div>
      </div>
      </div>
      `}
    }



      function hubyF(identification){
        //alert(typeof identification);
        let medziobjekt= parseInt(identification.slice(0, 1))
        //alert(medziobjekt+1)
        //alert(identification)
        if (document.getElementById(identification).checked == true){
          //alert("identification")
          for(i=0;i<objekty[medziobjekt].linky.length;i++)
          //document.getElementById(objekty[medziobjekt].nazvy[i]).style.display = "block";
          document.getElementById(objekty[medziobjekt]+"okraj").style.display = "block";
        }
        else{
          //alert("not checked")
          for(i=0;i<objekty[medziobjekt].linky.length;i++)
          //document.getElementById(objekty[medziobjekt].nazvy[i]).style.display = "none";
          document.getElementById(objekty[medziobjekt]+"okraj").style.display = "none";
        }
      }
      //<img class="galeryImage" src="${objekty[i].linky[a]}" >  
      //<div class="textO">${objekty[i].nazvy[a]}</div>
      function textFunction(identText){
        
        let objektText=objekty[parseInt(identText.slice(0, 1))];
        let stav=objektText.stavy[parseInt(identText.slice(identText.length-1, identText.length))]
        
        if(stav){
          document.getElementById(identText).style.opacity="0%";
          //document.getElementById(alert(objektTex.nazvy[parseInt(identText.slice(identText.length-1, identText.length))]).style.margin="1.5rem";
          objektText.stavy[parseInt(identText.slice(identText.length-1, identText.length))]=false;
          }
          else{
          document.getElementById(identText).style.opacity="100%";
          objektText.stavy[parseInt(identText.slice(identText.length-1, identText.length))]=true;
          //document.getElementById(objektTex.nazvy[parseInt(identText.slice(identText.length-1, identText.length))]).style.margin="0rem";
          }
      }
      



