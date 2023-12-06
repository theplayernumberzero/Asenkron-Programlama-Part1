document.getElementById("ajax").addEventListener("click",getAllEmployees);

function getAllEmployees(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","employees.json",true);

    xhr.onload = function(){
        let list = document.getElementById("empoloyees");
        if(this.status == 200){
            const employees = JSON.parse(this.responseText);

            employees.forEach(function(employee){
                list.innerHTML += `
                    <tr>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.salary}</td>
                    </tr>
                `;
            });
        }
    }

    xhr.send();     //Request gönderme
}