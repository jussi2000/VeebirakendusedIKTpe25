//tekstkastist lugemine
function nimiLugemine() {
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");
        //innerHTML - dünaamilised genereerib teksti html'ina
    vastus.innerHTML="Tere hommikust, "+nimi.value;
    vastus.style.color="#0B3D91";

    return nimi.value;
}
//raadionuppude valikud
function suguValik(){
    let vastus2=document.getElementById("vastus2");
    let naine=document.getElementById("naine");
    let mees=document.getElementById("mees");
    let muu=document.getElementById("muu");

    //radio valikud
    let sugu="";
    if(naine.checked){
         sugu=naine.value;
    }else if (mees.checked){
         sugu=mees.value;
    }else if (muu.checked){
         sugu=muu.value;
        } else {
         sugu="Palun vali sugu";
        }
    vastus2.innerHTML="Valitud sugu on: "+sugu;
    vastus2.style.color="#007F8F";

    return sugu;
}
//checkbox'i valik
function sportValik(){
    let vastus3=document.getElementById("vastus3");
    let jooksmine=document.getElementById("jooksmine");
    let ujumine=document.getElementById("ujumine");
    let uisutamine=document.getElementById("uisutamine");
    let suusatamine=document.getElementById("suusatamine");
    let poks=document.getElementById("poks");

    let sport="";
    if(jooksmine.checked){
        sport+=jooksmine.value + ', ';
    }
    if(ujumine.checked){
        sport+=ujumine.value + ', ';
    }
    if(uisutamine.checked){
        sport+=uisutamine.value + ', ';
    }
    if(suusatamine.checked){
        sport+=suusatamine.value + ', ';
    }
    if(poks.checked){
        sport+=poks.value + ', ';
    }
    if(sport==""){
        sport="Sa ei tee sporti";
    }
    vastus3.innerHTML=sport;
    vastus3.style.color="#58a889";

    return sport;
}
function tervitus(){
    let nimi=nimiLugemine();
    let sugu=suguValik();
    let spordiala=sportValik();

    vastus4.innerHTML=
        'Sisestatud nimi on '+nimi+'<br>'
        +'Valitud sugu on '+sugu+'<br>'
    +'Valitud spordiala on '+spordiala;
    vastus4.style.backgroundColor="#ffed75";
}
function Puhasta(){
    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
}