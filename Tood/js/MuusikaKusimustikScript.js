function MuusikuValik() {
    let VastusMuusikaKusimustik = document.getElementById("VastusMuusikaKusimustik");
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
        VastusMuusikaKusimustik.innerHTML = "Sinu valitud muusikud: -";
    } else {
        // Eemaldame lõpust üleliigse koma ja tühiku
        muusikud = muusikud.slice(0, -2);
        VastusMuusikaKusimustik.innerHTML = "Sinu valitud muusikud: " + muusikud;
    }
    VastusMuusikaKusimustik.style.color = "#d66824";

    return muusikud;
}


function KooliArvamus() {
    let kooliTekst = document.getElementById("kooliTekst");
    let KooliVastus = document.getElementById("KooliVastus");

    KooliVastus.innerHTML = "Sinu arvamus: " + kooliTekst.value;
    KooliVastus.style.color = "#d66824";

    return kooliTekst.value;
}


function TundideArv() {
    let tunnid = document.getElementById("tunnid");
    let TundideVastus = document.getElementById("TundideVastus");

    TundideVastus.innerHTML = "Sa kuulad muusikat " + tunnid.value + " tundi päevas";
    TundideVastus.style.color = "#d66824";

    return tunnid.value;
}


function RaadioKuulamine() {
    let RaadioVastus = document.getElementById("RaadioVastus");
    let raadioJah = document.getElementById("raadioJah");
    let raadioEi = document.getElementById("raadioEi");

    let valik = "";
    if (raadioJah.checked) {
        valik = raadioJah.value;
    } else if (raadioEi.checked) {
        valik = raadioEi.value;
    }

    RaadioVastus.innerHTML = "Raadio kuulamine: " + valik;
    RaadioVastus.style.color = "#d66824";

    return valik;
}


function NimetatudJaamad() {
    let raadioJaamad = document.getElementById("raadioJaamad");
    let JaamadVastus = document.getElementById("JaamadVastus");

    JaamadVastus.innerHTML = "Sinu nimetatud jaamad: " + raadioJaamad.value;
    JaamadVastus.style.color = "#d66824";

    return raadioJaamad.value;
}


function StiiliValik() {
    let muusikaStiil = document.getElementById("muusikaStiil");
    let StiilVastus = document.getElementById("StiilVastus");

    StiilVastus.innerHTML = "Sinu vastus: " + muusikaStiil.value;
    StiilVastus.style.color = "#d66824";

    return muusikaStiil.value;
}


function KuvaKokkuvote() {
    let muusikud = MuusikuValik();
    let arvamus = KooliArvamus();
    let tunnid = TundideArv();
    let raadio = RaadioKuulamine();
    let jaamad = NimetatudJaamad();
    let stiil = StiiliValik();
    let KokkuvoteAla = document.getElementById("KokkuvoteAla");

    KokkuvoteAla.innerHTML =
        '<strong>Küsitluse vastused:</strong><br>' +
        'Valitud muusikud: ' + '<br>' +
        'Arvamus koolis: ' + arvamus + '<br>' +
        'Kuulamise tunnid: ' + tunnid + '<br>' +
        'Raadio kuulamine: ' + raadio + '<br>' +
        'Nimetatud jaamad: ' + jaamad + '<br>' +
        'Eelistatud stiil: ' + stiil;

    KokkuvoteAla.style.backgroundColor = "#ffed75";
}


function Puhasta() {
    document.getElementById("VastusMuusikaKusimustik").innerHTML = "";
    document.getElementById("KooliVastus").innerHTML = "";
    document.getElementById("TundideVastus").innerHTML = "";
    document.getElementById("RaadioVastus").innerHTML = "";
    document.getElementById("JaamadVastus").innerHTML = "";
    document.getElementById("StiilVastus").innerHTML = "";
    document.getElementById("KokkuvoteAla").innerHTML = "";
    document.getElementById("KokkuvoteAla").style.backgroundColor = "transparent";
}
