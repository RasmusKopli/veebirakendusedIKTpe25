const now= new Date();

const paev=now.getDate(); //tagastab päeva
const kuu=now.getMonth()+1; //tagastab kuu numbri (1-12)
const aasta=now.getFullYear(); //tagastab aasta
const np=now.getDay(); //tagastab nädalapäeva numbri (0-6), kus 0 on pühapäev ja 6 on laupäev

const tunnid=now.getHours();
const minutid=now.getMinutes();

console.log('Täna on: ' + paev + ' päev');
console.log('Kuu number on: ' + kuu);
console.log('Aasta on: ' + aasta);
console.log('Täna on: ' + np);
console.log('Kell on: ' + tunnid + ':' + minutid)

//Kohandatud kuupäevavormingu loomine
const kp=now.toLocaleDateString();
const kellaaeg=now.toLocaleTimeString();
const kp_kell=now.toLocaleString();

console.log(kp);
console.log(kellaaeg);
console.log(kp_kell);

//Leiame nüüd näiteks kuupäevade vahe päevades
const before=new Date(2025, 5, 26);
const ms=now.getTime() - before.getTime();
const paevad = ms / (1000 * 60 * 60 * 24); //sekundid * minutid * tunnid * päevad

console.log('Ajavahemik päevades: ' + paevad);

function TanaOn(){
    const date = new Date();
    const paev=now.getDate();
    const kuu=now.getMonth()+1;
    const aasta=now.getFullYear();
    const tunnid=now.getHours();
    const minutid=now.getMinutes();

    let vastus=document.getElementById("vastus");

    vastus.innerHTML="Täna on: " + paev + "." + kuu + "." + aasta + "<br>"+
        "Kellaeg on: " + tunnid + ":" + minutid;
}

function MinuSunnipaev(){
    const whenBirthday=new Date(2026, 9, 30);
    const now=new Date;

    const Gap=whenBirthday.getTime()-now.getTime();
    const Days=Gap/(1000 * 60 * 60 * 24);

    let vastus2=document.getElementById("vastus2");

    vastus2.innerHTML="Päevad kuni sünnipäevani: " + Days.toFixed(0) + " päeva";
}
