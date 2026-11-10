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
        t.beginPath();
        t.fillStyle="yellow";
        t.arc(150,100,85,0,2*Math.PI, true); //alguspunk - x, y, raadius, 2*180kraadi
        t.fill();
    }
}

function silm1(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle="white";
        t.arc(120,75,20,0,2*Math.PI, true); //alguspunk - x, y, raadius, 2*180kraadi
        t.fill();
    }
}

function silm2(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle="white";
        t.arc(190,75,20,0,2*Math.PI, true); //alguspunk - x, y, raadius, 2*180kraadi
        t.fill();
    }
}

function pupill1(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle="steelblue";
        t.arc(115,73,10,0,2*Math.PI, true); //alguspunk - x, y, raadius, 2*180kraadi
        t.fill();
    }
}

function pupill2(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.beginPath();
        t.fillStyle="crimson";
        t.arc(185,73,10,0,2*Math.PI, true); //alguspunk - x, y, raadius, 2*180kraadi
        t.fill();
    }
}

function suu(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.beginPath();
        t.strokeStyle="black";
        t.lineWidth = 3;
        t.moveTo(100,135); //alguspunkt
        t.lineTo(125,150);
        t.lineTo(175,150);
        t.lineTo(200,135); //lõpppunkt
        t.stroke();
    }
}

function korvad(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle="yellow";
        t.fillRect(60,60,180,70); //alguspunk - x, y, laius, kõrgus
    }
}

function nina(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.beginPath();
        t.strokeStyle="orange";
        t.fillStyle="gold"; //taust
        t.lineWidth = 1;
        t.moveTo(150,75); //alguspunkt
        t.lineTo(150,130);
        t.lineTo(130,130);
        t.lineTo(150, 75); //lõpppunkt
        t.stroke();
        t.fill();
    }
}

function smile(){
    korvad();
    nagu();
    suu();
    nina();
    silm1();
    silm2();
    pupill1();
    pupill2();
}

//pilt failist //drawImage()
function pilt(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        const fail=new Image();
        fail.src="https://media.istockphoto.com/id/153696622/photo/happy-senior-man-giving-thumb-up.jpg?s=612x612&w=0&k=20&c=b2BI4P4vvgEK9AqxQ_gl7EpWnr1BomTJV24RqtGpaRo=";
        fail.onload=()=>{
            t.drawImage(fail, 50, 50, 100, 100);
        }
    }
}

