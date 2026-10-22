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

let raamat = {
    // Omadused
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,

    // Meetod, mis kuvab raamatu kirjelduse (kasutades `this` viidet)
    kirjeldus() {
        return `${this.pealkiri}, autor ${this.autor}, välja antud aastal ${this.aasta}.`;
    },

    // Meetod, mis muudab väljaandmise aastat
    muudaAastat(uusAasta) {
        this.aasta = uusAasta;
    }
};

// Testime tulemusi konsoolis
console.log(raamat.kirjeldus());
raamat.muudaAastat(1913);
console.log(`Uus aasta: ${raamat.aasta}`);