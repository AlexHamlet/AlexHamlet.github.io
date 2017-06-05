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

for (var p = 0; p < layers.length; p++) {
    layers[p] = [];
}

function generateTable() {

    document.getElementById("nav").innerHTML = "<input type=\"Submit\" value=\"Previous\" onclick=\"previousFrame()\"/>" +
        "<input type=\"Submit\" Value=\"Finish\" onclick=\"finishCode()\"/>" +
        "<input type=\"Submit\" value=\"Next\" onclick=\"nextFrame()\" />";
    formBuilder(frames);
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
    if (layers[0][currentFrame + 1] != undefined || confirm("Create new frame? \n This cannot be undone.")) {
        saveFrame();
        currentFrame++;
        formBuilder();
    }
}

function finishCode() {
    saveFrame();
    totalFrames = layers[0].length;
    var codeName = prompt("What will your animation be called?");
    if (codeName == "") {
        codeName = "iWouldHavePreferedAName";
    }

    generatedCode = "";
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
