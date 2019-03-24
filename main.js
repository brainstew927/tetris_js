canvas = document.getElementById("canv");
ctx = canvas.getContext("2d");
txt = document.getElementById("TextArea1");

ex = false;

x = 60;
y = 50;

vel = 1;

ob_hg = 50;
ob_wd = 50;

game_ob = {
    x,
    y
   // type
}

function game_start() {
    game_ob.x = getRndInteger(0, canvas.width - ob_wd);
    game_ob.y = getRndInteger(0, canvas.height - ob_wd);
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(game_ob.x, game_ob.y, ob_hg, ob_wd);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
//    console.log("eseguito!");

    console.log(game_ob.y)
    update();
}

function update() {
    if (game_ob.y + vel <=  canvas.height - ob_hg) {
        game_ob.y = game_ob.y + vel;
       
    }
    else {
        ex = true;
    }

}

game_start();
setInterval(draw, 10);
