document.body.addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        if (document.getElementById("int").checked) {
            if (document.getElementById("low").value < document.getElementById("high").value) {
                var low = document.getElementById("low").value;
                var high = document.getElementById("high").value;
            }
            else {
                var high = document.getElementById("low").value;
                var low = document.getElementById("high").value;
            }
            var diff = parseFloat(high) - parseFloat(low);
            var many = document.getElementById("many").value;
            document.getElementById('numbers').innerHTML = "";
            for (var i = 0; i < many; i++) {
                if (i == 0) {
                    document.getElementById("numbers").innerHTML += " " + Math.floor(Math.random() * (diff + 1) + parseFloat(low));
                }
                else {
                    document.getElementById("numbers").innerHTML += ", " + Math.floor(Math.random() * (diff + 1) + parseFloat(low));
                }
            }
        }else{
            if (document.getElementById("low").value < document.getElementById("high").value) {
                var low = document.getElementById("low").value;
                var high = document.getElementById("high").value;
            }
            else {
                var high = document.getElementById("low").value;
                var low = document.getElementById("high").value;
            }
            var diff = parseFloat(high) - parseFloat(low);
            var many = document.getElementById("many").value;
            document.getElementById('numbers').innerHTML = "";
            for (var i = 0; i < many; i++) {
                if (i == 0) {
                    document.getElementById("numbers").innerHTML += " " + Math.floor((Math.random() * (diff + 1) + parseFloat(low)) * 100) / 100;
                }
                else {
                    document.getElementById("numbers").innerHTML += ", " + Math.floor((Math.random() * (diff + 1) + parseFloat(low)) * 100) / 100;
                }
            }
        }
    }
});
