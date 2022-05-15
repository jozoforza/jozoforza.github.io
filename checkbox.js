//LINKY
const huby=["C:\\Users\\smaci\\OneDrive\\Desktop\\program\\webpage_flowers\\huby\\images (1).jpg"]

const riasy=["C:\\Users\\smaci\\OneDrive\\Desktop\\program\\webpage_flowers\\riasy\\cervena.jpg",
            "C:\\Users\\smaci\\OneDrive\\Desktop\\program\\webpage_flowers\\riasy\\hneda.jpg",
            "C:\\Users\\smaci\\OneDrive\\Desktop\\program\\webpage_flowers\\riasy\\modra.jpg"]

const monocot=['C:\\Users\\smaci\\OneDrive\\Desktop\\program\\webpage_flowers\\1-klicne\\Šafran bielokvetý.JPG',
               'C:\\Users\\smaci\\OneDrive\\Desktop\\program\\webpage_flowers\\1-klicne\\Hyacint východný.JPG']

const dicot=['C:\\Users\\smaci\\OneDrive\\Desktop\\program\\webpage_flowers\\2-klicne\\Bocianik rozpukovitý.JPG',
             'C:\\Users\\smaci\\OneDrive\\Desktop\\program\\webpage_flowers\\2-klicne\\Deväťsil biely.JPG',
             'C:\\Users\\smaci\\OneDrive\\Desktop\\program\\webpage_flowers\\2-klicne\\Fialka voňavá.JPG']

//NAZVY
const hubyNazvy=["cervenaHuba"]
const riasyNazvy=["cervenaRiasa","hnedaRiasa","modraRiasa"]
const monocotNazvy=['Šafran bielokvetý','Hyacint východný']
const dicotNazvy=['Bocianik rozpukovitý','Deväťsil biely','Fialka voňavá']

//CHECKBOXY
var checkBoxHuby = document.getElementById("hubyBox");
var checkBoxRiasy = document.getElementById("riasyBox");
var checkboxMonocot = document.getElementById("monocotBox");
var checkboxDicot = document.getElementById("dicotBox");

const galeria= document.getElementById("galeria");

//VYPIS OBRAZKOV
for(i=0;i<huby.length;i++){
galeria.innerHTML+=`
<div id="${hubyNazvy[i]}" class="galeryBox" >
    <img class="galeryImage" src="${huby[i]}" >   
</div>
`}

for(i=0;i<riasy.length;i++){
galeria.innerHTML+=`
<div id="${riasyNazvy[i]}" class="galeryBox" >
    <img class="galeryImage" src="${riasy[i]}" >   
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

      function riasyFunction() {
        // Get the checkbox
        // Get the output text
        // If the checkbox is checked, display the output text
        if (checkBoxRiasy.checked == true){
          //galeria.style.display = "grid";
          for(i=0;i<riasy.length;i++){
              document.getElementById(riasyNazvy[i]).style.display = "block";
          }
        } else {
          //galeria.style.display = "none";
          for(i=0;i<riasy.length;i++){
            document.getElementById(riasyNazvy[i]).style.display = "none";
        }
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
      
      



