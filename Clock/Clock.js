(function() {
    /*This is raw awesomeness ;) nice job!*/

    //trig lists
    //var half = .5;
    //var frac = (Math.sqrt(3)) / 2;
    //var posx = [half, frac, 1, frac, half, 0, -half, -frac, -1, -frac, -half, 0];
    //var posy = [frac, half, 0, -half, -frac, -1, -frac, -half, 0, half, frac, 1];

    //attempt at getting the time
    var date = new Date();
    var seconds = Math.PI / 30 * date.getSeconds();
    var minutes = Math.PI / 30 * date.getMinutes() + seconds / 60;
    var hour = Math.PI / 6 * date.getHours() + minutes / 12;

    //draws inner circle
    var sc = document.getElementById("seconds");
    var sctx = sc.getContext("2d");
    sctx.font = "12px Courier New";
    sctx.beginPath();
    sctx.arc(150, 150, 149, 0, 2 * Math.PI);
    sctx.stroke();
    initSeconds();

    //draws middle circle
    var mc = document.getElementById("minutes");
    var mctx = mc.getContext("2d");
    mctx.font = "16px Comic Sans MS";
    mctx.beginPath();
    mctx.arc(250, 250, 249, 0, 2 * Math.PI);
    mctx.stroke();
    initMinutes();

    //draws outer circle
    var hc = document.getElementById("hours");
    var hctx = hc.getContext("2d");
    hctx.font = "20px Impact";
    hctx.beginPath();
    hctx.arc(350, 350, 349, 0, 2 * Math.PI);
    hctx.stroke();
    initHours();
    
    //<insert acknowledgement that 12 is less than 60 here>
    function initSeconds() {
        sctx.translate(150, 150);
        sctx.rotate(-seconds);
        for (var i = 1; i <= 12; i++) {
            sctx.rotate(Math.PI / 6);
            sctx.fillText((i * 5) % 60, -5, -135);
        }
    }

    function initMinutes() {
        mctx.translate(250, 250);
        mctx.rotate(-minutes);
        for (var i = 1; i <= 12; i++) {
            mctx.rotate(Math.PI / 6);
            mctx.fillText((i * 5) % 60, -7, -232);
        }
    }

    function initHours() {
        hctx.translate(350, 350);
        hctx.rotate(-hour);
        for (var i = 1; i <= 12; i++) {
            hctx.rotate(Math.PI / 6);
            hctx.fillText(i, -9, -329);
        }
    }

})();