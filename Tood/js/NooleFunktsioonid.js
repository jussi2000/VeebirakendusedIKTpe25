// See kood trükib teksti nii konsooli kui ka HTML lehele
function valjasta(tekst) {
    console.log(tekst); // Kuvab teksti konsoolis

    let rida = document.createElement("p");
    rida.textContent = tekst;

    document.getElementById("tulemus").appendChild(rida);
}

//Anonüümsed funktsioonid:

// // Anonüümse funktsiooni näide
// var tervita = function() {
//     console.log("Tere maailm!");
// };
//
// // Anonüümse funktsiooni kutsumine
// tervita();

// var summa = function(a, b) {
//     return a + b;
// };
//
// var tulemus = summa(3, 5);
// console.log(tulemus); // Väljund: 8

// // Anonüümne funktsioon koos argumendiga
// setTimeout(function() {
//     console.log("Tere pärastlõunast!");
// }, 1000);

// var array = [1, 2, 3, 4, 5];
//
// array.forEach(function(element) {
//     console.log(element);
// });

// const array = [1, 2, 3, 4, 5];
//
// array.forEach(function(element, index, array) {
//     console.log("Element:", element);
//     console.log("Index:", index);
//     console.log("Array:", array);
// });

//IIFE (Immediately Invoked Function Expression):

// (function() {
//     var x = 10;
//     console.log(x); // Output: 10
// })();

//NooleFunktsioonid:

// const noolFunktsioon= () => {
//     // funktsiooni keha
// };

// const noolFunktsioon = () => {
//     console.log("Tere noolfunktsioon!")
// };
//
// noolFunktsioon();

// const noolFunktsioon = () => console.log("Tere noolfunktsioon!");
// noolFunktsioon();

//noolefunktsioon argumentidega
// {
//     let tervita = (nimi) => {console.log(`Tere ${nimi}`)};
//     tervita("Juhan");
// }
// //noolefunktsioon lihtsustatud - KUI ARGUMENTE ON ÜKS, SIIS VÕIB KA NEED SULUD ÄRA JÄTTA
// {
//     let tervita2 = nimi => console.log(`Tere ${nimi}`);
//     tervita2("Mari");
// }
// //kui kehas on rohkem ridu, siis sulud jäävad
// {
//     let liitmine = (a, b) => {let result = a + b;return result;
//     };
//     console.log(liitmine(3,5));
// }
// //noolefunktsioon lihtsustatud argumentidega
// {
//     let liitmine = (a, b) => a + b;
//     console.log(liitmine(3,5));
// }
// //noolefunktsioon ja massiivist elementide kuvamine
// {
//     const array = [1, 2, 3, 4, 5];
//     array.forEach(element => console.log(element));
// }

// const number = 5;
// const isEven = number => number % 2 === 0 ? "paaris" : "paaritu";
//
// console.log(isEven(number)); // Väljund: paaritu

// const arvud = [1, 2, 3, 4, 5];
//
// arvud.forEach(nr => {
//     const paaris = nr % 2 === 0 ? "paaris" : "paaritu";
//     console.log(`${nr} is ${paaris}`);
// });

//Tagasikutsumisfunktsioon (Callbacks):

// let nimed = ["Kati", "Marta", "Andres", "Jüri", "Liisa"];
//
// nimed.forEach(function(nimi) {
//     console.log(`<li>${nimi}</li>`);
// });

// let nimed = ["Kati", "Marta", "Andres", "Jüri", "Liisa"];
//
// const kasutaja = function(nimi) {
//     console.log(`<li>${nimi}</li>`);
// };
//
// nimed.forEach(kasutaja);

// let nimed = ["Kati", "Marta", "Andres", "Jüri", "Liisa"];
//
// //pikalt
// const kasutaja = nimi => console.log(`<li>${nimi}</li>`);
// nimed.forEach(kasutaja);
//
// //lühidalt
// nimed.forEach(nimi => console.log(`<li>${nimi}</li>`));

// const teostaAJAXPäring = (url, callback) => {
//     setTimeout(() => {
//         const vastus = "Vastus andmebaasist";
//         callback(vastus);
//     }, 2000);
// };
//
// const callbackFunktsioon = (vastus) => {
//     console.log("Vastus saadud:", vastus);
// };
//
// teostaAJAXPäring("https://api.example.com/data", callbackFunktsioon);

//Ülesanne


//1. Erinevad funktsioonid:
//Klassikaline funktsioon
function minuNimi() {
    valjasta("Johanna Tima");
}
minuNimi();

// Noolefunktsioon
const minuNimi2 = () => valjasta("Johanna Tima");
minuNimi2();


//2. Argumendiga funktsioon:
function kuupaevEesti(kuupaev) {
    const osad = kuupaev.split(".");

    const paev = osad[0];
    const kuu = osad[1];
    const aasta = osad[2];

    valjasta(`${paev}.${kuu}.${aasta}`);
}

kuupaevEesti("29.10.26"); // Väljund: 29.10.26


//3.Teadmata hulk:
const arvudeStatistika = function(arvud) {
    let summa = 0;

    arvud.forEach(arv => {
        summa = summa + arv;
    });

    const kogus = arvud.length;
    const keskmine = summa / kogus;

    return { kogus: kogus, keskmine: keskmine };
};

const tulemus = arvudeStatistika([4, 8, 15, 16, 23, 42]);
valjasta(`Arve kokku: ${tulemus.kogus}`);   // Arve kokku: 6
valjasta(`Keskmine: ${tulemus.keskmine}`);  // Keskmine: 18


//4. Salajane sõnum:
const salajaneSonum = sonum => {
    const vokaalid = "aeiouõäöüAEIOUÕÄÖÜ";
    let tulemus = "";

    for (let i = 0; i < sonum.length; i++) {
        tulemus += vokaalid.includes(sonum[i]) ? "*" : sonum[i];
    }

    return tulemus;
};

valjasta(salajaneSonum("Tere maailm")); // Väljund: T*r* m***lm


//5. Unikaalsed nimed:
const leiaUnikaalsedNimed = nimed => {
    const unikaalsed = [];

    nimed.forEach(nimi => {
        if (!unikaalsed.includes(nimi)) {
            unikaalsed.push(nimi);
        }
    });

    return unikaalsed;
};

valjasta(leiaUnikaalsedNimed(["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"]));
// Väljund: ["Kati", "Mati", "Mari", "Jüri"]