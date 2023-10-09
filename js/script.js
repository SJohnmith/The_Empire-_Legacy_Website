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

// let currentSlide = "one";
// window.addEventListener('scroll', () => {
//     slidesEls.forEach(slidesEl => {
//         if (window.scrollY >= slidesEl.offsetTop){
//             currentSlide = slidesEl.id;
//         }
//     });

//     navLinksEls.forEach(navLinksEl => {
//         if (navLinksEl.href.includes(currentSlide)) {
//             document.querySelector('.active').classList.remove('active');
//             navLinksEl.classList.add('active');
//         }
//     });
// });


window.onscroll = () => {
    slidesEls.forEach(slide => {
        let top = window.scrollY;
        let offset = slide.offsetTop - 150;
        let height = slide.offsetHeight;
        let id = slide.getAttribute('id');

        if(top >= offset && top <= offset + height) {
            navLinksEls.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
});