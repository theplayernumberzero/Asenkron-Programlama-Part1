//bind ödünç almada işimize yarar
//Önceki kısımlardaki objeleri kaybetmemek adına bind kullanılabilir.

//Arrow function ise bind i otamatik olarak kullanıyor
const person = {
    age:25,

    tellAge: function(){

        //this - Person
        console.log(this.age);
    }.bind(this),    //Function içindeki this i Window objesine çektik. Window un age diye attribute u olmadığı için hata verecek.

    tellAge2: () =>{    //Arrow function bind ile this i bağlamışız gibi davranıyor

        console.log(this.age);
    }
    //this - Window
    
}

person.tellAge();   //HATA
person.tellAge2();  //HATA