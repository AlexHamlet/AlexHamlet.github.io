document.body.addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        document.getElementById('numerals').innerHTML = "";
        var input = parseInt(document.getElementById('decimals').value);
        if (!(isNaN(input)) && input < 1000000) {
            calculatenum(document.getElementById("decimals").value);
        }
        if (isNaN(input)) {
            calculatelet(document.getElementById('decimals').value);
        }
    }
});

function calculatenum(num) {
    while (num >= 1000) {
        num -= 1000;
        document.getElementById("numerals").innerHTML += "M";
    }
    if (num == 999) {
        num -= 900;
        document.getElementById('numerals').innerHTML += "CM";
    }
    while (num >= 500) {
        num -= 500;
        document.getElementById('numerals').innerHTML += "D";
    }
    if (num == 499) {
        num -= 400;
        document.getElementById('numerals').innerHTML += "CD";
    }
    while (num >= 100) {
        num -= 100;
        document.getElementById('numerals').innerHTML += "C";
    }
    if (num == 99) {
        num -= 90;
        document.getElementById('numerals').innerHTML += "XC";
    }
    while (num >= 50) {
        num -= 50;
        document.getElementById('numerals').innerHTML += "L";
    }
    if (num == 49) {
        num -= 40;
        document.getElementById('numerals').innerHTML += "XL";
    }
    while (num >= 10) {
        num -= 10;
        document.getElementById('numerals').innerHTML += "X";
    }
    if (num == 9) {
        num -= 9;
        document.getElementById('numerals').innerHTML += "IX";
    }
    while (num >= 5) {
        num -= 5;
        document.getElementById('numerals').innerHTML += "V";
    }
    if (num == 4) {
        num -= 4;
        document.getElementById('numerals').innerHTML += "IV";
    }
    if(!(num > 0)){
        document.getElementById('numerals').innerHTML = "Invalid Character";
    }
    while (num >= 1) {
        num -= 1;
        document.getElementById('numerals').innerHTML += "I";
    }
}

function calculatelet(letters) {
    var letter = [];
    var invalid = false;
    var counter = 0;
    var value = 0;
    var keepvalue = 0;
    for(var i = 0; i < letters.length; i++){
        letter[i] = letters[i];
        //alert(letter[i]);
    }
    while(counter < letters.length && invalid == false){
        switch(letter[counter]){
            case 'M':
                if(keepvalue < 1000){
                    value += 1000 - keepvalue * 2;
                }
                else{
                value += 1000;
                }
                keepvalue = 1000;
                break;
            case 'D':
                if(keepvalue < 500){
                    value += 500 - keepvalue * 2;
                }
                else{
                value +=500;
                }
                keepvalue = 500;
                break;
            case 'C':
                if(keepvalue < 100){
                    value += 100 - keepvalue * 2;
                }
                else{
                value += 100;
                }
                keepvalue = 100;
                break;
            case 'L':
                if(keepvalue < 50){
                    value += 50 - keepvalue * 2;
                }
                else{
                value += 50;
                }
                keepvalue = 50;
                break;
            case 'X':
                if(keepvalue < 10){
                value += 10 - (keepvalue * 2);
                }
                else{
                    value +=10;
                }
                keepvalue = 10;
                break;
            case 'V':
                if(keepvalue < 5){
                    value += 5 - keepvalue * 2;
                }
                else{
                value += 5;
                }
                keepvalue = 5;
                break;
            case 'I':
                value++;
                keepvalue = 1;
                break;
            default: value = "Invalid Character";
            invalid = true;
        }
        document.getElementById('numerals').innerHTML = value;
        counter++;
    }
}
