/*var tervita = function() {
    console.log("Tere maailm!");
};

// Anonüümse funktsiooni kutsumine
tervita(); */

/*
var summa = function(a, b) {
    return a + b;
};

var tulemus = summa(3, 5);
console.log(tulemus); // Väljund: 8
*/

//Anonüümseid funktsioone saab kasutada argumentidena teistele
// funktsioonidele, näiteks sündmuste käitlemiseks või ajaliste
// viivituste loomiseks.
// Anonüümne funktsioon koos argumendiga
setTimeout(function() {
    console.log("Tere pärastlõunast!");
}, 1000);
