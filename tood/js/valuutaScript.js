function valuutaKalk() {
    let vastus3=document.getElementById('vastus3');
    let euro=document.getElementById('euro');
    let valuuta=document.getElementById('valuuta');

    const dollar=1.12;
    const pound=0.85;
    const yen=177.52;
    const ruble= 94.11;

    if(valuuta.value=="dollar"){
        vastus3.innerHTML= euro.value+"€ = "+
            (euro.value*dollar).toFixed(2)+"$";
    }
    if (valuuta.value=="pound"){
        vastus3.innerHTML= euro.value+"€ = "+
            (euro.value*pound).toFixed(2)+"£";
    }
    if (valuuta.value=="yen"){
        vastus3.innerHTML= euro.value+"€ = "+
            (euro.value*yen).toFixed(2)+"¥";
    }
    if (valuuta.value=="ruble"){
        vastus3.innerHTML= euro.value+"€ = "+
            (euro.value*ruble).toFixed(2)+"₽";
    }

    if (valuuta.value==""){
        vastus3.innerHTML="Sisesta valuuta õigesti!";
    }
}