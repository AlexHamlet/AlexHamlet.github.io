//listners
document.getElementById('addOne').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = document.getElementById("addOne").value;
        answer++;
        document.getElementById("addOneAns").innerHTML = answer;
    }
});

document.getElementById('subOne').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("subOne").value);
        answer--;
        document.getElementById("subOneAns").innerHTML = answer;
    }
});

document.getElementById('inverse').addEventListener('click', function() {
    var answer = document.getElementById("inverse").checked;
    answer = !answer;
    document.getElementById("inverseAns").innerHTML = answer;
});

document.getElementById('secondNumM').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNum").value) * parseInt(document.getElementById('secondNum').value);
        document.getElementById("multiplyAns").innerHTML = answer;
    }
});

document.getElementById('secondNumD').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumD").value) / parseInt(document.getElementById('secondNumD').value);
        document.getElementById("divideAns").innerHTML = answer;
    }
});

document.getElementById('secondNumMod').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumMod").value) % parseInt(document.getElementById('secondNumMod').value);
        document.getElementById("modAns").innerHTML = answer;
    }
});

document.getElementById('secondNumA').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumA").value) + parseInt(document.getElementById('secondNumA').value);
        document.getElementById("addAns").innerHTML = answer;
    }
});

document.getElementById('secondNumS').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumS").value) - parseInt(document.getElementById('secondNumS').value);
        document.getElementById("subAns").innerHTML = answer;
    }
});

document.getElementById('secondNumL').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumL").value) < parseInt(document.getElementById('secondNumL').value);
        document.getElementById("lessAns").innerHTML = answer;
    }
});

document.getElementById('secondNumGe').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumGe").value) >= parseInt(document.getElementById('secondNumGe').value);
        document.getElementById("geAns").innerHTML = answer;
    }
});

document.getElementById('secondNumLe').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumLe").value) <= parseInt(document.getElementById('secondNumLe').value);
        document.getElementById("leAns").innerHTML = answer;
    }
});

document.getElementById('secondNumE').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumE").value) == parseInt(document.getElementById('secondNumE').value);
        document.getElementById("equalAns").innerHTML = answer;
    }
});

document.getElementById('secondNumNot').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumNot").value) != parseInt(document.getElementById('secondNumNot').value);
        document.getElementById("notAns").innerHTML = answer;
    }
});