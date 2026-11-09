//sirge joon
function sirgeJoon(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle="crimson";
        t.lineWidth = 2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200); //lõpppunkt
        t.stroke();
    }
}

function puhasta(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.clearRect(0,0,300,400);
    }
}

//kolmnurk
function kolmnurk(){
    //määrame tahvli
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //kolmnurk
        t.beginPath();
        t.strokeStyle="crimson";
        t.fillStyle="steelblue"; //taust
        t.lineWidth = 2;
        t.moveTo(50,50); //alguspunkt
        t.lineTo(150,200);
        t.lineTo(50,200);
        t.lineTo(50, 50); //lõpppunkt
        t.stroke();
        t.fill();
    }
}

function ristkylik(){
    const tahvel=document.getElementById("tahvel");
    const laius=document.getElementById("laius");
    const korgus=document.getElementById("korgus");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle="crimson";
        t.fillRect(100,50,laius.value,korgus.value); //alguspunk - x, y, laius, kõrgus
    }
}

function ring(){
    const tahvel=document.getElementById("tahvel");
    const r=document.getElementById("raadius");
    const varv=document.getElementById("varv");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle=varv.value;
        t.arc(100,50,r.value,0,2*Math.PI, true); //alguspunk - x, y, raadius, 2*180kraadi
        t.fill();
    }
}

function nagu(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle="yellow";
        t.arc(150,100,85,0,2*Math.PI, true); //alguspunk - x, y, raadius, 2*180kraadi
        t.fill();
    }
}

function silm1(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.strokeStyle="white";
        t.arc(130,75,10,0,2*Math.PI, true); //alguspunk - x, y, raadius, 2*180kraadi
        t.stroke();
    }
}

function silm2(){}

function suu(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.beginPath();
        t.strokeStyle="black";
        t.lineWidth = 3;
        t.moveTo(125,150); //alguspunkt
        t.lineTo(175,150); //lõpppunkt
        t.stroke();
    }
}

function korv(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle="yellow";
        t.fillRect(125,50,150,150); //alguspunk - x, y, laius, kõrgus
    }
}

