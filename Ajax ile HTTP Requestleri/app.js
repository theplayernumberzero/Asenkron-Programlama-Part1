//Ajax, callback, HTTP request

class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    //GET Request
    
    get(url,callback){

        // const temp = this;  //this sorunu çözümü için en ilkel yolu
        this.xhr.open("GET",url);   //Bağlantı açıldı

        this.xhr.onload = () => {     //Response başarılı bir şekilde gelirse
            if(temp.xhr.status == 200){
                callback(null,this.xhr.responseText);    //İsteğimiz bitti
            }
            else{
                callback("Bir hata oluştu..",null);
            }

        };  //arrow function ile oto bind yapılır

        this.xhr.send();    //Request gönderildi
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums",function(error,response){

    if(error === null){
        console.log(response);
    }
    else{
        console.log(error);
    }
});