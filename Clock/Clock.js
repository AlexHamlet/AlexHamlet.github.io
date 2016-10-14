(function() {
    
    //sizing tests
    if(window.innerHeight > window.innerWidth){
        var size = window.innerWidth -50;
    }
    else{
        var size = window.innerHeight -50;
    }
    var ring2 = size / 5 * 4;
    var ring3 = size / 5 * 3;

    //attempt at getting the time
    var date = new Date();
    var seconds = Math.PI / 30 * date.getSeconds();
    var minutes = Math.PI / 30 * date.getMinutes() + seconds / 60;
    var hour = Math.PI / 6 * date.getHours() + minutes / 12;

    //draws inner circle
    var sc = document.getElementById("seconds");
    var sctx = sc.getContext("2d");
    sc.height = ring3;
    sc.width = ring3;
    sctx.font = "4em Courier New";
    sctx.beginPath();
    sctx.arc(ring3 / 2, ring3 / 2, ring3 / 2 - 1, 0, 2 * Math.PI);
    sctx.stroke();
    initSeconds();

    //draws middle circle
    var mc = document.getElementById("minutes");
    var mctx = mc.getContext("2d");
    mc.height = ring2;
    mc.width = ring2;
    mctx.font = "6em Comic Sans MS";
    mctx.beginPath();
    mctx.arc(ring2 / 2, ring2 / 2, ring2 / 2 - 1, 0, 2 * Math.PI);
    mctx.stroke();
    initMinutes();

    //draws outer circle
    var hc = document.getElementById("hours");
    var hctx = hc.getContext("2d");
    hc.height = size;
    hc.width = size;
    hctx.font = "8em Impact";
    hctx.beginPath();
    hctx.arc(size / 2, size / 2, size / 2 - 1, 0, 2 * Math.PI);
    hctx.stroke();
    initHours();
    
    
    function initSeconds() {
        sctx.translate(ring3 / 2, ring3 / 2);
        sctx.rotate(-seconds);
        for (var i = 1; i <= 12; i++) {
            sctx.rotate(Math.PI / 6);
            sctx.fillText((i * 5) % 60, -5, -ring3 / 2 + 60);
        }
    }

    function initMinutes() {
        mctx.translate(ring2 / 2, ring2 / 2);
        mctx.rotate(-minutes);
        for (var i = 1; i <= 12; i++) {
            mctx.rotate(Math.PI / 6);
            mctx.fillText((i * 5) % 60, -7, -ring2 / 2 + 60);
        }
    }

    function initHours() {
        hctx.translate(size / 2, size / 2);
        hctx.rotate(-hour);
        for (var i = 1; i <= 12; i++) {
            hctx.rotate(Math.PI / 6);
            hctx.fillText(i, -9, -size / 2 + 70);
        }
    }

})();