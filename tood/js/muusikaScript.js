function ansambliValik() {
    let vastus=document.getElementById("vastus");
    let valik1=document.getElementById("v1");
    let valik2=document.getElementById("v2");
    let valik3=document.getElementById("v3");

    let muusika="";
    if (valik1.checked) {
        vastus +=valik1.value + ', ';
    }
    if (valik2.checked) {
        vastus +=valik2.value + ', ';
    }
    if (valik3.checked) {
        vastus +=valik3.value + ', ';
    }

    vastus.innerHTML="Sina kuulad:" +vastus;
}

function arvamusMuusika() {
    let arvamus=document.getElementById("arvamus");
    let vastus2=document.getElementById("vastus2");

    vastus2.innerHTML="Sinu arvamus on: " +arvamus;

    return arvamus.value;
}

function KuiKauaTundides() {
    let muusikaPikkus=document.getElementById("muusikaPikkus");
    let vastus3=document.getElementById("vastus3");

    vastus3.innerHTML="Sina kuulad: " +muusikaPikkus+ " tundi muusikat";
}

function JahVoiEi() {
    let vastus4=document.getElementById("vastus4");
    let ei=document.getElementById("ei");
    let jah=document.getElementById("jah");

    let valik4="";
    if(jah.checked){
        valik4=jah.value;
    } else if(ei.checked){
        valik4=ei.value;
    } else{
        valik4="Ilma vastusega";
    }

    vastus4.innerHtml="Raadio kuulamine: " +valik4;

    return valik4;
}

function RaadioJaamad() {

}