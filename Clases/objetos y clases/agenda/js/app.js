let btnAnotar = document.getElementById("btn-anotar")
let titulo = document.getElementById("titulo")
let selectDato = document.getElementById("opcionDato")
let monto = document.getElementById("monto")
let ingresosHTML = document.getElementById("ingresosHTML")
let egresosHTML = document.getElementById("egresosHTML")
let total = document.getElementById("total")


btnAnotar.addEventListener("click", function(e){
    e.preventDefault();
    addDato();
    ingresoHTML();
    egresoHTML();
    mostrarTotal();
})


function addDato(){
    if(selectDato.value === "ingreso"){
        ingresos.push(new Ingreso(titulo.value,+monto.value,Date.now()))
    }else if(selectDato.value === "egreso"){
        egresos.push(new Egreso(titulo.value,+monto.value,Date.now()))
    }
}


function ingresoHTML(){
    let htmlIngresos = "";
    ingresos.forEach(function(ingreso){
        htmlIngresos+= `<div class="dato">
        <p>${ingreso.titulo}</p>
        <p>$<span>${ingreso.monto}</span></p>
        <button type=button  class="btn-dato">X</button>
    </div>`
    })
    ingresosHTML.innerHTML = htmlIngresos
}

function egresoHTML(){
    let htmlEgreso = "";
    egresos.forEach(function(egreso){
        htmlEgreso+= `<div class="dato">
        <p>${egreso.titulo}</p>
        <p>$<span>${egreso.monto}</span></p>
        <button type=button  class="btn-dato">X</button>
    </div>`
    });
    egresosHTML.innerHTML =htmlEgreso;
}

function mostrarTotal(){
    let totalIngresos = 0;
    ingresos.forEach(function(ingreso){
        totalIngresos+=ingreso.monto;
    })
    let totalEgresos = 0;
    egresos.forEach(function(egreso){
        totalEgresos += egreso.monto;
    })
    total.value = totalIngresos - totalEgresos;
}