//TODO add delete button
//TODO add insert button
//TODO add copy to next

var frames, layer;
const size = 4;
let currentFrame = 0;
let layer0, layer1, layer2, layer3;
let layers = [layer0, layer1, layer2, layer3];
let layerCompile = [];
let tempLayer;
let totalFrames = 0;

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
        layer += "<div class=\"row3\"><input type=\"checkbox\" class=\"led12\" /><input type=\"checkbox\" class=\"led13\" /><input type=\"checkbox\" class=\"led14\" /><input type=\"checkbox\" class=\"led15\" /></div> " +
            "<div class=\"row2\"><input type=\"checkbox\" class=\"led8\" /><input type=\"checkbox\" class=\"led9\" /><input type=\"checkbox\" class=\"led10\" /><input type=\"checkbox\" class=\"led11\" /></div> " +
            "<div class=\"row1\"><input type=\"checkbox\" class=\"led4\" /><input type=\"checkbox\" class=\"led5\" /><input type=\"checkbox\" class=\"led6\" /><input type=\"checkbox\" class=\"led7\" /></div> " +
            "<div class=\"row0\"><input type=\"checkbox\" class=\"led0\" /><input type=\"checkbox\" class=\"led1\" /><input type=\"checkbox\" class=\"led2\" /><input type=\"checkbox\" class=\"led3\" /></div> ";
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

    var generatedCode = "";

    generatedCode += "void " + codeName + "() { \n" + "clear();";

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
