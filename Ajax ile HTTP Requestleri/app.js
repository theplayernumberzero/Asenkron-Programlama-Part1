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

    //POST Request

    post(url, data, callback){

        this.xhr.open("POST",url);

        this.xhr.setRequestHeader("Contect-type","application/json");   //veriyi nasıl göndereceğimizi belirtiyoruz (form verisi mi json mu belirtme yeri)

        this.xhr.onload = () => {
            if(this.xhr == 201){    //Post için 201 status code u

                callback(null,this.xhr.responseText);   //Oluşturulan kaynak response olarak gelecek
            }
            else{
                callback("Bir hata oluştu..",null);
            }
        };

        this.xhr.send(JSON.stringify(data));
    }

    //PUT Request

    put(url, data, callback){

        this.xhr.open("PUT",url);   //Put ile id si belirtilen obje değerleri silinip baştan yazılır

        this.xhr.setRequestHeader("Contect-type","application/json");

        this.xhr.onload = () => {
            if(this.xhr == 200){

                callback(null,"Silme işlemi basarili..");
            }
            else{
                callback("Bir hata oluştu..",null);
            }
        };

        this.xhr.send(JSON.stringify(data));
    }

    //DELETE Request

    delete(url,callback){

        // const temp = this;  //this sorunu çözümü için en ilkel yolu
        this.xhr.open("DELETE",url);   

        this.xhr.onload = () => {     
            if(temp.xhr.status == 200){
                callback(null,this.xhr.responseText);   //Başarılı ise boş bir obje dönecek
            }
            else{
                callback("Bir hata oluştu..",null);
            }

        };

        this.xhr.send();
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

request.post("https://jsonplaceholder.typicode.com/albums",{userid:2,title:"CR7"}, function(err, album){    //JSON a object i stringfy ile dönüştürerek gönderiyoruz

    if(error === null){
        console.log(album);
    }
    else{
        console.log(err);
    }
});

request.put("https://jsonplaceholder.typicode.com/albums/10",{userid:58,title:"Neymar JR."}, function(err, album){    //JSON a object i stringfy ile dönüştürerek gönderiyoruz

    if(error === null){
        console.log(album);
    }
    else{
        console.log(err);
    }
});

request.delete("https://jsonplaceholder.typicode.com/albums/10",function(error,response){

    if(error === null){
        console.log(response);
    }
    else{
        console.log(error);
    }
});