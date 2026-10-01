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
function klubiValik(){
    let vastus5=document.getElementById("vastus5");
    let klubi=document.getElementById("klubi");

    //1.rida loendis - see on 0.rida
    if(klubi.selectedIndex!==0){
        vastus5.innerHTML="Valitud spordiklubi on: " +klubi.value;
        vastus5.style.color="#d57000";
    }
    return klubi.value;
}
function kuupaevValik(){
    let vastus6=document.getElementById("vastus6");
    let kuupaev=document.getElementById("kuupaev");
    vastus6.style.color="#c14d00";

    vastus6.innerHTML="Viimane külastus oli: "+kuupaev.value;
    return kuupaev.value;
}
function rangevalik(){
    let vastus7=document.getElementById("vastus7");
    let kogemus=document.getElementById("kogemus");
    vastus7.style.color="#d55200";

    vastus7.innerHTML="Sa valisid "+kogemus.value+"tundi";

    return kogemus.value;
}

function tervitus(){
    let nimi=nimiLugemine();
    let sugu=suguValik();
    let spordiala=sportValik();
    let kogemus =rangevalik();
    let klubi=klubiValik();
    let kuupaev=kuupaevValik();

    vastus4.innerHTML=
        'Sisestatud nimi: '+nimi+'<br>'
        +'Valitud sugu: '+sugu+'<br>'
        +'Valitud spordialad: '+spordiala+'<br>'
        +'Treenimise tunnid: ' + kogemus + '<br>'
        +'Valitud klubi: '+klubi+'<br>'
        +'Valitud kuupaev: '+kuupaev;
    vastus4.style.backgroundColor="#ffed75";
}
function Puhasta(){
    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
    vastus7.innerHTML="";
}