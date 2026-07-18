//============================
// FORMULARIO
//============================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    alert("¡Gracias por contactarnos! Su mensaje ha sido enviado correctamente.");

    formulario.reset();

});

//============================
// BOTÓN VOLVER ARRIBA
//============================

const arriba = document.getElementById("arriba");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        arriba.style.display = "block";

    }else{

        arriba.style.display = "none";

    }

});

arriba.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

//============================
// EFECTO EN EL MENÚ
//============================

const header = document.querySelector("header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        header.style.background = "#1B5E20";

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

    }else{

        header.style.background = "#2E7D32";

        header.style.boxShadow = "none";

    }

});