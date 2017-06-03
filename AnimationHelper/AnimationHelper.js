var frames, layer;
const size = 4;
let currentFrame = 0;
let layer0, layer1, layer2, layer3 = [];
let layerCompile = [];
let tempLayer;

function generateTable() {
    formBuilder(frames);
}

function formBuilder() {
    for (var p = 0; p < size; p++) {
        layer = "Layer " + (p + 1) + "of frame " + (currentFrame + 1);
        layer += '<div class="row"><input type="radio" class="led30" /><input type="radio" class="led31" /><input type="radio" class="led32" /><input type="radio" class="led33" /></div><div class="row"><input type="radio" class="led20" /><input type="radio" class="led21" /><input type="radio" class="led22" /><input type="radio" class="led23" /></div><div class="row"><input type="radio" class="led10" /><input type="radio" class="led11" /><input type="radio" class="led12" /><input type="radio" class="led13" /></div><div class="row"><input type="radio" class="led00" /><input type="radio" class="led01" /><input type="radio" class="led02" /><input type="radio" class="led03" /></div>';
        document.getElementById("layer" + p).innerHTML = layer;
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

}

function saveFrame() {
    // for(var p = 0;p < size;p++){
    //     layerCompile = [];
    //     tempLayer = document.getElementById("layer" + p);
    //     layerCompile.push(tempLayer.getElementsByClassName("led00"));
    //     layerCompile.push(tempLayer.getElementsByClassName("led01"));
    //     layerCompile.push(tempLayer.getElementsByClassName("led02"));
    //     layerCompile.push(tempLayer.getElementsByClassName("led03"));
    //     layerCompile.push(tempLayer.getElementsByClassName("led10"));
    //     layerCompile.push(tempLayer.getElementsByClassName("led11"));
    //     layerCompile.push(tempLayer.getElementsByClassName("led12"));
    //     layerCompile.push(tempLayer.getElementsByClassName("led13"));
    //     layerCompile.push(tempLayer.getElementsByClassName("led20"));
    //     layerCompile.push(tempLayer.getElementsByClassName("led21"));
    //     layerCompile.push(tempLayer.getElementsByClassName("led22"));
    //     layerCompile.push(tempLayer.getElementsByClassName("led23"));
    //     layerCompile.push(tempLayer.getElementsByClassName("led30"));
    //     layerCompile.push(tempLayer.getElementsByClassName("led31"));
    //     layerCompile.push(tempLayer.getElementsByClassName("led32"));
    //     layerCompile.push(tempLayer.getElementsByClassName("led33"));
    //     layer0.push(layerCompile);
    // }
}
