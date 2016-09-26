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
        var answer = parseInt(document.getElementById("subOne").value);
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
        var answer = parseInt(document.getElementById("firstNumM").value) * parseInt(document.getElementById('secondNumM').value);
        document.getElementById("multiplyAns").innerHTML = answer;
    }
});

document.getElementById('divDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumD").value) / parseInt(document.getElementById('secondNumD').value);
        document.getElementById("divideAns").innerHTML = answer;
    }
});

document.getElementById('modDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumMod").value) % parseInt(document.getElementById('secondNumMod').value);
        document.getElementById("modAns").innerHTML = answer;
    }
});

document.getElementById('addDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumA").value) + parseInt(document.getElementById('secondNumA').value);
        document.getElementById("addAns").innerHTML = answer;
    }
});

document.getElementById('subDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumS").value) - parseInt(document.getElementById('secondNumS').value);
        document.getElementById("subAns").innerHTML = answer;
    }
});

document.getElementById('ltDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumL").value) < parseInt(document.getElementById('secondNumL').value);
        document.getElementById("lessAns").innerHTML = answer;
    }
});

document.getElementById('gtDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumG").value) < parseInt(document.getElementById('secondNumG').value);
        document.getElementById("greatAns").innerHTML = answer;
    }
});

document.getElementById('gteDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumGe").value) >= parseInt(document.getElementById('secondNumGe').value);
        document.getElementById("geAns").innerHTML = answer;
    }
});

document.getElementById('lteDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumLe").value) <= parseInt(document.getElementById('secondNumLe').value);
        document.getElementById("leAns").innerHTML = answer;
    }
});

document.getElementById('sameDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumE").value) == parseInt(document.getElementById('secondNumE').value);
        document.getElementById("equalAns").innerHTML = answer;
    }
});

document.getElementById('notDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumNot").value) != parseInt(document.getElementById('secondNumNot').value);
        document.getElementById("notAns").innerHTML = answer;
    }
});

document.getElementById('isDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = document.getElementById("firstNumEqual").value;
        answer = parseInt(document.getElementById('secondNumEqual').value);
        document.getElementById("EqualAns").innerHTML = answer;
    }
});

document.getElementById('addeDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumAddEqual").value);
        answer += parseInt(document.getElementById('secondNumAddEqual').value);
        document.getElementById("AddEqualAns").innerHTML = answer;
        document.getElementById("firstNumAddEqual").value = answer;
        document.getElementById('secondNumAddEqual').value =  "";
    }
});

document.getElementById('subeDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumSubEqual").value);
        answer -= parseInt(document.getElementById('secondNumSubEqual').value);
        document.getElementById("SubEqualAns").innerHTML = answer;
        document.getElementById("firstNumSubEqual").value = answer;
        document.getElementById('secondNumSubEqual').value =  "";
    }
});

document.getElementById('multeDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumMultEqual").value);
        answer *= parseInt(document.getElementById('secondNumMultEqual').value);
        document.getElementById("MultEqualAns").innerHTML = answer;
        document.getElementById("firstNumMultEqual").value = answer;
        document.getElementById('secondNumMultEqual').value =  "";
    }
});

document.getElementById('diveDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumDivEqual").value);
        answer /= parseInt(document.getElementById('secondNumDivEqual').value);
        document.getElementById("DivEqualAns").innerHTML = answer;
        document.getElementById("firstNumDivEqual").value = answer;
        document.getElementById('secondNumDivEqual').value =  "";
    }
});

document.getElementById('modeDiv').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        var answer = parseInt(document.getElementById("firstNumModEqual").value);
        answer %= parseInt(document.getElementById('secondNumModEqual').value);
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