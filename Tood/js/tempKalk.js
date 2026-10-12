function tempTeisendus(){
    let vastus2=document.getElementById("vastus2");
    let temp=document.getElementById("temp").value;


    const tempValik=document.getElementsByName("tempValik");//nimi järgi 2 elements

    for (let i = 0; i < tempValik.length; i++){
        if(tempValik[i].checked){
            if(tempValik[i].value=="celsius"){
                vastus2.innerHTML=temp+'&deg;F ='+
                    ((temp-32)*5/9).toFixed(2) + '&deg;C';

            }else{
                vastus2.innerHTML=temp+'&deg;C ='+
                    (temp*9/5+32).toFixed(2) + '&deg;F';
            }
        }
    }
}