// Http Status Codes

// 200 : OK
// 403 : Forbidden
// 404 : Not Found --> Olmayan sayfaya erişmeye çalışma
// 505 : Internal Server Error

//ReadyStates -->Hold status of XMLHttpRequest
// 0	UNSENT	Client has been created. open() not called yet.
// 1	server connection established.
// 2	request received.
// 3	processing request
// 4	req finished, response is ready

document.getElementById("btn").addEventListener("click",function(){
    //ajax için XMLHttpRequest objesi oluşturmalıyız.
    const xhr = new XMLHttpRequest();

    //bağlantı açıyoruz
    xhr.open("GET","example.txt",true);     //Request tipi, veri alınacak yer, async mi

    //ESKİ YÖNTEM
    // xhr.onreadystatechange = function(){    //Ready state değiştikçe çalışır

    //     console.log(this.readyState);  //xhr içindeyiz
    //     console.log(this.status);   //hhtp status code

    //     if(this.status == 200 && this.readyState == 4){     //Response un hazır olup olmadığı böyle kontrol edilir.
    //         console.log(this.responseText); //yazdırma
    //     }
    // }

    //response hazır olunca çalışır
    xhr.onload = function(){ //readyState = 4 olunca çalışır
        if(this.status == 200){
            document.getElementById("ajax").textContent = this.responseText;    //içeriği tet olarak aldık
        }
    }

    xhr.onprogress = function(){    //readyState = 3 olunca çalışır
        console.log("Process işleniyor");
    }

    xhr.send();     //POST req yapsaydık string değer girmek zorunda kalacaktık.
});