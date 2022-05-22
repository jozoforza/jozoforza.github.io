
cyklus=true
function m(ident){
    if(cyklus){
    document.getElementById(ident).style.opacity="100%";
    cyklus=false;
    }
    else{
    document.getElementById(ident).style.opacity="0%";
    cyklus=true;
    }
}