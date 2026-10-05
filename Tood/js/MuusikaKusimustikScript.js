function MuusikuValik(viimaneValik) {
    let VastusMuusikaKusimustik = document.getElementById("VastusMuusikaKusimustik");
    let pilt = document.getElementById("piltvastus1");

    let Muusik1 = document.getElementById("Muusik1");
    let Muusik2 = document.getElementById("Muusik2");
    let Muusik3 = document.getElementById("Muusik3");
    let Muusik4 = document.getElementById("Muusik4");
    let Muusik5 = document.getElementById("Muusik5");

    let muusikud = "";
    if (Muusik1.checked) { muusikud += Muusik1.value + ', '; }
    if (Muusik2.checked) { muusikud += Muusik2.value + ', '; }
    if (Muusik3.checked) { muusikud += Muusik3.value + ', '; }
    if (Muusik4.checked) { muusikud += Muusik4.value + ', '; }
    if (Muusik5.checked) { muusikud += Muusik5.value + ', '; }

    if (muusikud == "") {
        VastusMuusikaKusimustik.innerHTML = "Sinu valitud muusikud: ";
        pilt.style.display = "none";
    } else {
        muusikud = muusikud.slice(0, -2);
        VastusMuusikaKusimustik.innerHTML = "Sinu valitud muusikud: " + muusikud;

        if (viimaneValik && document.querySelector(`input[value="${viimaneValik}"]`).checked) {
            pilt.src = "pildid/" + viimaneValik + ".jpg";
            pilt.style.display = "block";
        }
    }
    VastusMuusikaKusimustik.style.color = "#3d77ff";

    return muusikud;
}


function KooliArvamus() {
    let kooliTekst = document.getElementById("kooliTekst");
    let KooliVastus = document.getElementById("KooliVastus");
    let pilt = document.getElementById("piltvastus2");

    KooliVastus.innerHTML = "Sinu arvamus: " + kooliTekst.value;
    KooliVastus.style.color = "#3D77FFFF";

    if (kooliTekst.value.trim() !== "") {
        pilt.src = "pildid/kool.jpg";
        pilt.style.display = "block";
    } else {
        pilt.style.display = "none";
    }

    return kooliTekst.value;
}


function TundideArv() {
    let tunnid = document.getElementById("tunnid");
    let TundideVastus = document.getElementById("TundideVastus");
    let pilt = document.getElementById("piltvastus3");

    TundideVastus.innerHTML = "Sa kuulad muusikat " + tunnid.value + " tundi päevas";
    TundideVastus.style.color = "#3D77FFFF";

    if (parseInt(tunnid.value) > 0) {
        pilt.src = "pildid/tunnid_" + tunnid.value + ".jpg";
        pilt.style.display = "block";
    } else {
        pilt.style.display = "none";
    }

    return tunnid.value;
}


function RaadioKuulamine(valik) {
    let RaadioVastus = document.getElementById("RaadioVastus");
    let pilt = document.getElementById("piltvastus4");
    let raadioJah = document.getElementById("raadioJah");
    let raadioEi = document.getElementById("raadioEi");

    let raadioValik = "";
    if (raadioJah.checked) {
        raadioValik = raadioJah.value;
    } else if (raadioEi.checked) {
        raadioValik = raadioEi.value;
    }

    RaadioVastus.innerHTML = "Raadio kuulamine: " + raadioValik;
    RaadioVastus.style.color = "#3D77FFFF";

    if (valik) {
        pilt.src = "pildid/" + valik + ".jpg";
        pilt.style.display = "block";
    }

    return raadioValik;
}


function NimetatudJaamad() {
    let raadioJaamad = document.getElementById("raadioJaamad");
    let JaamadVastus = document.getElementById("JaamadVastus");
    let pilt = document.getElementById("piltvastus5");

    JaamadVastus.innerHTML = "Sinu nimetatud jaamad: " + raadioJaamad.value;
    JaamadVastus.style.color = "#3D77FFFF";

    if (raadioJaamad.value.trim() !== "") {
        pilt.src = "pildid/jaamad.jpg";
        pilt.style.display = "block";
    } else {
        pilt.style.display = "none";
    }

    return raadioJaamad.value;
}


function StiiliValik() {
    let muusikaStiil = document.getElementById("muusikaStiil");
    let StiilVastus = document.getElementById("StiilVastus");
    let pilt = document.getElementById("piltvastus6");

    StiilVastus.innerHTML = "Sinu vastus: " + muusikaStiil.value;
    StiilVastus.style.color = "#3D77FFFF";

    if (muusikaStiil.value !== "Vali") {
        pilt.src = "pildid/" + muusikaStiil.value + ".jpg";
        pilt.style.display = "block";
    } else {
        pilt.style.display = "none";
    }

    return muusikaStiil.value;
}


function KuvaKokkuvote() {
    let muusik = MuusikuValik();
    let arvamus = KooliArvamus();
    let tunnid = TundideArv();
    let raadio = RaadioKuulamine();
    let jaamad = NimetatudJaamad();
    let stiil = StiiliValik();
    let KokkuvoteAla = document.getElementById("KokkuvoteAla");
    let pilt = document.getElementById("piltvastus7");

    KokkuvoteAla.innerHTML =
        ' Valitud muusikud: ' + muusik + '<br>'
        + 'Arvamus koolis: ' + arvamus + '<br>'
        + 'Kuulamise tunnid: ' + tunnid + '<br>'
        + 'Raadio kuulamine: ' + raadio + '<br>'
        + 'Nimetatud jaamad: ' + jaamad + '<br>'
        + 'Eelistatud stiil: ' + stiil;

    KokkuvoteAla.style.backgroundColor = "#4d7dec";
}


function Puhasta() {
    document.getElementById("VastusMuusikaKusimustik").innerHTML = "";
    document.getElementById("KooliVastus").innerHTML = "";
    document.getElementById("TundideVastus").innerHTML = "";
    document.getElementById("RaadioVastus").innerHTML = "";
    document.getElementById("JaamadVastus").innerHTML = "";
    document.getElementById("StiilVastus").innerHTML = "";
    document.getElementById("KokkuvoteAla").innerHTML = "";

    //kustutab ära need kõik pildid ka
    document.getElementById("piltvastus1").style.display = "none";
    document.getElementById("piltvastus2").style.display = "none";
    document.getElementById("piltvastus3").style.display = "none";
    document.getElementById("piltvastus4").style.display = "none";
    document.getElementById("piltvastus5").style.display = "none";
    document.getElementById("piltvastus6").style.display = "none";
    document.getElementById("piltvastus7").style.display = "none";
}
