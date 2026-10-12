function kaugusTeisendus(){
    let vastus4=document.getElementById('vastus4');
    let length=document.getElementById('length');
    let kaugusKonvert=document.getElementsByName("kauguskonvert");
    let inch=document.getElementById("inch");
    let foot=document.getElementById("foot");
    let mile=document.getElementById("foot");



    for(let i=0;i<kaugusKonvert;i++){
        if(kaugusKonvert[i].checked){
            if(kaugusKonvert[i].value=="inch"){
                vastus4.innerHTML=length+" Inch (in) => "+
                    (length*2.54).toFixed(2) + "Sentimeetrid (cm)"
            } else if(kaugusKonvert[i].value=="foot"){
                vastus4.innerHTML=length+" Foot (ft) => "+
                    (length*0.3048).toFixed(2) + "Meetrid (m)"
            } else if(kaugusKonvert[i].value=="mile"){

            }
        }
    }
}