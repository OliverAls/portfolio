window.addEventListener("load", sidenVises);



function sidenVises() {
    console.log("siden vises");


    //TILFØJ HIDE FRA H1

    document.querySelector("#h1").classList.add("hide");

    //TILFØJ PULSE TIL LOGO
    document.querySelector("#frontpagesplash").classList.add("pulse_kf");


}


//SET TIMER OG DEREFTER FJERN PULSE OG ADD FADE-IN

setTimeout(function sidenVises() {
    document.querySelector("#frontpagesplash").classList.remove("pulse_kf");
    document.querySelector("#h1").classList.add("fadein_kf");
}, 3000);
