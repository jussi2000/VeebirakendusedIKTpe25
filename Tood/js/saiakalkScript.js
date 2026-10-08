function saiaKalk() {
    let vastus=document.getElementById("vastus");
    let saiatyyp=document.getElementById("saiatyyp");
    const juustu=2.00;
    const mooni=1.50;
    const pontsik=3.00;
    const kaneeli=1.30;
    let kogus=document.getElementById("kogus");
    let pilt=document.getElementById("pilt");

    //if valikud selectedIndex
    //1.rida selected Index=0
    if(saiatyyp.selectedIndex===0){
        vastus.innerHTML="Palun vali saia tüüp!";
         vastus.style.color="red";
         pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHPSTA9Gt437IJPqW1doY_G5JW02VzGUwvA-iwkvWSQ&s=10"
    }
    if(saiatyyp.selectedIndex===1){
        //roFixed=ümardamine
        vastus.innerHTML=
            "Sa valisid "+saiatyyp.value + '<br>' +
            "Valitud kogus on " + kogus.value +"tk"+'<br>' +
            "Kokku hind on "+(mooni*kogus.value).toFixed(2)+"€";
        vastus.style.color="blue";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTmtCws2_4IXEjYJdWZ79lfUTOZG4M10xLpG_Blqfug&s=10"
    }
    if(saiatyyp.selectedIndex===2){
        vastus.innerHTML=
            "Sa valisid "+saiatyyp.value + '<br>' +
            "Valitud kogus on " + kogus.value +"tk"+'<br>' +
            "Kokku hind on "+(juustu*kogus.value).toFixed(2)+"€";
        vastus.style.color="orange";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ID-NYQ4b1Ik9ECxSRnYlSn_hnEnzpNXavhwsp_hp9Q&s=10"
    }
    if(saiatyyp.selectedIndex===3){
        vastus.innerHTML=
            "Sa valisid "+saiatyyp.value + '<br>' +
            "Valitud kogus on " + kogus.value +"tk"+'<br>' +
            "Kokku hind on "+(pontsik*kogus.value).toFixed(2)+"€";
        vastus.style.color="purple";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcp6ic6_w0IRwrz77B79wphT1w8uY2FlRIj18G6uNu_g&s=10"
    }
    if(saiatyyp.selectedIndex===4){
        vastus.innerHTML=
            "Sa valisid "+saiatyyp.value + '<br>' +
            "Valitud kogus on " + kogus.value +"tk"+'<br>' +
            "Kokku hind on "+(kaneeli*kogus.value).toFixed(2)+"€";
        vastus.style.color="green";
        pilt.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ79Yieorm9JQew4OEOLCZxS9--UPmNMeg-gSO71tABCA&s=10"
    }

}