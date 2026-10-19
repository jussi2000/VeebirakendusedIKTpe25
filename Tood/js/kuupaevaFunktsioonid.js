const now = new Date();

const paev = now.getDate();//tagastab kuupäeva päeva
const kuu = now.getMonth();//tagastab kuu numbri (0-11)
const aasta = now.getFullYear();//tagastab aasta
const np = now.getDay();//tagastab nädalapäeva numbri (0-6), kus 0 on pühapäev ja 6 on laupäev
const tunnid = now.getHours();//tagastab tunnid (0-23)
const minutid = now.getMinutes();//tagastab minutid (0-59)

console.log("Täna on " + paev + ". päev");
console.log("Kuu number on " + kuu);
console.log("Aasta on " + aasta);
console.log("Täna on " + np);
console.log("Kell on " + tunnid + ":" + minutid);

function tanaon(){
    const now = new Date();
    const paev = now.getDate();//tagastab kuupäeva päeva
    const kuu = now.getMonth();//tagastab kuu numbri (0-11)
    const aasta = now.getFullYear();//tagastab aasta
    const tunnid = now.getHours();//tagastab tunnid (0-23)
    const minutid = now.getMinutes();//tagastab minutid (0-59)

    let kuupaevaVastus = document.getElementById("kuupaevaVastus");

    kuupaevaVastus.innerHTML =
        'Täna on ' + paev + "." + kuu + "." + aasta + "<br>" +
        'kellaaeg on ' + tunnid + "." + minutid;
}

function synnipaevani(){
    const synnipaev = new Date(2027, 7, 29); //aasta, kuu, päev
    const tana = new Date();

    const vahe = synnipaev.getTime() - tana.getTime();
    const paevad = vahe / (1000 * 60 * 60 * 24); //päevades

    let kuupaevaVastus2=document.getElementById("kuupaevaVastus2");
    kuupaevaVastus2.innerHTML ="Minu sünnipäevani on "+paevad.toFixed(0)+" päeva.";
}