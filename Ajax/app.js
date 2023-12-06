// Http Status Codes

// 200 : OK
// 403 : Forbidden
// 404 : Not Found --> Olmayan sayfaya erişmeye çalışma
// 505 : Internal Server Error

//ReadyStates -->Hold status of XMLHttpRequest
// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.

document.getElementById("btn").addEventListener("click",function(){
    //ajax için XMLHttpRequest objesi oluşturmalıyız.
    const xhr = new XMLHttpRequest();

});