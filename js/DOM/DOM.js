//capturar los datos de un input
//cuando el usuario haga click en el botón
//enviar
//change -> cuando un elemento input recibe cambios en su valor
//input -> value -> el valor de lo que el usuario escribió
//almacenar ese mensaje en un array
//luego de almacenar ese mensaje en un arrray
//length
//incrementar el valor del contador que se encuentra en
//nuestro icono

//#region  HTMLElements
const message = document.getElementById("message");
const btnSend = document.getElementById("send");
const counter = document.getElementById("counter");
//#endregion HTMLElements

//#region Variables
let _message, _counter, _messages;
//#endregion

//#region  Events
message?.addEventListener("change", function (event) {
  _message = event.target.value;
});

btnSend?.addEventListener("click", function () {
  if (!_messages) {
    _messages = [];
  }

  _messages.push(_message);
  refreshNotification();
});
//#endregion Events

function refreshNotification() {
  counter.innerText = _messages.length;

  if (_messages.length > 0) {
    counter.style.padding = ".5rem";
    counter.style.borderRadius = "50%";
    counter.style.backgroundColor = "orange";
    counter.style.fontSize = "8px";
  }
}
