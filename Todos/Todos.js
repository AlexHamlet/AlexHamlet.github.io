var list = [];
(function() {
    
    var add = document.getElementById('doit');
    var clear = document.getElementById('clear');
    var listitem = document.getElementById('listitem');
    document.getElementById('inpoot').addEventListener('keyup', enterKey);

    add.onclick = function() {
        var input = document.getElementById('inpoot').value;
        list.push(input);
        render();
    };
    
    clear.onclick = function(){
        list = [];
        render();
    };
    
    listitem.onclick = function(){
        alert("5");
        list = [];
        render();
    };
    
    function enterKey(event) {
        var input = document.getElementById("inpoot").value;
        if (event.keycode == 13 || event.which == 13) {
            list.push(input);
            render();
        }
    }


})();
function rid(event){
    list.splice(event,1);
    render();
}

    function render() {
        document.getElementById("physics").innerHTML = "";
        for (var i = 0; i < list.length; i++) {
            if (list[i] == "") {
                list[i] = "Do Nothing";
            }
            document.getElementById("physics").innerHTML += "<li id = '" + list[i] + "' onclick = 'rid("+i+")'>" + list[i] + "</li>";
        }
        document.getElementById('inpoot').value = "";
    }