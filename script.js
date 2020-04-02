var ship;
var stars = [];
var countStars = 2;
var timer = 5;
var checkNewGame = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER);
    ship = new Ship();
    setInterval(timeIt, 1000);
    for (let i = 0; i < countStars; i++) {
        stars.push(new Star());
    }
}

function draw() {
    background(0);

    if (checkNewGame) {
        textSize(32);
        text('AsterboyJS', width / 2, height / 2);
        fill(255);

    } else {
        for (let i = 0; i < stars.length; i++) {
            stars[i].render();
            stars[i].update();
            stars[i].edges();
            if (stars[i].hits(ship)) {
                stars.splice(i, 1);
                var explosion = new Explosion(stars[i]);

            }
        }

        if (stars.length == 0 && timer > 0) {
            ++countStars;
            timer = 30;

        }

        ship.turn();
        ship.render();
        ship.update();
        ship.edges();

        if (timer) {
            textSize(12);
            text(timer, width / 2, height / 2);
            fill(255);
        }
        if (timer == 0) {
            text('game over', width / 2, height / 2);
            text('Press ENTER to start a new game', width / 2, height / 2 + 20);
            fill(255);
            stars = [];
        }
    }
}

function timeIt() {
    if (timer > 0) {
        timer--;
    }
}