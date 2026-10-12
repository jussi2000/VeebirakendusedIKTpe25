function arvutaKytus() {
    let kytus = document.getElementById("kytus").value;
    let teekond = parseFloat(document.getElementById("teekond").value);
    let kulu = parseFloat(document.getElementById("kulu").value);

    let vastusKast = document.getElementById("kytuseVastus");
    let pilt = document.getElementById("kytusePilt");

    let liitriHind = 0;
    let pildiUrl = "";


    if (kytus === "bensiin") {
        liitriHind = 1.65;
        pildiUrl = "https://unsplash.com";
    } else if (kytus === "diisel" || kytus === "diiesel") {
        liitriHind = 1.55;
        pildiUrl = "https://unsplash.com";
    }

    if (teekond > 0 && kulu > 0) {
        let liitridKokku = (teekond / 100) * kulu;
        let koguhind = liitridKokku * liitriHind;

        vastusKast.innerHTML = "Sõiduks kulub " + liitridKokku.toFixed(1) + " liitrit kütust.<br>" +
            "Sõidu kogumaksumus on <strong>" + koguhind.toFixed(2) + " €</strong> (liitri hind " + liitriHind + " €).";

        pilt.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMpdg3Fq9xIR-LhouLBfoMLRTTxUbYPddFTzf3hpv00Q&s";
        pilt.style.display = "block";
    } else {
        vastusKast.innerHTML = "Palun sisesta korrektsed numbrid!";
        pilt.style.display = "none";
    }
}

window.addEventListener("load", arvutaKytus);