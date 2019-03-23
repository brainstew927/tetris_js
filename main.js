canvas = document.getElementById("canv");
ctx = canvas.getContext("2d");
txt = document.getElementById("TextArea1");

ex = false;

x = 60;
y = 50;

vel = 1;

ob_hg = 50;
ob_wd = 50;

function game_start() {
    x = getRndInteger(0, canvas.width - ob_wd);
    y = getRndInteger(0, canvas.height - ob_wd);
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(x, y, ob_hg, ob_wd);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
    console.log("eseguito!");

    console.log(y)
    update();
}

function update() {
    if (y + vel <=  canvas.height - ob_hg) {
        y = y + vel;
       
    }
    else {
        ex = true;
    }

}

game_start();
setInterval(draw, 10);
