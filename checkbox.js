
//0
const huby = {
  linky: ["huby/cervenahuba.jpg"],
  nazvy: ["cervena Huba"],
  stavy: [false],
  dates: ["7.4."],
  places: ["Sandberg"],
  type:["huby"]

};
//1
const riasy = {
  linky: ["riasy/cervena.jpg","riasy/hneda.jpg","riasy/modra.jpg"],
  nazvy: ["cervena Riasa","hneda Riasa","zelena Riasa"],
  stavy: [false,false,false],
  dates: ["8.4.","20.4.","13.4."],
  places: ["Sag","SAg","sag"],
  type:["riasovite","riasovite","riasovite"]
}
//2
const machy ={
  linky: ["machy/lomikamenmachovity.jpg"],
  nazvy: ["Lomikameň machovitý"],
  stavy: [false],
  dates: ["6.3"],
  places: ["Karlova Ves"],
  type:["machorasty"]
}
//3
const paprade ={
  linky: ['papradorasty/papradsamcia.jpg'],
  nazvy: ['Papraď samčia'],
  stavy: [false],
  dates: ['30.5.'],
  places: ['Železná studnička'],
  type:['papraďorasty']
}
//4
const nahe ={
  linky: ["nahosemenne/smrekovecopadavy.jpg",'nahosemenne/smrek.jpg','nahosemenne/borovica.jpg'],
  nazvy: ["Smrekovec opadavý",'Smrek obyčajný','Borovica lesná'],
  stavy: [false,false,false],
  dates: ["27.5.",'27.5','30.5.'],
  places: ["Vysoké Tatry","Vysoké Tatry",'Železná studnička'],
  type:["Borovicorasty","Borovicorasty","Borovicorasty"]
}
//7
const specialne ={
  linky: [],
  nazvy: [],
  stavy: [],
  dates: [],
  places: [],
  type:[]
}
//5
const monocot={
  linky: ['1-klicne/modricanebadana.jpg',
          '1-klicne/hyciant_vychodny.jpg',
        '1-klicne/ovsikobycajny.jpg',
      '1-klicne/jacmenmysi.jpg'],
  nazvy: ['Modrica nebadaná',
  'Hyacint východný','Ovsík obyčajný','Jačmeň myší'],
  stavy: [false,false,false,false],
  dates: ["29.3","29.3",'6.3.','6.3.'],
  places: ["Sandberg","Sandberg", 'Karlova Ves','Karlova Ves'],
  type:["asparágovité","asparágovité",'Lipnicovité','Lipnicovité']

}
//6
const dicot={
  linky: ['2-klicne/bocianik_rozpukovity.jpg',
          '2-klicne/devatsil_biely.jpg',
          '2-klicne/filaka_vonava.jpg',
        '2-klicne/hlavacikjarny.jpg',
        '2-klicne/hluchavkaobjimava.jpg',
      '2-klicne/hluchavkapurpurova.jpg',
    '2-klicne/kapsickapastierska.jpg',
  '2-klicne/poniklecvelkokvety.jpg',
'2-klicne/kosatecnizky.jpg',
'2-klicne/kosatecibersky.jpg'],


  nazvy: ['Bocianik rozpukovitý','Deväťsil biely','Fialka voňavá','hlavacik jarny','Hluchavka objímavá','Hluchavka purpurová','Kapsička pastierska','Poniklec veľkokvetý','Kosatec nízky','Kosatec iberský'],
  stavy: [false,false,false,false,false,false,false,false,false,false],
  dates: ["29.3","17.4.","29.3","29.3","17.4.","17.4.","17.4.","17.4.","17.4.","17.4."],
  places: ["Sandberg","Prosiecka dolina","Sandberg","Sandberg","Sandberg","Sandberg","Sandberg","Sandberg","Sandberg","Sandberg"],
  type:["pakostovité","astrovité","fialkovité","iskerníkovité",'hluchavkovité','hluchavkovité','kapustovité','iskerníkovité','kosatcovité','kosatcovité']

}

objekty=[huby, riasy, machy, paprade, nahe, monocot, dicot, specialne];
const galeria= document.getElementById("galeria");
cyklus=true;

//VYPIS OBRAZKOV
for(i=0;i<objekty.length;i++){
    for(a=0;a<objekty[i].linky.length;a++){
      galeria.innerHTML+=`
      <div class="okraj" id="${objekty[i].nazvy[a]+"_okraj"}">
      <div id="${objekty[i].nazvy[a]}" class="galeryBox" style="background-image: url(${objekty[i].linky[a]});">
        <div class="imageText" id="${i+"text"+a}" onclick="textFunction(this.id)">
          <p class="nazov_image_textu" class="unselectable" style="text-align: center; padding: 0px;margin: 5px;">${objekty[i].nazvy[a]}</p>
          <p class="druh_image_textu" class="unselectable" style="text-align: center; padding: 0px;margin: 0px;">${objekty[i].type[a]}</p>
          <div style="margin:20px">
            <p class="unselectable" style="text-align: left;margin: 0px; ">miesto: ${objekty[i].places[a]}</p>
            <p class="unselectable" style="text-align: left;margin: 0px; ">dátum: ${objekty[i].dates[a]}</p>
          </div>
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
          document.getElementById(objekty[medziobjekt].nazvy[i]+"_okraj").style.display = "block";
        }
        else{
          //alert("not checked")
          for(i=0;i<objekty[medziobjekt].linky.length;i++)
          //document.getElementById(objekty[medziobjekt].nazvy[i]).style.display = "none";
          document.getElementById(objekty[medziobjekt].nazvy[i]+"_okraj").style.display = "none";
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
      



