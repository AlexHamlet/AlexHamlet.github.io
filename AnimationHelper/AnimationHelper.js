//TODO add delete button
//TODO add insert button
//TODO add copy to next

/*Notes:
The three dimensional array contains: Layers, Frames, and Leds.  In that order.
The generated code abuses persistence of vision, look it up!
*/

var frames, layer, tempLayer, tempText;
const size = 4;
let currentFrame = 0;
let layer0, layer1, layer2, layer3;
let layers = [layer0, layer1, layer2, layer3];
let layerCompile = [];
let totalFrames = 0;
let generatedCode = "";
let codeName = "";
let setup = "";

for (var p = 0; p < layers.length; p++) {
    layers[p] = [];
}

function generateTable() {

    document.getElementById("nav").innerHTML = "<input type=\"Submit\" value=\"Previous\" onclick=\"previousFrame()\"/>" +
        "<input type=\"Submit\" Value=\"Finish\" onclick=\"finishCode()\"/>" +
        "<input type=\"Submit\" value=\"Next\" onclick=\"nextFrame()\" />";
    document.getElementById("nav2").innerHTML = "<input type=\"Submit\" value=\"Delete Frame\" onclick=\"deleteFrame()\"/>" +
        "<input type=\"Submit\" Value=\"Insert Frame\" onclick=\"insertFrame()\"/>" +
        "<input type=\"Submit\" value=\"Copy to Next\" onclick=\"copyNext()\" />";
    formBuilder();
}

function formBuilder() {

    for (var p = 0; p < size; p++) {
        layer = "Layer " + (p + 1) + "of frame " + (currentFrame + 1);
        layer += "<div class=\"row3\"><input type=\"checkbox\" class=\"led3\" /><input type=\"checkbox\" class=\"led7\" /><input type=\"checkbox\" class=\"led11\" /><input type=\"checkbox\" class=\"led15\" /></div> " +
            "<div class=\"row2\"><input type=\"checkbox\" class=\"led2\" /><input type=\"checkbox\" class=\"led6\" /><input type=\"checkbox\" class=\"led10\" /><input type=\"checkbox\" class=\"led14\" /></div> " +
            "<div class=\"row1\"><input type=\"checkbox\" class=\"led1\" /><input type=\"checkbox\" class=\"led5\" /><input type=\"checkbox\" class=\"led9\" /><input type=\"checkbox\" class=\"led13\" /></div> " +
            "<div class=\"row0\"><input type=\"checkbox\" class=\"led0\" /><input type=\"checkbox\" class=\"led4\" /><input type=\"checkbox\" class=\"led8\" /><input type=\"checkbox\" class=\"led12\" /></div> ";
        document.getElementById("layer" + p).innerHTML = layer;
    }

    if (layers[0][currentFrame] != undefined)
        for (var p = 0; p < size; p++) {
            tempLayer = layers[p];
            for (var s = 0; s < 16; s++) {
                var x = document.querySelectorAll(".led" + s);
                x[p].checked = tempLayer[currentFrame][s];
            }
        }
}

function previousFrame() {
    if (currentFrame > 0) {
        saveFrame();
        currentFrame--;
        formBuilder();
    }
}

function nextFrame() {
    saveFrame();
    currentFrame++;
    formBuilder();
}

function finishCode() {

    saveFrame();
    totalFrames = layers[0].length;
    codeName = prompt("What will your animation be called?");
    if (codeName == "") {
        codeName = "iWouldHavePreferedAName";
    }

    setup = "int l0 = 3;\n" +
        "int l1 = 4;\n" +
        "int l2 = 5;\n" +
        "int l3 = 6;\n\n" +

        "int x0y0 = A4;\n" +
        "int x0y1 = A3;\n" +
        "int x0y2 = A2;\n" +
        "int x0y3 = A1;\n\n" +

        "int x1y0 = A5;\n" +
        "int x1y1 = A0;\n" +
        "int x1y2 = 8;\n" +
        "int x1y3 = 9;\n\n" +

        "int x2y0 = 1;\n" +
        "int x2y1 = 7;\n" +
        "int x2y2 = 10;\n" +
        "int x2y3 = 11;\n\n" +

        "int x3y0 = 0;\n" +
        "int x3y1 = 2;\n" +
        "int x3y2 = 12;\n" +
        "int x3y3 = 13;\n\n" +

        "int col0[] = {x0y0, x0y1, x0y2, x0y3};\n" +
        "int col1[] = {x1y0, x1y1, x1y2, x1y3};\n" +
        "int col2[] = {x2y0, x2y1, x2y2, x2y3};\n" +
        "int col3[] = {x3y0, x3y1, x3y2, x3y3};\n" +
        "int led[4][4] = {{x0y0, x0y1, x0y2, x0y3}, {x1y0, x1y1, x1y2, x1y3}, {x2y0, x2y1, x2y2, x2y3}, {x3y0, x3y1, x3y2, x3y3}};\n" +
        "int layer[] = {l0, l1, l2, l3};\n\n" +

        "int timedelay = 200;\n" +
        "int animationtime = 50;\n" +
        "int rows = 4;\n" +
        "int columns = 4;\n" +
        "int layers = 4;\n\n" +

        "void setup() {\n\n" +

        "pinMode(l0, OUTPUT);\n" +
        "pinMode(l1, OUTPUT);\n" +
        "pinMode(l2, OUTPUT);\n" +
        "pinMode(l3, OUTPUT);\n\n" +

        "pinMode(x0y0, OUTPUT);\n" +
        "pinMode(x0y1, OUTPUT);\n" +
        "pinMode(x0y2, OUTPUT);\n" +
        "pinMode(x0y3, OUTPUT);\n\n" +

        "pinMode(x1y0, OUTPUT);\n" +
        "pinMode(x1y1, OUTPUT);\n" +
        "pinMode(x1y2, OUTPUT);\n" +
        "pinMode(x1y3, OUTPUT);\n\n" +

        "pinMode(x2y0, OUTPUT);\n" +
        "pinMode(x2y1, OUTPUT);\n" +
        "pinMode(x2y2, OUTPUT);\n" +
        "pinMode(x2y3, OUTPUT);\n\n" +

        "pinMode(x3y0, OUTPUT);\n" +
        "pinMode(x3y1, OUTPUT);\n" +
        "pinMode(x3y2, OUTPUT);\n" +
        "pinMode(x3y3, OUTPUT);\n" +
        "}\n\n\n" +

        "void loop() {\n" +
        codeName + "();" +
        "\n}\n\n" +

        "void clear() {\n" +
        "for (int p = 0; p < rows; p++) {\n" +
        "for (int s = 0; s < columns; s++) {\n" +
        "digitalWrite(led[p][s], LOW);\n" +
        "}\n" +
        "}\n" +
        "for (int p = 0; p < layers; p++) {\n" +
        "digitalWrite(layer[p], LOW);\n" +
        "}\n" +
        "}\n\n"

    generatedCode = setup;
    tempText = "";

    generatedCode += "void " + codeName + "() { \n" + "clear();\n";
    generatedCode += "for(int frames = 0;frames < " + totalFrames + "; frames++) {\n";
    generatedCode += "for(int s = 0;s < animationtime;s++) {\n";
    generatedCode += "for(int currentLayer = 0;currentLayer < " + layers.length + ";currentLayer++) {\n" +
        "digitalWrite(layer[currentLayer], HIGH);\n";

    for (var p = 0; p < layers.length; p++) {
        tempText += "if(currentLayer == " + p + ") {\n";
        for (var s = 0; s < totalFrames; s++) {
            if (layers[p][s].some(checkTrue)) {
                tempText += "if(frames == " + s + ") {\n";
                for (var t = 0; t < 16; t++) {
                    if (layers[p][s][t] == true) {
                        tempText += "digitalWrite(led[" + Math.floor(t / 4) + "][" + (t % 4) + "], HIGH); \n";
                    }
                }
                tempText += "}\n";
            }
        }
        tempText += "}\n";
    }
    tempText += "delay(1);\nclear();\n}\n}\n}\n}\n";

    generatedCode += tempText;

    document.getElementById("endCode").innerHTML = generatedCode;


}

function saveFrame() {
    for (var p = 0; p < size; p++) {
        tempLayer = p;
        layerCompile = [];
        for (var s = 0; s < 16; s++) {
            var x = document.querySelectorAll(".led" + s);
            layerCompile.push(x[tempLayer].checked);

        }
        layers[p][currentFrame] = layerCompile;
    }
}

function checkTrue(value) {
    return (value == true);
}

function deleteFrame() {
    if (layers[0].length > 1) {
        for (var p = 0; p < size; p++) {
            layers[p].splice(currentFrame, 1);
        }
        if (currentFrame > 0) {
            currentFrame -= 1;
        }
        formBuilder();
    }
}

function insertFrame() {
    for (var p = 0; p < size; p++) {
        layers[p].splice(currentFrame, 0, []);
    }
    formBuilder();
}

function copyNext() {
    saveFrame();
    for (var p = 0; p < size; p++) {
        layers[p][currentFrame + 1] = layers[p][currentFrame];
    }
    nextFrame();
}
