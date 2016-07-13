(function() {
    var squirtle = document.getElementById("squirtle");
    var bulbasaur = document.getElementById("bulbasaur");
    var charizard = document.getElementById("charizard");
    var captured = 0;
    squirtle.addEventListener('click', rid(squirtle));
    bulbasaur.addEventListener('click', rid(bulbasaur));
    charizard.addEventListener('click', rid(charizard));
    setInterval(move, 500);

    function move() {
        squirtle.style.transform = "translate(" + randomX() + "px, " + randomY() + "px)";
        bulbasaur.style.transform = "translate(" + randomX() + "px, " + randomY() + "px)";
        charizard.style.transform = "translate(" + randomX() + "px, " + randomY() + "px)";
    }

    function randomX() {
        var ranX = (Math.random() * 1000);
        return ranX;
    }

    function randomY() {
        var ranY = (Math.random() * 500);
        return ranY;
    }

    function rid(poke) {
        return function() {
            poke.style.backgroundImage = "none";
            captured++;
            if (captured == 3) {
                alert("Congratulations! \n You've Caught them all!");
            }
        };
    }
})();