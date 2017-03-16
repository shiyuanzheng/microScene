(function(){
    function w() {
        var r = document.documentElement;
        var a = r.getBoundingClientRect().width;
        if (a > 375 ){
            a = 375;
        } 
        //750/w = 100/font-size
        rem = a / 3.75;
        r.style.fontSize = rem + "px"
    }
    var t;
    w();
    window.addEventListener("resize", function() {
        clearTimeout(t);
        t = setTimeout(w, 300);
    }, false);
})();
