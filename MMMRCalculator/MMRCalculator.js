var list;
var sortedList;
var mean = 0;
var median = 0;
var mode = 0;
var range = 0;


function finish() {
    list = document.getElementById('list').value;
    sortedList = list.split(",");
    sortedList = mergeSort(sortedList);
    range = sortedList[sortedList.length - 1] - sortedList[0];
    mean = meanFind(sortedList);
    median = sortedList[Math.floor(sortedList.length/2)];
    document.getElementById('list').value = sortedList;
    document.getElementById('mean').innerHTML = mean;
    document.getElementById('median').innerHTML = median;
    document.getElementById('mode').innerHTML = mode;
    document.getElementById('range').innerHTML = range;
    console.log("Hello");

}

function meanFind(){
    for(var i = 0; i < sortedList.length - 1;i++){
        mean += sortedList.length;
    }
    return mean/sortedList.length;
}

function merge(left, right) {
    var result = [],
        il = 0,
        ir = 0;

    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        }
        else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}

function mergeSort(items) {

    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left = items.slice(0, middle),
        right = items.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}