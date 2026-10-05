//random pilt mis tuleb piltide massivist
function randomPilt(){
    const pildid=[
        '../pildid/1.png',
        '../pildid/2.png',
        '../pildid/3.png',
        '../pildid/tyhi.png'
    ];
    //randomPilt
    //math.floor - ümardab täisarvuni
    const pilt=Math.floor(Math.random()*pildid.length);
    const rpilt=pildid[pilt];
    const randomPilt=document.getElementById("randomPilt");

    randomPilt.src=rpilt;
    vastus.innerHTML="Siia tuleb vastus...";
    vastus.style.color="black";
}
function radioValik(){
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik"); //mitu elementi ühe nimega
    let randomPilt=document.getElementById("randomPilt");

    //tsükkel for
    for(let i=0; i<valik.length; i++){ //alustame nullist ja i'd suurendatakse kuni valiku suuruseni
        if(valik[i].checked){
            if(randomPilt.getAttribute("src")==valik[i].value){
                vastus.innerHTML="õige vastus";
                vastus.style.color="green";
            }else{
                vastus.innerHTML="vale vastus";
                vastus.style.color="red";
            }
        }
    }
}