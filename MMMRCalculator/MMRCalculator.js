var list;
var sortedList;
var mean = 0;
var median = 0;
var mode = [];
var range = 0;

document.querySelector('#list').addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        finish();
    }
});

function finish() {

    list = document.getElementById('list').value;
    sortedList = list.split(",");
    sortedList = mergeSort(sortedList);

    mean = meanFind();
    median = medianFind();
    modeFind();
    range = sortedList[sortedList.length - 1] - sortedList[0];

    document.getElementById('list').value = sortedList;
    document.getElementById('mean').innerHTML = mean;
    document.getElementById('median').innerHTML = median;
    document.getElementById('mode').innerHTML = mode;
    document.getElementById('range').innerHTML = range;
    //console.log("Hello");

}

function meanFind() {
    mean = 0;
    for (var i = 0; i < sortedList.length; i++) {
        mean += parseInt(sortedList[i]);
    }
    return mean / sortedList.length;
}

function medianFind() {
    if (sortedList.length % 2 == 0) {
        var top = parseInt(sortedList[sortedList.length / 2]);
        var bottom = parseInt(sortedList[sortedList.length / 2 - 1]);
        return (bottom + top) / 2;
    }
    else {
        return sortedList[Math.floor(sortedList.length / 2)];
    }
}

function modeFind() {
    mode = [];
    for (var p = 0; p < sortedList.length; p++) {
        var count = 0;
        for (var s = 0; s < sortedList.length; s++) {
            if (sortedList[p] == sortedList[s]) {
                count++;
            }
        }
        var insert = [sortedList[p], count];
        mode.push(insert);
    }

    do {
        var comb = 0;
        for (var i = 0; i < mode.length - 1; i++) {
            if (mode[i][1] < mode[i + 1][1] || mode[i][0] == mode[i + 1][0]) {
                mode.splice(i, 1);
                comb++;
            }
            else if (mode[i][1] > mode[i + 1][1]) {
                mode.splice(i + 1, 1);
                comb++;
            }
        }
    } while (comb != 0)
    for (var i = 0; i < mode.length; i++) {
        mode[i] = mode[i][0];
    }
}

function merge(left, right) {
    var result = [],
        il = 0,
        ir = 0;

    while (il < left.length && ir < right.length) {
        if (parseInt(left[il]) < parseInt(right[ir])) {
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