var ship;
var stars = [];
var sqaure = [];
var countStars = 1;
var timer = 30;
var checkNewGame = true;
var countLevel = 1;
var countSquare = 2;
var life = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER);
    ship = new Ship();
    setInterval(timeIt, 1000);
    for (let i = 0; i < countStars; i++) {
        stars.push(new Star());
    }
    for (let i = 0; i < countSquare; i++) {
        sqaure.push(new Square());
    }
}

function draw() {
    background(0);

    if (checkNewGame) {
        textSize(32);
        text('AsterboyJS', width / 2, height / 2);
        textSize(12);
        text('Press ENTER to start a new game', width / 2, height / 2 + 25);
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
        for (let i = 0; i < sqaure.length; i++) {
            sqaure[i].render();
            sqaure[i].update();
            sqaure[i].edges();
            sqaure[i].turn();
            if (sqaure[i].hits(ship)) {
                sqaure.splice(i, 1);
                life = false;
                var explosion = new Explosion(sqaure[i]);
            }
        }

        if (stars.length == 0 && timer > 0 && life) {
            ++countStars;
            timer = 30;
            ++countLevel;
            for (let i = 0; i < countStars; i++) {
                stars.push(new Star());
            }
            for (let i = 0; i < countSquare; i++) {
                sqaure.push(new Square());
            }
        }

        ship.turn();
        ship.render();
        ship.update();
        ship.edges();

        if (timer && life) {
            textSize(12);
            text(timer, width / 2, height / 2);
            text("Level " + countLevel, width / 2, height / 2 + 20);
            fill(255);
        }
        if (timer == 0 || !life) {
            text('GAME OVER', width / 2, height / 2);
            text('Press ENTER to start a new game', width / 2, height / 2 + 20);
            fill(255);
            stars = [];
            sqaure = [];
            statusNewGame = true;
        }
    }
}

function timeIt() {
    if (timer > 0) {
        timer--;
    }
}

function startNewGame() {
    checkNewGame = false;
    countStars = 1;
    countLevel = 1;
    timer = 30;
    life = true;
}