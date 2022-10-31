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