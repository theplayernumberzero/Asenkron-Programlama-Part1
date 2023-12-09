//Bir fonksiyon içine başka bir fonksiyon gönderme
//Callback Function --> Normal bir fonksiyon, ancak biz bu fonksiyonu başka fonksiyonlara parametre olarak gönderebiliyoruz.

const langs = ["Python","C","Java"];

langs.forEach(function(lang){
    console.log(lang);
});

document.getElementById("btn").addEventListener("click",function(){

    console.log("Tikla");
});

function process1(){
    console.log("process1");
}
function process2(){
    console.log("process2");
}

//Süre konmadığı için SYNC gibi çalışır.
process1();
process2();

function process3(){
    setTimeout(function(){
        console.log("process3");
    },3000);
}
function process4(){
    console.log("process4");
}

//ASYNC yapıda çalışır. Birbirini beklemez
process3();
process4();
console.log("Naber");   //Önce process4 sonra console.log sonra process3

//SYNC şekilde çalıştırma için "callback" paramtre olarak kullanılır.

function process5(callback){
    setTimeout(function(){
        console.log("process5");
        callback();     //callbackin çalışması için yazmayı unutma
    },3000);
}
function process6(){
    setTimeout(function(){
        console.log("process6");
    },2000);
}

process5(process6);     //3 saniye sonra "process5" yazılır, ondan 2 saniye sonra "process6" yazılır

function addLang(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
        callback();
    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}

addLang("JavaScript",getAllLangs);