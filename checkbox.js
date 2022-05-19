//0
const huby = {
  linky: ["huby\\images (1).jpg"],
  nazvy: ["cervenaHuba"]
};
//1
const riasy = {
  linky: ["riasy\\cervena.jpg","riasy\\hneda.jpg","riasy\\modra.jpg"],
  nazvy: ["cervenaRiasa","hnedaRiasa","modraRiasa"]
}
//2
const machy ={
  linky: ["machy\\machzeleny.jpg"],
  nazvy: ["machzeleny"]
}
//3
const paprade ={
  linky: [],
  nazvy: []
}
//4
const nahe ={
  linky: [],
  nazvy: []
}
//7
const specialne ={
  linky: [],
  nazvy: []
}
//5
const monocot={
  linky: ['1-klicne\\Šafran bielokvetý.JPG',
          '1-klicne\\Hyacint východný.JPG'],
  nazvy: ['Šafran bielokvetý','Hyacint východný']
}
//6
const dicot={
  linky: ['2-klicne\\Bocianik rozpukovitý.JPG',
          '2-klicne\\Deväťsil biely.JPG',
          '2-klicne\\Fialka voňavá.JPG'],
  nazvy: ['Bocianik rozpukovitý','Deväťsil biely','Fialka voňavá']
}

objekty=[huby, riasy, machy, paprade, nahe, monocot, dicot, specialne];
const galeria= document.getElementById("galeria");

//VYPIS OBRAZKOV
/*for(i=0;i<8;i++){
    let objekt=objekty[i]
    for(a=0;a<objekt.linky.length;a++){
      galeria.innerHTML+=`
      <div id="${objekt.nazvy[i]}" class="galeryBox" >
          <img class="galeryImage" src="${objekt.linky[i]}" >   
      </div>
      `}
    }*/


for(i=0;i<huby.linky.length;i++){
galeria.innerHTML+=`
<div id="${huby.nazvy[i]}" class="galeryBox" >
    <img class="galeryImage" src="${huby.linky[i]}" >   
</div>
`}

for(i=0;i<riasy.linky.length;i++){
galeria.innerHTML+=`
<div id="${riasy.nazvy[i]}" class="galeryBox" >
    <img class="galeryImage" src="${riasy.linky[i]}" >   
</div>
`}

for(i=0;i<machy.linky.length;i++){
  galeria.innerHTML+=`
  <div id="${machy.nazvy[i]}" class="galeryBox" >
      <img class="galeryImage" src="${machy.linky[i]}" >   
  </div>
  `}

for(i=0;i<monocot.linky.length;i++){
  galeria.innerHTML+=`
  <div id="${monocot.nazvy[i]}" class="galeryBox" >
      <img class="galeryImage" src="${monocot.linky[i]}" >   
  </div>
  `}

for(i=0;i<dicot.linky.length;i++){
galeria.innerHTML+=`
<div id="${dicot.nazvy[i]}" class="galeryBox" >
    <img class="galeryImage" src="${dicot.linky[i]}" >   
</div>
`}


      function hubyF(identification){
        //alert(typeof identification);
        let medziobjekt= parseInt(identification.slice(0, 1))
        //alert(medziobjekt+1)
        //alert(identification)
        if (document.getElementById(identification).checked == true){
          //alert("identification")
          for(i=0;i<objekty[medziobjekt].linky.length;i++)
          document.getElementById(objekty[medziobjekt].nazvy[i]).style.display = "block";
        }
        else{
          //alert("not checked")
          for(i=0;i<objekty[medziobjekt].linky.length;i++)
          document.getElementById(objekty[medziobjekt].nazvy[i]).style.display = "none";
        }
      }
      
      



