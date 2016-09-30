//listners
document.getElementById('addOneDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = document.getElementById("addOne").value;
        answer++;
        document.getElementById("addOneAns").innerHTML = answer;
    }
});

document.getElementById('subOneDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("subOne").value);
        answer--;
        document.getElementById("subOneAns").innerHTML = answer;
    }
});

document.getElementById('inverseDiv').addEventListener('click', function() {
    var answer = document.getElementById("inverse").checked;
    answer = !answer;
    document.getElementById("inverseAns").innerHTML = answer;
});

document.getElementById('multDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumM").value) * ParseFloat(document.getElementById('secondNumM').value);
        document.getElementById("multiplyAns").innerHTML = answer;
    }
});

document.getElementById('divDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumD").value) / ParseFloat(document.getElementById('secondNumD').value);
        document.getElementById("divideAns").innerHTML = answer;
    }
});

document.getElementById('modDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumMod").value) % ParseFloat(document.getElementById('secondNumMod').value);
        document.getElementById("modAns").innerHTML = answer;
    }
});

document.getElementById('addDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumA").value) + ParseFloat(document.getElementById('secondNumA').value);
        document.getElementById("addAns").innerHTML = answer;
    }
});

document.getElementById('subDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumS").value) - ParseFloat(document.getElementById('secondNumS').value);
        document.getElementById("subAns").innerHTML = answer;
    }
});

document.getElementById('ltDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumL").value) < ParseFloat(document.getElementById('secondNumL').value);
        document.getElementById("lessAns").innerHTML = answer;
    }
});

document.getElementById('gtDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumG").value) < ParseFloat(document.getElementById('secondNumG').value);
        document.getElementById("greatAns").innerHTML = answer;
    }
});

document.getElementById('gteDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumGe").value) >= ParseFloat(document.getElementById('secondNumGe').value);
        document.getElementById("geAns").innerHTML = answer;
    }
});

document.getElementById('lteDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumLe").value) <= ParseFloat(document.getElementById('secondNumLe').value);
        document.getElementById("leAns").innerHTML = answer;
    }
});

document.getElementById('sameDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumE").value) == ParseFloat(document.getElementById('secondNumE').value);
        document.getElementById("equalAns").innerHTML = answer;
    }
});

document.getElementById('notDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumNot").value) != ParseFloat(document.getElementById('secondNumNot').value);
        document.getElementById("notAns").innerHTML = answer;
    }
});

document.getElementById('isDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = document.getElementById("firstNumEqual").value;
        answer = ParseFloat(document.getElementById('secondNumEqual').value);
        document.getElementById("EqualAns").innerHTML = answer;
    }
});

document.getElementById('addeDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumAddEqual").value);
        answer += ParseFloat(document.getElementById('secondNumAddEqual').value);
        document.getElementById("AddEqualAns").innerHTML = answer;
        document.getElementById("firstNumAddEqual").value = answer;
        document.getElementById('secondNumAddEqual').value =  "";
    }
});

document.getElementById('subeDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumSubEqual").value);
        answer -= ParseFloat(document.getElementById('secondNumSubEqual').value);
        document.getElementById("SubEqualAns").innerHTML = answer;
        document.getElementById("firstNumSubEqual").value = answer;
        document.getElementById('secondNumSubEqual').value =  "";
    }
});

document.getElementById('multeDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumMultEqual").value);
        answer *= ParseFloat(document.getElementById('secondNumMultEqual').value);
        document.getElementById("MultEqualAns").innerHTML = answer;
        document.getElementById("firstNumMultEqual").value = answer;
        document.getElementById('secondNumMultEqual').value =  "";
    }
});

document.getElementById('diveDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumDivEqual").value);
        answer /= ParseFloat(document.getElementById('secondNumDivEqual').value);
        document.getElementById("DivEqualAns").innerHTML = answer;
        document.getElementById("firstNumDivEqual").value = answer;
        document.getElementById('secondNumDivEqual').value =  "";
    }
});

document.getElementById('modeDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = ParseFloat(document.getElementById("firstNumModEqual").value);
        answer %= ParseFloat(document.getElementById('secondNumModEqual').value);
        document.getElementById("ModEqualAns").innerHTML = answer;
        document.getElementById("firstNumModEqual").value = answer;
        document.getElementById('secondNumModEqual').value =  "";
    }
});

document.getElementById('andDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = document.getElementById("firstAnd").checked && document.getElementById('secondAnd').checked;
        document.getElementById("AndAns").innerHTML = answer;
    }
});

document.getElementById('andDiv').addEventListener('click', function(e) {
    var answer = document.getElementById("firstAnd").checked && document.getElementById('secondAnd').checked;
    document.getElementById("AndAns").innerHTML = answer;
});

document.getElementById('orDiv').addEventListener('click', function(e) {
    var answer = document.getElementById("firstOr").checked || document.getElementById('secondOr').checked;
    document.getElementById("OrAns").innerHTML = answer;
});

document.getElementById('weirdDiv').addEventListener('click', function(e) {
    var answer = document.getElementById("firstW").checked;
    if (answer) {
        document.getElementById("weirdAns").innerHTML = "First";
    }
    else {
        document.getElementById("weirdAns").innerHTML = "Second";
    }
});