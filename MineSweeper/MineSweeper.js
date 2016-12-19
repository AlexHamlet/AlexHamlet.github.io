var gameover = false;
var mine = [];
var tableSize = 0;
tableSize = prompt("Enter Table Size");
vBuild();
genMines();

function vBuild() {
    var strHTML;
    var i, j;

    //Start building the table
    strHTML = "<table style='margin-left:auto; margin-right:auto'>";

    strHTML += "<tr>";
    strHTML += "<td colspan='6' style='text-align:center; ''>Minesweeper</td>";
    strHTML += "</tr>";
    strHTML += "<tr>";
    strHTML += "<td colspan='6' style='text-align:center' >";
    strHTML += "<input type='button' id='btnNewGame' value='New Game' onclick='vNewGame()'/>";
    strHTML += "</td>";
    strHTML += "</tr>";


    for (i = 0; i < tableSize; i++) {
        strHTML += "<tr>";
        for (j = 0; j < tableSize; j++) {
            strHTML += "<td>";
            strHTML += "<img src='https://upload.wikimedia.org/wikipedia/commons/b/b3/Solid_gray.png' id = 'img" + i + "," + j + "' onclick='vClick(" + i + "," + j + ")' />";
            strHTML += "</td>";
        }
        strHTML += "</tr>";
    }

    strHTML += "</table>";
    document.getElementById('frmGrid').innerHTML = strHTML;
}

function genMines() {
    mine = [];
    var row, column, same;
    for (var i = 0; i < (tableSize * tableSize / 3); i++) {
        same = false;
        row = Math.floor(Math.random() * (tableSize - 1));
        column = Math.floor(Math.random() * (tableSize - 1));
        mine.push([row, column]);
        for (var c = 0; c < i; c++) {
            if (mine.length > 1) {
                var check = i;

                if (mine[c][0] == mine[check][0] && mine[c][1] == mine[check][1]) {
                    same = true;
                    mine.pop();
                }
            }
        }
    }
}


function vNewGame() {
    window.location.reload();
}

function vClick(m, p) {
    if (gameover == false) {
        var count = 0;
        var stop = false;
        for (var i = 0; i < mine.length; i++) {
            if (m == mine[i][0] && p == mine[i][1]) {
                alert("You Clicked A Mine!");
                stop = true;
                gameover = true;
                for (var i = 0; i < mine.length; i++) {
                    document.getElementById("img" + mine[i][0] + ',' + mine[i][1]).setAttribute("src", "MineSweeperImages/M.png");
                }
            }
        }
        if (stop == false) {
            for (var i = 0; i < mine.length; i++) {
                if (mine[i] != undefined) {
                    if (m > 0) {
                        for (var t = -1; t < 2; t++) {
                            if (p - t > -1 && p - t < tableSize) {
                                if (m - 1 == mine[i][0] && p - t == mine[i][1]) {
                                    count++;
                                }
                            }
                        }
                    }
                    if (m < tableSize - 1) {
                        for (var t = -1; t < 2; t++) {
                            if (p - t > -1 && p - t < tableSize)
                                if (m + 1 == mine[i][0] && p - t == mine[i][1]) {
                                    count++;
                                }
                        }
                    }
                    if (p > 0) {
                        if (p - 1 == mine[i][1] && m == mine[i][0]) {
                            count++;
                        }
                    }
                    if (p < tableSize - 1) {
                        if (p + 1 == mine[i][1] && m == mine[i][0]) {
                            count++;
                        }
                    }
                    document.getElementById("img" + m + ',' + p).removeAttribute('src');
                }
            }
            console.log(count);

            if (count == 0) {

                if (m > 0) {
                    for (var t = -1; t < 2; t++) {
                        if (p - t > -1 && p - t < tableSize) {
                            rClick(m - 1, p - t, p, m);
                        }
                    }
                }
                if (m < tableSize - 1) {
                    for (var t = -1; t < 2; t++) {
                        if (p - t > -1 && p - t < tableSize) {
                            rClick(m + 1, p - t, p, m);
                        }
                    }
                }
                if (p > 0) {
                    rClick(m, p - 1, p, m);
                }
                if (p < tableSize - 1) {
                    rClick(m, p + 1, p, m);
                }
            }
            else {
                switch (count) {
                    case 1:
                        document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/1.jpg");
                        break;
                    case 2:
                        document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/2.jpg");
                        break;
                    case 3:
                        document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/3.jpg");
                        break;
                    case 4:
                        document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/4.jpg");
                        break;
                    case 5:
                        document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/5.png");
                        break;
                    case 6:
                        document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/6.jpg");
                        break;
                    case 7:
                        document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/7.jpg");
                        break;
                    case 8:
                        document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/8.jpg");
                        break;
                    default:
                        break;
                }
            }
        }
    }
}

function rClick(m, p, p1, m1) {

    var count = 0;

    for (var i = 0; i < mine.length; i++) {
        if (mine[i] != undefined) {
            if (m > 0) {
                for (var t = -1; t < 2; t++) {
                    if (p - t > -1 && p - t < tableSize) {
                        if (m - 1 == mine[i][0] && p - t == mine[i][1]) {
                            count++;
                        }
                    }
                }
            }
            if (m < tableSize - 1) {
                for (var t = -1; t < 2; t++) {
                    if (p - t > -1 && p - t < tableSize)
                        if (m + 1 == mine[i][0] && p - t == mine[i][1]) {
                            count++;
                        }
                }
            }
            if (p > 0) {
                if (p - 1 == mine[i][1] && m == mine[i][0]) {
                    count++;
                }
            }
            if (p < tableSize - 1) {
                if (p + 1 == mine[i][1] && m == mine[i][0]) {
                    count++;
                }
            }
            document.getElementById("img" + m + ',' + p).removeAttribute('src');
        }
    }
    console.log(count);

    if (count == 0) {
        var typem = (m1 - m);
        var typep = (p1 - p);
        if (typem > 0) {
            if (m > 0) {
                for (var t = -1; t < 2; t++) {
                    if (p - t > -1 && p - t < tableSize) {
                        rClick(m - 1, p - t, p, m);
                    }
                }
            }
        }
        if (typem < 0) {
            if (m < tableSize - 1) {
                for (var t = -1; t < 2; t++) {
                    if (p - t > -1 && p - t < tableSize) {
                        rClick(m + 1, p - t, p, m);
                    }
                }
            }
        }
        if (typep > 0) {
            if (p > 0) {
                rClick(m, p - 1, p, m);
            }
        }
        if (typep < 0) {
            if (p < tableSize - 1) {
                rClick(m, p + 1, p, m);
            }
        }

    }
    else {
        switch (count) {
            case 1:
                document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/1.jpg");
                break;
            case 2:
                document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/2.jpg");
                break;
            case 3:
                document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/3.jpg");
                break;
            case 4:
                document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/4.jpg");
                break;
            case 5:
                document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/5.png");
                break;
            case 6:
                document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/6.jpg");
                break;
            case 7:
                document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/7.jpg");
                break;
            case 8:
                document.getElementById("img" + m + ',' + p).setAttribute("src", "MineSweeperImages/8.jpg");
                break;
            default:
                break;
        }
    }
}
