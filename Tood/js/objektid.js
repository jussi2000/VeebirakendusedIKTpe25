// See kood trükib teksti nii konsooli kui ka HTML lehele
function valjasta(tekst) {
    console.log(tekst);

    let rida = document.createElement("p");
    rida.textContent = tekst;
    document.getElementById("tulemus").appendChild(rida);
}

let raamatukogu = {
    nimi: "Linnaraamatukogu",
    raamatud: [
        { pealkiri: "Tõde ja õigus", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Harry Potter ja tarkade kivi", autor: "J. K. Rowling", aasta: 1997 }
    ],

    // See kuvab kõik raamatud
    kuvaRaamatud() {
        this.raamatud.forEach((r, i) => {
            valjasta(`${i + 1}. ${r.pealkiri} – ${r.autor} (${r.aasta})`);
        });
    },

    // See lisab uue raamatu
    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });
        valjasta(`Lisatud: ${pealkiri}`);
    },

    // See kuvab raamatute koguarvu
    raamatuteArv() {
        valjasta(`Raamatukogus on ${this.raamatud.length} raamatut`);
    },

    // See näitab, mitu raamatut on ilmunud pärast 2000. aastat
    peale2000() {
        let arv = this.raamatud.filter(r => r.aasta > 2000).length;
        valjasta(`Pärast 2000. aastat on ilmunud ${arv} raamatut`);
    },

    // Minu oma meetod: leiab vanima raamatu
    vanimRaamat() {
        let vanim = this.raamatud.reduce((a, b) => (a.aasta < b.aasta ? a : b));
        valjasta(`Vanim raamat: ${vanim.pealkiri} (${vanim.aasta})`);
    }
};
console.log(raamatukogu.raamatud);
raamatukogu.kuvaRaamatud();
raamatukogu.raamatuteArv();
raamatukogu.lisaRaamat("Mees, kes teadis ussisõnu", "Andrus Kivirähk", 2007);
raamatukogu.lisaRaamat("Puhastus", "Sofi Oksanen", 2008);
raamatukogu.raamatuteArv();
raamatukogu.kuvaRaamatud();
raamatukogu.peale2000();
raamatukogu.vanimRaamat();

// let autod = [
//     { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
//     { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
//     { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
// ];
//
// autod.sort((a, b) => a.aasta - b.aasta);
// console.log(autod);
//
// autod.forEach((auto) => {
//     console.log(`
//     Mark: ${auto.mark},
//     Mudel: ${auto.mudel},
//     Aasta: ${auto.aasta}
//     `);
// });
//
// console.log(autod[0].mark);
