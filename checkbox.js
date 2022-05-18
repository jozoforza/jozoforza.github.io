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

objekty=[huby, riasy, machy, paprade, nahe];


//LINKY
//const huby=["huby\\images (1).jpg"]

/*const riasy=["riasy\\cervena.jpg",
            "riasy\\hneda.jpg",
            "riasy\\modra.jpg"]*/

const monocot=['1-klicne\\Šafran bielokvetý.JPG',
               '1-klicne\\Hyacint východný.JPG']

const dicot=['2-klicne\\Bocianik rozpukovitý.JPG',
             '2-klicne\\Deväťsil biely.JPG',
             '2-klicne\\Fialka voňavá.JPG']

//NAZVY
//const hubyNazvy=["cervenaHuba"]
const riasyNazvy=["cervenaRiasa","hnedaRiasa","modraRiasa"]
const monocotNazvy=['Šafran bielokvetý','Hyacint východný']
const dicotNazvy=['Bocianik rozpukovitý','Deväťsil biely','Fialka voňavá']

//CHECKBOXY
//var checkBoxHuby = document.getElementById("hubyBox");
//var checkBoxRiasy = document.getElementById("riasyBox");
var checkboxMonocot = document.getElementById("monocotBox");
var checkboxDicot = document.getElementById("dicotBox");

const galeria= document.getElementById("galeria");

//VYPIS OBRAZKOV
/*for(i=0;i<objekty.length;i++){
    for(i=0;i<objekty[i].linky.length;i++){
      galeria.innerHTML+=`
      <div id="${objekty[i].nazvy[i]}" class="galeryBox" >
          <img class="galeryImage" src="${objekty[i].linky[i]}" >   
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

for(i=0;i<monocot.length;i++){
  galeria.innerHTML+=`
  <div id="${monocotNazvy[i]}" class="galeryBox" >
      <img class="galeryImage" src="${monocot[i]}" >   
  </div>
  `}

for(i=0;i<dicot.length;i++){
galeria.innerHTML+=`
<div id="${dicotNazvy[i]}" class="galeryBox" >
    <img class="galeryImage" src="${dicot[i]}" >   
</div>
`}

//CHECKBOX FUNKCIE
    function hubyFunction() {
      alert("pupek")
        // Get the checkbox
        // Get the output text
        // If the checkbox is checked, display the output text
        /*if (document.getElementById(idName).checked == true){
          //galeria.style.display = "grid";
          for(i=0;i<huby.linky.length;i++){
              document.getElementById(huby.nazvy[i]).style.display = "block";
          }
        } else {
          //galeria.style.display = "none";
          for(i=0;i<huby.linky.length;i++){
            document.getElementById(huby.nazvy[i]).style.display = "none";
        }
        }*/
      }

      function hubyF(identification){
        //alert(typeof identification);
        let medziobjekt= parseInt(identification.slice(0, 1))
        //alert(medziobjekt+1)
        //alert(identification)
        if (document.getElementById(identification).checked == true){
          alert("identification")
          for(i=0;i<objekty[medziobjekt].linky.length;i++)
          document.getElementById(objekty[medziobjekt].nazvy[i]).style.display = "block";
        }
        else{
          alert("not checked")
          for(i=0;i<objekty[medziobjekt].linky.length;i++)
          document.getElementById(objekty[medziobjekt].nazvy[i]).style.display = "none";
        }



      }
      
      

      function hubyFunction() {
        // Get the checkbox
        // Get the output text
        // If the checkbox is checked, display the output text
        if (checkBoxHuby.checked == true){
          //galeria.style.display = "grid";
          for(i=0;i<huby.length;i++){
              document.getElementById(hubyNazvy[i]).style.display = "block";
          }
        } else {
          //galeria.style.display = "none";
          for(i=0;i<huby.length;i++){
            document.getElementById(hubyNazvy[i]).style.display = "none";
        }
        }
      }

      function monocotFunction() {
        // Get the checkbox
        // Get the output text
        // If the checkbox is checked, display the output text
        if (checkboxMonocot.checked == true){
          //galeria.style.display = "grid";
          for(i=0;i<monocot.length;i++){
              document.getElementById(monocotNazvy[i]).style.display = "block";
          }
        } else {
          //galeria.style.display = "none";
          for(i=0;i<monocot.length;i++){
            document.getElementById(monocotNazvy[i]).style.display = "none";
        }
        }
      }

      function dicotFunction() {
        // Get the checkbox
        // Get the output text
        // If the checkbox is checked, display the output text
        if (checkboxDicot.checked == true){
          //galeria.style.display = "grid";
          for(i=0;i<dicot.length;i++){
              document.getElementById(dicotNazvy[i]).style.display = "block";
          }
        } else {
          //galeria.style.display = "none";
          for(i=0;i<dicot.length;i++){
            document.getElementById(dicotNazvy[i]).style.display = "none";
        }
        }
      }
      
      



