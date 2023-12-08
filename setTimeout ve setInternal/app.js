//Window objesi methodlarıdır.

//Set Timeout   -->Belirli bir işlem belirlediğimiz süre sonunda yapılabilir

setTimeout(function(){

    console.log("Naber");
},2000 ); //ms

//Set Interval  -->Belirlediğimiz aralıklar ile fonksiyonu tekrar tekrar çalıştırır.

let i = 0;
setInterval(function(){
    i++;
    console.log(i);

},2000);

//Clear Interval    -->Interval ı durdurur.

let k = 0;
let value = setInterval(function(){
    k++;
    console.log(k);

},2000);

document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);   //Butona basılınca setInterval çalışmayacak.
});