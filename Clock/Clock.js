(function() {
    
    //trig lists
    var half = .5;
    var frac = (Math.sqrt(3)) / 2;
    var posx = [half, frac, 1, frac, half, 0, -half, -frac, -1, -frac, -half, 0];
    var posy = [frac, half, 0, -half, -frac, -1, -frac, -half, 0, half, frac, 1];
    
    //draws inner circle
    var sc = document.getElementById("seconds");
    var sctx = sc.getContext("2d");
    sctx.beginPath();
    var sRadius = 138;
    sctx.arc(150, 150, 150, 0, 2 * Math.PI);
    sctx.stroke();
    initSeconds(); 
    
    //draws middle circle
    var mc = document.getElementById("minutes");
    var mctx = mc.getContext("2d");
    mctx.beginPath();
    var mRadius = 238;
    mctx.arc(250, 250, 250, 0, 2 * Math.PI);
    mctx.stroke();
    initMinutes();
    
    //draws outer circle
    var hc = document.getElementById("hours");
    var hctx = hc.getContext("2d");
    hctx.beginPath();
    var hRadius = 338;
    hctx.arc(350, 350, 350, 0, 2 * Math.PI);
    hctx.stroke();
    initHours();

    
               
               //ctx.font = "25px Arial";
               //(--> rotate method: ctx.rotate(Math.PI*2/(i*6));)
//
// :) I'm sure it was :P
    //<insert acknowledgement that 12 is less than 60 here>
    function initSeconds() {
        for (var i = 1; i <= 12; i++) {
            sctx.fillText(i * 5, posx[i - 1] * sRadius + 150, -(posy[i - 1] * sRadius - 150));
        }
    }

    function initMinutes() {
        for (var i = 1; i <= 12; i++) {
            mctx.fillText(i * 5, posx[i - 1] * mRadius + 250, -(posy[i - 1] * mRadius - 250));
        }
    }

    function initHours() {
        for (var i = 1; i <= 12; i++) {
            hctx.fillText(i,posx[i - 1] * hRadius + 350, -(posy[i - 1] * hRadius - 350));
        }
    }

})();