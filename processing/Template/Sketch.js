let character;
let target;
let behavior = 0;

function setup() {
    createCanvas(400, 400);
    character = [
        new Character(0,0),
        new Character(50,0),
        new Character(100,0),
        new Character(0,50)
    ];
}

function draw() {
    background(0);
    fill(255, 0, 0);
    noStroke();
    target = createVector(mouseX, mouseY);
    circle(target.x, target.y, 32);
    switch (behavior) {
        case 0:
            character[0].applyForce(character[0].arrive(target));
            write("Arrive");
            break;
        case 1:
            character[0].applyForce(character[0].seek(target));
            write("Seek");
            break;
        case 2:
            character[0].applyForce(character[0].pursue(target));
            write("Pursue");
            break;
        case 3:
            character[0].applyForce(character[0].flee(target));
            write("Flee");
            break;
        case 4:
            character[0].applyForce(character[0].evade(target));
            write("Evade");
            break;
    }
    character[0].update();
    character[0].wrapEdges();
    character[0].show();
}

function keyPressed() {
    behavior++;
    if (behavior > 4)
        behavior = 0;
}

function write(message) {
    textSize(32);
    text(message, 10, 30);
}