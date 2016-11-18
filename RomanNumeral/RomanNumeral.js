document.body.addEventListener('keypress', function(e){
    var key = e.which||e.keyCode;
    if(key === 13 && document.getElementById('decimals').value < 10000000){
        document.getElementById('numerals').innerHTML = "";
        calculate(document.getElementById("decimals").value);
    }
});

function calculate(num){
    while(num >= 1000){
        num -= 1000;
        document.getElementById("numerals").innerHTML += "M";
    }
    if(num == 999){
        num -= 900;
        document.getElementById('numerals').innerHTML += "CM";
    }
    while(num >= 500){
        num -= 500;
        document.getElementById('numerals').innerHTML += "D";
    }
    if(num == 499){
        num -= 400;
        document.getElementById('numerals').innerHTML += "CD";
    }
    while(num >= 100){
        num -= 100;
        document.getElementById('numerals').innerHTML += "C";
    }
    if(num == 99){
        num -= 90;
        document.getElementById('numerals').innerHTML += "XC";
    }
    while(num >= 50){
        num -= 50;
        document.getElementById('numerals').innerHTML += "L";
    }
    if(num == 49){
        num -= 40;
        document.getElementById('numerals').innerHTML += "XL";
    }
    while(num >= 10){
        num -= 10;
        document.getElementById('numerals').innerHTML += "X";
    }
    if(num == 9){
        num -= 9;
        document.getElementById('numerals').innerHTML += "IX";
    }
    while(num >= 5){
        num -= 5;
        document.getElementById('numerals').innerHTML += "V";
    }
    if(num == 4){
        num -= 4;
        document.getElementById('numerals').innerHTML += "IV";
    }
    while(num >= 1){
        num -= 1;
        document.getElementById('numerals').innerHTML += "I";
    }
}