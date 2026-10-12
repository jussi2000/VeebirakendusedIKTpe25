function valuutaKalk(){
    let vastus3=document.getElementById("vastus3");
    let euro=document.getElementById("euro");
    let valuuta=document.getElementById("valuuta").value;

    const dollar=1.12;
    const juann=7.4992;
    const nael=0.84;
    const kroon=11.45;

    if (valuuta === "dollar") {
        vastus3.innerHTML = euro.value + " € = " +
            (euro.value * dollar).toFixed(2) + " $";
    }
    if (valuuta === "juann") {
        vastus3.innerHTML =
            euro.value + " € = " +
            (euro.value * juann).toFixed(2) + " ¥";
    }
    if (valuuta === "nael") {
        vastus3.innerHTML = euro.value + " € = " +
            (euro.value * nael).toFixed(2) + " £";
    }
    if (valuuta === "kroon") {
        vastus3.innerHTML = euro.value + " € = " +
            (euro.value * kroon).toFixed(2) + " kr";
    }
    if(valuuta === ""){
        vastus3.innerHTML = "Tundmatu valuuta! Sisesta 'dollar' või 'juann'.";
    }
}