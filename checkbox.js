//0
const huby = {
  linky: ["huby/carvena_huba.jpg"],
  nazvy: ["cervenaHuba"]
};
//1
const riasy = {
  linky: ["riasy/cervena.jpg","riasy/hneda.jpg","riasy/modra.jpg"],
  nazvy: ["cervenaRiasa","hnedaRiasa","modraRiasa"]
}
//2
const machy ={
  linky: ["machy/machzeleny.jpg"],
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
  linky: ['1-klicne/safran_bielokvety.jpg',
          '1-klicne/hyciant_vychodny.jpg'],
  nazvy: ['Šafran bielokvetý','Hyacint východný']
}
//6
const dicot={
  linky: ['2-klicne/bocianik_rozpukovity.jpg',
          '2-klicne/devatsil_biely.jpg',
          '2-klicne/filaka_vonava.jpg'],
  nazvy: ['Bocianik rozpukovitý','Deväťsil biely','Fialka voňavá']
}

objekty=[huby, riasy, machy, paprade, nahe, monocot, dicot, specialne];
const galeria= document.getElementById("galeria");

//VYPIS OBRAZKOV
for(i=0;i<objekty.length;i++){
    for(a=0;a<objekty[i].linky.length;a++){
      galeria.innerHTML+=`
      <div id="${objekty[i].nazvy[a]}" class="galeryBox" style="background-image: url(${objekty[i].linky[a]});">
      <div class="textO">${objekty[i].nazvy[a]}</div>
          
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
          document.getElementById(objekty[medziobjekt].nazvy[i]).style.display = "block";
        }
        else{
          //alert("not checked")
          for(i=0;i<objekty[medziobjekt].linky.length;i++)
          document.getElementById(objekty[medziobjekt].nazvy[i]).style.display = "none";
        }
      }
      //<img class="galeryImage" src="${objekty[i].linky[a]}" >  
      



