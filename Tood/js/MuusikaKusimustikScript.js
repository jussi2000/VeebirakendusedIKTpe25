//checkbox'i valik
function MuusikuValik(){
    let VastusMuusikaKusimustik=document.getElementById("VastusMuusikaKusimustik");
    let Muusik1=document.getElementById("Muusik1");
    let Muusik2=document.getElementById("Muusik2");
    let Muusik3=document.getElementById("Muusik3");
    let Muusik4=document.getElementById("Muusik4");
    let Muusik5=document.getElementById("Muusik5");

    let Muusik="";
    if(Muusik1.checked){
        Muusik+=Muusik1.value + ', ';
    }
    if(Muusik2.checked){
        Muusik+=Muusik2.value + ', ';
    }
    if(Muusik3.checked){
        Muusik+=Muusik3.value + ', ';
    }
    if(Muusik4.checked){
        Muusik+=Muusik4.value + ', ';
    }
    if(Muusik5.checked){
        Muusik+=Muusik5.value + ', ';
    }
    if(Muusik==""){
        Muusik="Ei kuula spetsiifilisi muusikuid.";
    }
    VastusMuusikaKusimustik.innerHTML=Muusik;
    VastusMuusikaKusimustik.style.color="#d66824";

    return Muusik;
}
function KooliArvamus(){
    let KooliVastus=document.getElementById("KooliVastus");

    if(Muusik4.checked){
        Muusik+=Muusik4.value;
        }
        if(Muusik==""){
            Muusik="Ei kuula spetsiifilisi muusikuid.";
        }

    KooliVastus.innerHTML=kommentaar;
    KooliVastus.style.color="#d66824";

    return KooliVastus;
}