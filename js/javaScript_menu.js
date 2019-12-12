// inspiration for the javascript code
// For the overlay-menu I got a part of the code from this link beneath
// https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
// For the top-menu I got a part of the code from this link beneath
//https://www.w3schools.com/howto/howto_js_navbar_slide.asp

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    /* als je het menu niet van links maar van boven naar beneden wil laten sliden dan geef je bij .style.height="100%" */
    // als je het menu gewoon wil laten verschijnen en verdwijnen werk je met display  .style.display="block" of .style.display="none";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    /*  */
}
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};
window.onload=function(){loadFunction()};

function loadfunction(){
    if (w <= 950) {
        document.getElementById("navbar").style.top = "-50px";
        document.getElementById("button_extra").style.display = "block";
        document.getElementById("booking_button_navbar").style.display = "none";
    }
}
function scrollFunction() {
    var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    var h= document.body.scrollTop || document.documentElement.scrollTop

    if (h > 500 || w <= 950) {
        document.getElementById("navbar").style.top = "-50px";
        document.getElementById("button_extra").style.display = "block";
        document.getElementById("booking_button_navbar").style.display = "none";

    } else {
        document.getElementById("navbar").style.top = "0px";
        document.getElementById("button_extra").style.display = "none";
        document.getElementById("booking_button_navbar").style.display = "block";

    }
}
