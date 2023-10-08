// Self-Invoking
(function (global){
    var g = {};
    
    function myFcn(){
        document.getElementById("demo").innerHTML = "Are we targetting this ID? We got the paragraph";
    };

    // On page loaded (before images or CSS)
    document.addEventListener("DOMContentLoaded", myFcn);

    global.$g = g;
})(window);



const navLinksEls = document.querySelectorAll(".nav_link");
const slidesEls = document.querySelectorAll(".slides");

let currentSlide = "one";
window.addEventListener('scroll', () => {
    slidesEls.forEach(slidesEl => {
        if (window.scrollY >= slidesEl.offsetTop){
            currentSlide = slidesEl.id;
        }
    });

    navLinksEls.forEach(navLinksEl => {
        if (navLinksEl.href.includes(currentSlide)) {
            document.querySelector('.active').classList.remove('active');
            navLinksEl.classList.add('active');
        }
    });
});
