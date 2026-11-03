/* let auto = {
    mark: "Toyota",
    mudel: "Corolla",
    aasta: 2022,
    varv: "punane",
    lisavarustus: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"]
};

//Väljastamiseks trüki välja kogu objekt:

    console.log(auto); */


/* let auto = {
    //omadused
    mark: "Toyota",
    mudel: "Corolla L",
    aasta: 2022,
    varv: "punane",
    omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],

    //meetodid
    taisnimi: function() {
        return this.mark + " " + this.mudel;
    }
};

console.log(auto.taisnimi()); */

/* let auto = {
    //omadused
    mark: "Toyota",
    mudel: "Corolla L",
    aasta: 2022,
    varv: "punane",
    omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],

    //meetodid
    taisnimi() {
        return this.mark + " " + this.mudel;
    },

    kuvaOmadused() {
        this.omadused.forEach(omadus => console.log(omadus));
    }
};

auto.kuvaOmadused(); */

/* let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

console.log(autod); */

/* let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

console.log(autod[0]); */

/* let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

console.log(autod[0].mark); */

/* let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

autod.forEach((auto) => {
    console.log(`
    Mark: ${auto.mark},
    Mudel: ${auto.mudel},
    Aasta: ${auto.aasta}
    `);
}); */

/* let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

//Lisab uue objekti massiivi lõppu
autod.push({ mark: 'BMW', mudel: '320i', aasta: 2015 });
//Lisab uue objekti massiivi algusesse
autod.unshift({ mark: 'Ford', mudel: 'Focus', aasta: 2020 });*/

/* let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

//Eemaldab esimese objekti
autod.splice(0,1);
//Lisab objekti alates teisest indeksist, ei kustutata midagi
autod.splice(1,0,{ mark: 'Audi', mudel: 'A4', aasta: 2018 });

console.log(autod); */

/*let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

//Otsimine
let otsing = autod.find(auto=>auto.aasta > 2018);
console.log(otsing);
*/

/*let autod = [
//Toyota oli ära muudetud, et oleks nähtav tulemus.
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2015 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

autod.sort((a, b) => a.aasta - b.aasta);
console.log(autod); */


//Ülesanne
let raamat = {

    pealkiri: "Pride and Prejudice", autor: "Jane Austen", aasta: "1978",

    raamatuKirjeldus: function(){
        return this.pealkiri + ", " + this.autor;
    },

    raamatuAasta: function() {
        return this.aasta;
    }
};

document.getElementById("vastus1").textContent = raamat.raamatuKirjeldus();
document.getElementById("vastus2").textContent = raamat.raamatuAasta();

console.log(raamat.raamatuKirjeldus());
console.log(raamat.raamatuAasta());

const raamatukogu = {
    raamatud: [
        { pealkiri: "Animal Farm", autor: "George Orwell", aasta: 1945 },
        { pealkiri: "Wuthering Heights", autor: "Emily Bronte", aasta: 1927 },
        { pealkiri: "Life of Pi", autor: "Yann Martel", aasta: 2001 },
    ],

    kuvaKoguarv() {
        console.log(`kokku: ${this.raamatud.length} raamatut.`);
        document.getElementById("vastus4").textContent = `Kokku: ${this.raamatud.length} raamatut.`;
    },

    raamatudParast2000() {
        const uuedRaamatud = this.raamatud.filter(raamat => Number(raamat.aasta) > 2000);
        console.log(`Pärast 2000. aastat on ilmunud ` + uuedRaamatud.length + ` raamat.`);
        document.getElementById("vastus5").textContent = `Kokku: `+ uuedRaamatud.length +` ilmunud raamat pärast aastat 2000`;
    },

    //kuvab raamatute vanuse lahutates aastaga 2026 raamatu ilmumisaastaga (2026 - Ilmumisaasta = vanus).
    raamatuVanus() {

        const Raamatvanused =document.getElementById("vastus6")
        Raamatvanused.innerHTML = "";
        this.raamatud.forEach(raamat => {
            const vanus = 2026 - Number(raamat.aasta);
            console.log(`Raamat ` + raamat.pealkiri + ` on ` + vanus + ` aastat vana`);

            const rida = document.createElement("div");
            rida.textContent = `Raamat, ` + raamat.pealkiri + ` on ` + vanus + ` aastat vana`;
            Raamatvanused.appendChild(rida);
        });
    },
};

let tulemus = "";

raamatukogu.raamatud.forEach((raamat) => {
    tulemus += `
    <p>
        <b>Pealkiri:</b> ${raamat.pealkiri}<br>
        <b>Autor:</b> ${raamat.autor}<br>
        <b>Aasta:</b> ${raamat.aasta}<br>
    </p>
    <hr>
   `;
});

let vastus3=document.getElementById("vastus3")
vastus3.innerHTML = tulemus;

raamatukogu.raamatud.splice(1,0,{pealkiri: "1984", autor: "George Orwell", aasta: 1984})

console.log(raamatukogu.raamatud);

raamatukogu.kuvaKoguarv();

raamatukogu.raamatudParast2000();

raamatukogu.raamatuVanus();


