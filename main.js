canvas = document.getElementById("canv");
ctx = canvas.getContext("2d");
txt = document.getElementById("TextArea1");

ex = false;

movable = false;

x = canvas.width -50;
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
    game_ob.x = x//getRndInteger(0, canvas.width - ob_wd);
    game_ob.y = y//getRndInteger(0, canvas.height - ob_wd);
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


    console.log(game_ob.y)
    update();
}

function mov_man(event) {


    if (movable) {

      //  console.log("game y:" + game_ob.y + " canvas:" + canvas.height);

        if (game_ob.y < canvas.height - ob_hg) {

            if (event.key == 'd') {
                move_dx();
                movable = false;

                
            }
            if (event.key == 'a') {
                movable = false;
                move_sx();
            }
        }
    }
}

function move_dx() {
    if (game_ob.x + ob_wd <= canvas.width - ob_wd) {
        game_ob.x += ob_wd;
    }
}

function move_sx() {
    if (game_ob.x - ob_wd >= 0) {
        game_ob.x -= ob_wd;
    }
}

function update() {

    movable = true;

    if (game_ob.y + ob_hg <=  canvas.height - ob_hg) {
        game_ob.y = game_ob.y + ob_hg;

    }
    else {
        ex = true;
    }

}

game_start();
setInterval(draw, 400);