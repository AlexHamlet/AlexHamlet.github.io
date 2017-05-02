var name, event, guest;

document.querySelector('body').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        name = document.getElementById('name').value;
        event = document.getElementById('event').value;
        guest = document.getElementById('guest').value;
        alert("Thank you " + name + "!\n" + guest + " would love to attend " + event + " with you!");
    }
});

document.getElementById('confirm').onclick = function() {
    name = document.getElementById('name').value;
    event = document.getElementById('event').value;
    guest = document.getElementById('guest').value;
    alert("Thank you " + name + "!\n" + guest + " would love to attend " + event + " with you!");
};
