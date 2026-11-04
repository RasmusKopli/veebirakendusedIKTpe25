function ansambliValik() {
    let vastus=document.getElementById('vastus');
    let Eminem=document.getElementById('Eminem');
    let Nublu=document.getElementById('Nublu');
    let GunsAndRoses=document.getElementById('GunsAndRoses');

    let muusikud="";
    if (Eminem.checked) {
        muusikud +=Eminem.value + ', ';
    }
    if (Nublu.checked) {
        muusikud +=Nublu.value + ', ';
    }
    if (GunsAndRoses.checked) {
        muusikud +=GunsAndRoses.value + ' ';
    }

    vastus.innerHTML="Sinu valikud: " +muusikud;

    return muusikud;
}

function arvamusMuusika() {
    let arvamus=document.getElementById("arvamus");
    let vastus2=document.getElementById("vastus2");

    vastus2.innerHTML="Sinu arvamus: " +arvamus.value;

    return arvamus.value;
}

function KuiKauaTundides() {
    let muusikaPikkus=document.getElementById("muusikaPikkus");
    let vastus3=document.getElementById("vastus3");

    vastus3.innerHTML="Sina kuulad: " +muusikaPikkus.value+ " tundi muusikat päevas";

    return muusikaPikkus;
}

function JahVoiEi() {
    let vastus4=document.getElementById("vastus4");
    let eiVastus=document.getElementById("eiVastus");
    let jahVastus=document.getElementById("jahVastus");

    let valik4;
    if(jahVastus.checked){
        valik4=jahVastus.value;
    } else if(eiVastus.checked){
        valik4=eiVastus.value;
    } else{
        valik4="Valik puudub..";
    }

    vastus4.innerHTML="Kuulate raadiot?:    " +valik4;

    return valik4;
}

function RaadioJaamad() {
    let raadiojaamad=document.getElementById("raadiojaamad");
    let vastus5=document.getElementById("vastus5");

    vastus5.innerHTML="Sinu sisestatud raadiojaamad: " +raadiojaamad.value;

    return raadiojaamad.value;
}

function MuusikaType() {
    let vastus6=document.getElementById("vastus6");
    let HipHop=document.getElementById("HipHop");
    let Klassika=document.getElementById("Klassika");
    let Rock=document.getElementById("Rock");
    let Pop=document.getElementById("Pop");
    let Jazz=document.getElementById("Jazz");
    let Folk=document.getElementById("Folk");

    let valik6="";
    if(HipHop.checked){
        valik6=HipHop.value;
    } else if(Klassika.checked){
        valik6=Klassika.value;
    } else if(Rock.checked){
        valik6=Rock.value;
    } else if(Pop.checked){
        valik6=Pop.value;
    } else if(Jazz.checked){
        valik6=Jazz.value;
    } else if(Folk.checked){
        valik6=Folk.value;
    }

    vastus6.innerHTML="Sinu vastus: " +valik6;

    return valik6;
}

function muusikaKokkuvote() {
    let vastus7=document.getElementById("vastus7");
    let muusikud=ansambliValik();
    let arvamus=arvamusMuusika();
    let muusikaPikkus=KuiKauaTundides();
    let valik4=JahVoiEi();
    let raadiojaamad=RaadioJaamad();
    let valik6=MuusikaType();

    vastus7.innerHTML='Tuntud muusikud: ' +muusikud+ "<br>"
        + 'Teie arvamus: ' +arvamus+ "<br>"
        + 'Kui kaua te kuulate muusikat: ' +muusikaPikkus.value+ ' Tundi' + "<br>"
        + 'Kas te kuulate raadiot: ' +valik4+ "<br>"
        + 'Milliseid raadiojaame te teate: ' +raadiojaamad+ "<br>"
        + 'Teie muusika tüüp: ' +valik6;
}

function muusikaClear() {
    vastus.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
    vastus7.innerHTML="";
}





